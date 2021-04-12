import TimeSheet from '../src/TimeSheet';
import * as provider from '../src/providers/snow';

describe('TimeSheet (ServiceNow)',() => {
  describe('Timesheet', () => {
    it('Get a timesheet from SNow', async () => {
      let ts = new TimeSheet();
      await ts.refreshFromSource(new Date(2019,9,9),'severs@involta.com',provider);
      expect(ts.Total).toBe(44);
      expect(ts.Week.Monday).toBe(10);
      expect(ts.Week.Tuesday).toBe(10);
      expect(ts.Week.Wednesday).toBe(7);
      expect(ts.Week.Thursday).toBe(9);
      expect(ts.Week.Friday).toBe(8);
      expect(ts.Week.Saturday).toBe(0);
      expect(ts.Week.Sunday).toBe(0);
      expect(ts.Uuid).toBe('171e2291dba4c81458ebf381399619a5');
      expect(ts.ReadOnly).toBe(true);
      //console.log(ts.Entries.length);
    });
  });
});
