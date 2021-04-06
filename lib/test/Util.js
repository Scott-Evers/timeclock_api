const {expect} = require('chai');
const {fetch,getWeekStart} = require('../src/util.cjs');
const CONFIG = require('../src/config.json');

describe('Utilities',() => {
  describe('Fetch', () => {
    it('Sets the week start properly', () => {
      for(let i = -31; i <= 31; i++) {
        let d = new Date();
        d.setDate(new Date().getDate() + i);
        let e = getWeekStart(d)
        expect(e.getDay()).to.equal(CONFIG.weekStartsOn);
      }
    });
    it('Fetches Google home page', async () => {
      let r = await fetch('https://google.com/',{
        method: 'GET'
      });
      
      expect(r.statusCode).lessThan(400);
    });
  });
});
