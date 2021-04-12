import TimeSheet from '../TimeSheet';
export declare const namespace = "ServiceNow";
export declare function getTimeSheet(date: Date, email: string): Promise<TimeSheet>;
export declare function getUserByEmail(email: string): Promise<{
    Uuid: any;
    Login: any;
    Email: any;
}>;
