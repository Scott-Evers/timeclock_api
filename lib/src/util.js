import https from 'https';
import CONFIG from './config.js';

export function getWeekStart (contains) {
  if (contains.getDay() === CONFIG.weekStartsOn) return contains;
  else {
    contains.setDate(contains.getDate()-contains.getDay()+ CONFIG.weekStartsOn);
    return contains;
  } 
}

export async function fetch(url, options) {

  console.log('fetch:',url);
  let p = new Promise((resolve, reject) => {
  const req = https.request(url,options, (res) => {
    if (res.statusCode >= 400) reject(res);
    let data = '';
    res.on('data',(d) => {
      data += d;
    });
    res.on('end',() => {
      if (res.headers['content-type'].startsWith('application/json')) {
        res['data'] = JSON.parse(data);
      }
      else {
        res['data'] = data;
      }
      resolve(res);
    });
  });
  req.end();
  });
  return p;
}
