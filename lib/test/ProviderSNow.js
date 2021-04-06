const {expect} = require('chai');
const {getUserByEmail, getTimeSheet} = require('../src/providers/snow.cjs');

describe('ServiceNow Provider',() => {
  describe('User', () => {
    it('Fetches a user by email', async () => {
      let user = await getUserByEmail('severs@involta.com');
      expect(user.email).to.equal('severs@involta.com');
      expect(user.uuid).to.equal('d929a76bdbfc27009eba5888dc96194c');
    });
  });
  describe('Timesheet', () => {
    it('Get a timesheet from SNow', async () => {
      let ts = await getTimeSheet(new Date(2019,9,9),'severs@involta.com');
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
    });
  });
}); 
