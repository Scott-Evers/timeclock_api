/**
 * @jest-environment node
 */
const {lambdaHandler} = require('../app.js');
var event, context;

describe('Tests index', async function () {
    test('verifies successful response', async () => {
        const result = await lambdaHandler(event, context)
        expect(result).toBeInstanceOf(Object);
    });
});