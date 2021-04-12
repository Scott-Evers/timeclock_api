import {getTimeSheet} from '../src/providers/involta';

describe('TimeCardApi Provider',() => {
  describe('Timesheet', () => {
    it('Get a timesheet from API', async () => {
      let ts = await getTimeSheet(new Date(2019,9,9),'severs@involta.com');
      expect(ts.Total).toBeGreaterThan(40);
      expect(ts.Week.Monday).toBe(8);
      expect(ts.Week.Tuesday).toBe(8);
      expect(ts.Week.Wednesday).toBe(11);
      expect(ts.Week.Thursday).toBe(8);
      expect(ts.Week.Friday).toBe(8);
      expect(ts.Week.Saturday).toBe(0);
      expect(ts.Week.Sunday).toBe(0);
      expect(ts.Uuid).toBe('5a7e26eddb9c2810ee436165ca9619e7');
      expect(ts.ReadOnly).toBe(false);
    });
  });
}); 
