export class TimeSheetType {
  constructor();
  Monday: number;
  Tuesday: number;

  refreshFromSource(week: Date, email: string, provider: any): TimeSheetType
}

exports.TimeSheet