console.log('function code');
const TimeSheet = require('timecard_lib/TimeSheet.cjs');
const provider = require('timecard_lib/providers/snow.cjs');
//import TimeSheet from 'timecard_lib/TimeSheet';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        console.log('TimeSheet:',TimeSheet);
        
        let ts = new TimeSheet();
        await ts.refreshFromSource(new Date(2020,9,9),'severs@involta.com',provider);
        return ts;
        
    } catch (err) {
        console.log(err);
        return err;
    }

};
