const {fetch, getWeekStart} = require('../util');
const creds = require('./creds.json');
const TimeSheet = require('../TimeSheet');
const Entry = require('../Entry');
const Entries = require('../Entries');

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

