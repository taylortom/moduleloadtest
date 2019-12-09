const { DependencyLoader } = require('adapt-authoring-core');

async function test() {
  const d = new DependencyLoader();
  try {
    await d.load();
    console.log('index.js: done load', d.dependencies);
  } catch(e) {
    console.log('index.js: load error', e);
  }
}
test();
