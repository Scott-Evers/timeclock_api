import Entries from './Entries';
import Week from './Week';
import * as Types from './Types'

class TimeSheet {
  constructor() {
    this.Week = new Week();
    this.Week.Monday = 0;
    this.Week.Tuesday = 0;
    this.Week.Wednesday = 0;
    this.Week.Thursday = 0;
    this.Week.Friday = 0;
    this.Week.Saturday = 0;
    this.Week.Sunday = 0;
    this.Total = 0;
    this.ReadOnly = true;
    this.Entries = new Entries();
  }
  
  Uuid: string; 
  Week: Week;
  Total: number;
  ReadOnly: boolean;
  Entries: Types.Entries;
  
  async refreshFromSource(week: Date,email: string,provider: Types.Provider) {
    let ts = await provider.getTimeSheet(week,email);
    this.Uuid = ts.Uuid;
    this.Week = ts.Week;
    this.Total = ts.Total;
    this.ReadOnly = ts.ReadOnly;
    this.Entries = ts.Entries;
  }
}



export default TimeSheet;