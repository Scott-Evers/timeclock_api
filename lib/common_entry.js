exports = {
  TimeSheet: require('./src/TimeSheet'),
  Entries: require('./src/Entries'),
  Entry: require('./src/Entry'),
  Config: require('./src/config.json'),
  Utils: require('./src/util'),
  Providers: {
    Involta: require('./src/providers/involta'),
    ServiceNow: require('./src/providers/snow')
  }
}
console.log('CJS:',exports);

