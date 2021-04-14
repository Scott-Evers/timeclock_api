import {getUserByEmail, getTimeSheet} from '../src/providers/snow';

describe('ServiceNow Provider',() => {
  describe('User', () => {
    it('Fetches a user by email', async () => {
      let user = await getUserByEmail('severs@involta.com');
      expect(user.Email).toBe('severs@involta.com');
      expect(user.Uuid).toBe('d929a76bdbfc27009eba5888dc96194c');
    });
  });
  describe('Timesheet', () => {
    it('Get a timesheet from SNow', async () => {
      let ts = await getTimeSheet(new Date(2019,9,9),'severs@involta.com');
      //console.log('ts:',JSON.stringify(ts,null,2));
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
    });
  });
}); 
