const Entry = require('./Entry.cjs');
const Entries = require('./Entries.cjs');

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
  async refreshFromSource(week,email,provider) {
    let ts = await provider.getTimeSheet(week,email);
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
  }
}



module.exports = TimeSheet;