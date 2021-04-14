import {fetch, getWeekStart} from '../util';
import creds from './creds';
import TimeSheet from '../TimeSheet';
import Entry from '../Entry';
import Entries from '../Entries';
import Week from '../Week';
import Task from '../Task';

export const namespace = 'ServiceNow';

const globalOptions = {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + creds[namespace].secret,
  }
};
export async function getTimeSheet(date: Date, email: string): Promise<TimeSheet> {
  let userSysId = (await getUserByEmail(email)).Uuid;
  let data = (await fetch(`https://${creds[namespace].apiHost}/api/now/table/time_sheet?week_starts_on=${formatStartDate(getWeekStart(date))}&sysparm_fields=monday,tuesday,wednesday,thursday,friday,saturday,sunday,total_hours,sys_id,week_starts_on,state&user=${userSysId}`, globalOptions)).data.result;
  let ts = new TimeSheet();
  if (data.length === 0) {
    console.log('no timesheet found');
    return ts;
  } else if (data.length === 1) {
    data = data[0];
    ts.Week.Monday = parseInt(data.monday);
    ts.Week.Tuesday = parseInt(data.tuesday);
    ts.Week.Wednesday = parseInt(data.wednesday);
    ts.Week.Thursday = parseInt(data.thursday);
    ts.Week.Friday = parseInt(data.friday);
    ts.Week.Saturday = parseInt(data.saturday);
    ts.Week.Sunday = parseInt(data.sunday);
    ts.Total = parseInt(data.total_hours);
    ts.Uuid = data.sys_id;
    ts.ReadOnly = data.state === 'Approved';
    ts.Entries = await getTimesheetEntries(ts.Uuid);
  } else {
    throw `Invalid number of time sheets returned: ${data.length}`;
  }
  return ts;
}

export async function getUserByEmail(email: string) {
  //console.log('getUserByEmail:',email);
  let r = await fetch(`https://${creds[namespace].apiHost}/api/now/table/sys_user?sysparm_limit=1&user_name=${email}&sysparm_fields=sys_id,name,email`, globalOptions);
  let user = r.data.result[0];
  
  return {
    Uuid: user.sys_id,
    Login: user.name,
    Email: user.email.toLowerCase()
  };
}

async function getTimesheetEntries(uuid: string) {
  let fields = [
    'sys_id',
    'name',
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'state',
    'task',
    'top_task',
    'category',
    'total',
    'u_notes',
    'state',
    'u_operational_task.sys_id',
    'u_operational_task.short_description',
    'task.sys_id',
    'task.number',
    'task.short_description',
    'top_task.sys_id',
    'top_task.short_description',
    'task.sys_class_name'
  ];
  let results = (await fetch(
    `https://${creds[namespace].apiHost}/api/now/table/time_card?sysparm_query=time_sheet=${uuid}&sysparm_fields=${fields.join(',')}`, 
    globalOptions)).data.result;
  let entries = new Entries();
  results.forEach((result) => {
    let task = new Task(result['task.sys_id'],result['task.number'],undefined,undefined);
    switch(result['task.sys_class_name']) {
      case 'pm_project_task':
        task.Name = [result['task.short_description'],result['top_task.short_description']].join(' : ');
        task.RequiresComment = false;
        break;
      case 'vtb_task':
        task.Name = result['task.short_description'];
        task.RequiresComment = true;
        break;
      case '':
        task.Uuid = result.category;
        task.Id = result.category;
        task.Name = result.category;
        task.RequiresComment = true;
        break;
      default:
        throw 'Task type not implemented: ' + result['task.sys_class_name'];
    }
    entries.push(new Entry(result.sys_id,
      result.state === 'Approved',
      task,
      undefined,
      result.total,
      result.u_notes,
      new Week(result.monday,result.tuesday,result.wednesday,result.thursday,result.friday,result.saturday,result.sunday))
      );
  });
  return entries;
}

function formatStartDate(date: Date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

      return [year, month, day].join('-');
}


