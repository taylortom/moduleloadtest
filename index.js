const { DependencyLoader } = require('adapt-authoring-core');

async function test() {
  const d = new DependencyLoader();
  await d.load();
  console.log('done load', d.dependencies);
}
test();
