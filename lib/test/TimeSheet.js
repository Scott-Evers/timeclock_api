import {expect} from 'chai';
import TimeSheet from '../src/TimeSheet.js';
import * as provider from '../src/providers/snow.js';

describe('TimeSheet (ServiceNow)',() => {
  describe('Timesheet', () => {
    it('Get a timesheet from SNow', async () => {
      let ts = new TimeSheet();
      await ts.refreshFromSource(new Date(2019,9,9),'severs@involta.com',provider);
      expect(ts.Total).to.equal(44);
      expect(ts.Monday).to.equal(10);
      expect(ts.Tuesday).to.equal(10);
      expect(ts.Wednesday).to.equal(7);
      expect(ts.Thursday).to.equal(9);
      expect(ts.Friday).to.equal(8);
      expect(ts.Saturday).to.equal(0);
      expect(ts.Sunday).to.equal(0);
      expect(ts.uuid).to.equal('171e2291dba4c81458ebf381399619a5');
      expect(ts.State).to.equal('Approved');
      console.log(ts.Entries.length);
    });
  });
});