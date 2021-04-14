import * as Types from './Types';
import Week from './Week';
import Task from './Task';
import {getWeekStart} from './util';

class Entry {
      EntryId: string;
      ReadOnly: boolean;
      Task: Types.Task;
      Total: number;
      Week: Types.Week;
      Comment: string;
      WeekStartsOn: Date;

      constructor (id?: string, 
            readOnly?: boolean, 
            task?: Types.Task, 
            weekContains?: Date, 
            total?: number, 
            comment?: string, 
            week?: Types.Week) {
            this.EntryId = id ? id : '';
            this.ReadOnly = readOnly ? readOnly : false;
            this.Task = task ? task : new Task();
            this.Total = total ? total : 0;
            this.Week = week ? week : new Week();
            this.Comment = comment ? comment : '';
            this.WeekStartsOn = weekContains ? getWeekStart(weekContains) : getWeekStart(new Date());
      }
}

export default Entry;