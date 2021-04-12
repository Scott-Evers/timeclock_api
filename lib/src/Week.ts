class Week {
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday: number;

  constructor(monday?: number,
              tuesday?: number,
              wednesday?: number,
              thursday?: number,
              friday?: number,
              saturday?: number,
              sunday?: number) {
                this.Monday = monday ? monday : 0;
                this.Tuesday = tuesday ? tuesday : 0;
                this.Wednesday = wednesday ? wednesday : 0;
                this.Thursday = thursday ? thursday : 0;
                this.Friday = friday ? friday : 0;
                this.Saturday = saturday ? saturday : 0;
                this.Sunday = sunday ? sunday : 0;
              }
}

export default Week;