import config from './config';
import Entries from './Entries';
import Entry from './Entry';
import TimeSheet from './TimeSheet';
import * as Types from './Types';
import * as Utils from './util';
import Week from './Week';
import * as ServiceNow from './providers/snow';
import * as Involta from './providers/involta';
declare const Providers: {
    ServiceNow: typeof ServiceNow;
    Involta: typeof Involta;
};
export { config, Entries, Entry, TimeSheet, Types, Utils, Week, Providers, };
