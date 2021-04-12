import Week from './Week';
import * as Types from './Types';
declare class TimeSheet {
    constructor();
    Uuid: string;
    Week: Week;
    Total: number;
    ReadOnly: boolean;
    Entries: Types.Entries;
    refreshFromSource(week: Date, email: string, provider: Types.Provider): Promise<void>;
}
export default TimeSheet;
