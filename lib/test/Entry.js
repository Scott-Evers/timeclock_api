const {expect} = require('chai');
const CONFIG = require('../src/config.json');

const Entry = require('../src/Entry.cjs');

describe('Entry Class',() => {
  describe('Initialization', () => {
    it('Sets all other properties', () => {
      let e = new Entry('id','status','task',1,null,2.1,'comment');
      expect(e.EntryId).to.equal('id');
      expect(e.Status).to.equal('status');
      expect(e.Task).to.equal('task');
      expect(e.Offset).to.equal(1);
      expect(e.Hours).to.equal(2.1);
      expect(e.Comment).to.equal('comment');
    });
  });
});
