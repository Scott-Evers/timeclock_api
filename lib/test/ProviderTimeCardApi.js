const {expect} = require('chai');
const {getUserByEmail, getTimeSheet} = require('../src/providers/involta');

describe('TimeCardApi Provider',() => {
  describe('Timesheet', () => {
    it('Get a timesheet from API', async () => {
      let ts = await getTimeSheet(new Date(2019,9,9),'severs@involta.com');
      expect(ts.Total).greaterThan(40);
      expect(ts.Monday).to.equal(8);
      expect(ts.Tuesday).to.equal(8);
      expect(ts.Wednesday).to.equal(11);
      expect(ts.Thursday).to.equal(8);
      expect(ts.Friday).to.equal(8);
      expect(ts.Saturday).to.equal(0);
      expect(ts.Sunday).to.equal(0);
      expect(ts.uuid).to.equal('5a7e26eddb9c2810ee436165ca9619e7');
      expect(ts.State).to.equal('Approved');
    });
  });
}); 
