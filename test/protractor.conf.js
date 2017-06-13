exports.config = {
  // set to "custom" instead of cucumber. 
  framework: 'custom',
 
  // path relative to the current config file 
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],

  cucumberOpts: {
    require: './features/step_definitions/*.js',
    tags: ['@bbqsession'],
    format: 'pretty',
    profile: false,
    'no-source': true
  }
};
