import * as Types from './Types';
import Week from './Week';
import {getWeekStart} from './util';

class Entry {
      EntryId: string;
      ReadOnly: boolean;
      Task: string;
      Total: number;
      Week: Types.Week;
      Comment: string;
      WeekStartsOn: Date;

      constructor (id?: string, 
            readOnly?: boolean, 
            taskId?: string, 
            weekContains?: Date, 
            total?: number, 
            comment?: string, 
            week?: Types.Week) {
            this.EntryId = id ? id : '';
            this.ReadOnly = readOnly ? readOnly : false;
            this.Task = taskId ? taskId : ""; //TODO: create task class that looks up the taks info from the ID.  change type of property to class
            this.Total = total ? total : 0;
            this.Week = week ? week : new Week();
            this.Comment = comment ? comment : '';
            this.WeekStartsOn = weekContains ? getWeekStart(weekContains) : getWeekStart(new Date());
      }
}

export default Entry;