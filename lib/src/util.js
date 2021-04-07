const axios = require('axios').default;
const CONFIG = require('./config.json');

exports.getWeekStart = function(contains) {
  if (contains.getDay() === CONFIG.weekStartsOn) return contains;
  else {
    contains.setDate(contains.getDate()-contains.getDay()+ CONFIG.weekStartsOn);
    return contains;
  } 
}

exports.fetch = async function(url, options) {

  console.log('fetch:',url);
  return axios(url,options);
  /*let p = new Promise((resolve, reject) => {
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
  return p; */
}
