const { App } = require('adapt-authoring-core');

async function test() {
  await App.instance.onReady();
}

test();
