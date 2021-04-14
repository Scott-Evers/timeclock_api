import * as Types from './Types';
declare class Entry {
    EntryId: string;
    ReadOnly: boolean;
    Task: Types.Task;
    Total: number;
    Week: Types.Week;
    Comment: string;
    WeekStartsOn: Date;
    constructor(id?: string, readOnly?: boolean, task?: Types.Task, weekContains?: Date, total?: number, comment?: string, week?: Types.Week);
}
export default Entry;
