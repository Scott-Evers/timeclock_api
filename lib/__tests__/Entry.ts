import Entry from '../src/Entry';

describe('Entry Class',() => {
  describe('Initialization', () => {
    test('Sets all other properties', () => {
      let e = new Entry('id',false,'task',new Date(),2.1,'comment');
      expect(e.EntryId).toBe('id');
      expect(e.ReadOnly).toBe(false);
      expect(e.Task).toBe('task');
      expect(e.Total).toBe(2.1);
      expect(e.Comment).toBe('comment');
    });
  });
});
