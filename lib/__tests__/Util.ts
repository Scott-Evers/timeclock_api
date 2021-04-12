import {fetch,getWeekStart} from '../src/util';
import CONFIG from '../src/config';

describe('Utilities',() => {
  describe('Fetch', () => {
    it('Sets the week start properly', () => {
      for(let i = -31; i <= 31; i++) {
        let d = new Date();
        d.setDate(new Date().getDate() + i);
        let e = getWeekStart(d)
        expect(e.getDay()).toBe(CONFIG.weekStartsOn);
      }
    });
    it('Fetches Google home page', async () => {
      let r = await fetch('https://google.com/',{
        method: 'GET'
      });
      
      expect(r.status).toBeLessThan(400);
    });
  });
});
