export interface Provider {
  getTimeSheet(week: Date, email: string): Promise<TimeSheet>
}

export interface Entries {}

export interface Entry {

}

export interface Week {
  Monday: number;
  Tuesday: number;
  Wednesday: number;
  Thursday: number;
  Friday: number;
  Saturday: number;
  Sunday: number;
}

export interface TimeSheet {
  Uuid: string; 
  Week: Week;
  Total: number;
  ReadOnly: boolean;
  Entries: Entries;
}

export interface User {
  Uuid: string;
  Login: string;
  Email: string;
}
