module.exports = {
  'sapp': {
    local_modules_path: "/Users/tom/Projects/adapt_authoring_restructure"
  },
  'adapt-authoring-jsonschemaa': {
    formatOverrides: {
      "date": /.+/
    }
  },
  'adapt-authoring-lang': {
    locale: 'en',
    supportedLanguages: ['en']
  },
  'adapt-authoring-lint': {
    rules: {
    // Possible Errors
      "no-console": 2,
      "no-template-curly-in-string": 1,
    // Best Practices
    // Variables
      "no-unused-vars": 1
    // Stylistic Issues
    // ECMAScript 6
    }
  },
  'adapt-authoring-logger': {
    enabledLevels: ['error', 'warn', 'success', 'info', 'debug'],
    showTimestamp: true
  },
  'adapt-authoring-mongodb': {
    host: "localhost",
    port: 27017,
    dbname: "adapt-authoring-prototype"
  },
  'adapt-authoring-server': {
    host: "localhost",
    port: 5678,
    url: 'http://localhost:5678',
    logStackOnError: true
  }
};
