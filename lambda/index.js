const https = require('https');

exports.handler = async (event) => {
  
  console.log(JSON.stringify(event));
  const response = {
      statusCode: 200,
      body: JSON.stringify('OK'),
  };
  return response;
};

exports.authenticate = async (event) => {
  console.log(event);
  let options = {
    host: 'involtadev.service-now.com',
    path: '/api/now/table/vtb_card',
    method: 'GET',
    headers: {
      'Authorization': event.authorizationToken,
    }
  }
    let r = await fetch(options);
    console.log('fetch returned', r);
    if (r) return {
     "principalId": "yyyyyyyy", // The principal user identification associated with the token sent by the client.
      "policyDocument": {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Action": "execute-api:Invoke",
            "Effect": "Allow",
            "Resource": "arn:aws:execute-api:*:*:*"
          }
        ]
      }};
      else return {
      "principalId": "unknown", // The principal user identification associated with the token sent by the client.
      "policyDocument": {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Action": "*",
            "Effect": "DENY",
            "Resource": "*"
          }
        ]
      }};
};


const fetch = async (options) => {

  let p = new Promise((resolve, reject) => {
const req = https.request(options, (res) => {
  console.log(res);
  resolve(res.statusCode === 200);
  res.on('end',() => {
    reject('something');
  });
});
req.end();
console.log('request sent'); 
});
  return p;

};