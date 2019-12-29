const { App } = require('adapt-authoring-core');

async function test() {
  if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'dev';
  }
  await App.instance.onReady();
}

test();
