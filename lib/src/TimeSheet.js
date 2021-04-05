import Entry from './Entry.js';
import Entries from './Entries.js';

import {search} from 'jmespath';

const calculate = (ts) => {};

class TimeSheet {

   constructor() {
    this.Monday = 0;
    this.Tuesday = 0;
    this.Wednesday = 0;
    this.Thursday = 0;
    this.Friday = 0;
    this.Saturday = 0;
    this.Sunday = 0;
    this.Total = 0;
    this.State = 'New';
    this.Entries = new Entries();
  }

  refreshFromSource = async (week,email,provider) => {
    let ts = await provider.getTimeSheet(week,email);
    console.log(ts);
    this.uuid = ts.uuid;
    this.Monday = ts.Monday;
    this.Tuesday = ts.Tuesday;
    this.Wednesday = ts.Wednesday;
    this.Thursday = ts.Thursday;
    this.Friday = ts.Friday;
    this.Saturday = ts.Saturday;
    this.Sunday = ts.Sunday;
    this.Total = ts.Total;
    this.State = ts.State;
    this.Entries = ts.Entries;
  };

  Monday;
  Tuesday;
  Wednesday;
  Thursday;
  Friday;
  Saturday;
  Sunday;
  Total;
  uuid;
  State;
  WeekStartsOn;

  Entries;

}



export default TimeSheet;