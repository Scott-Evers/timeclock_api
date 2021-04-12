import {fetch} from '../util';
import creds from './creds';
import {TimeSheet} from '../Types';

exports.namespace = 'TimeClockApi';

const globalOptions = {
  method: 'GET',
  headers: {
    'secret': creds[exports.namespace].secret,
  }
};

export async function getTimeSheet(date: Date, email: string): Promise<TimeSheet> {
  let ts = (await fetch(`https://${creds[module.exports.namespace].apiHost}/${creds[module.exports.namespace].stage}/ts?date=${date}&user=${email}`, globalOptions)).data;
  return ts;
}

