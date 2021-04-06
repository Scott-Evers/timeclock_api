const {getWeekStart} = require('./util.cjs');

function Entry (id, status, taskId, offset, weekStartsOn, hours, comment, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
      this.EntryId = id ? id : '';
      this.Status = status ? status : 'Pending';
      this.Task = taskId ? taskId : ""; //TODO: create task class that looks up the taks info from the ID.  change type of property to class
      this.Offset = offset ? offset : 0;
      this.Hours = hours ? hours : 0;
      this.Monday = monday ? monday : 0;
      this.Tuesday = tuesday ? tuesday : 0;
      this.Wednesday = wednesday ? wednesday : 0;
      this.Thursday = thursday ? thursday : 0;
      this.Friday = friday ? friday : 0;
      this.Saturday = saturday ? saturday : 0;
      this.Sunday = sunday ? sunday : 0;
      this.Comment = comment ? comment : '';
      this.WeekStartsOn = weekStartsOn;

      //console.log('dirname',__dirname );
}

module.exports = Entry;