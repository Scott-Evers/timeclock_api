const {fetch, getWeekStart} = require('../util');
const creds = require('./creds.json');
const TimeSheet = require('../TimeSheet');
const Entry = require('../Entry');
const Entries = require('../Entries');

exports.namespace = 'ServiceNow';

const globalOptions = {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + creds[module.exports.namespace].secret,
  }
};
exports.getTimeSheet = async function(date, email) {
  let userSysId = (await module.exports.getUserByEmail(email)).uuid;
  let data = (await fetch(`https://${creds[module.exports.namespace].apiHost}/api/now/table/time_sheet?week_starts_on=${formatStartDate(getWeekStart(date))}&sysparm_fields=monday,tuesday,wednesday,thursday,friday,saturday,sunday,total_hours,sys_id,week_starts_on,state&user=${userSysId}`, globalOptions)).data.result;
  let ts = new TimeSheet(null,null,null);
  if (data.length === 0) {
    console.log('no timesheet found');
    return ts;
  } else if (data.length === 1) {
    data = data[0];
    ts.Monday = parseInt(data.monday);
    ts.Tuesday = parseInt(data.tuesday);
    ts.Wednesday = parseInt(data.wednesday);
    ts.Thursday = parseInt(data.thursday);
    ts.Friday = parseInt(data.friday);
    ts.Saturday = parseInt(data.saturday);
    ts.Sunday = parseInt(data.sunday);
    ts.Total = parseInt(data.total_hours);
    ts.uuid = data.sys_id;
    ts.State = data.state;
    ts.Entries = await getTimesheetEntries(ts.uuid);
  } else {
    throw `Invalid number of time sheets returned: ${data.length}`;
  }
  return ts;
}

exports.getUserByEmail = async function (email) {
  console.log('getUserByEmail:',email);
  let r = await fetch(`https://${creds[module.exports.namespace].apiHost}/api/now/table/sys_user?sysparm_limit=1&user_name=${email}&sysparm_fields=sys_id,name,email`, globalOptions);
  let user = r.data.result[0];
  
  return {
    uuid: user.sys_id,
    login: user.name,
    email: user.email.toLowerCase()
  };
}

async function getTimesheetEntries(uuid) {
  let results = (await fetch(`https://${creds[module.exports.namespace].apiHost}/api/now/table/time_card?sysparm_query=time_sheet=${uuid}&sysparm_fields=sys_id,name,sunday,monday,tuesday,wednesday,thursday,friday,saturday,state,task,top_task,category,total,u_notes,state`, globalOptions)).data.result;
  let entries = new Entries();
  results.forEach(result => {
    entries.push(new Entry(result.sys_id,result.state,null,null,result.total,result.u_notes,result.monday,result.tuesday,
      result.wednesday,result.thursday,result.friday,result.saturday,result.sunday))
  });
  return entries;
}

function formatStartDate(date) {
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


