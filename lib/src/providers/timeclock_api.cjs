const {fetch, getWeekStart} = require('../util.cjs');
const creds = require('./creds.json');
const TimeSheet = require('../TimeSheet.cjs');
const Entry = require('../Entry.cjs');
const Entries = require('../Entries.cjs');

exports.namespace = 'TimeClockApi';

const globalOptions = {
  method: 'GET',
  headers: {
    'secret': creds[exports.namespace].secret,
  }
};

exports.getTimeSheet = async function(date, email) {
  let ts = (await fetch(`https://${creds[module.exports.namespace].apiHost}/${creds[module.exports.namespace].stage}/ts?date=${date}&user=${email}`, globalOptions)).data;
  console.log(ts);
  return ts;
}

