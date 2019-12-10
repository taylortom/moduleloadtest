const App = require('adapt-authoring-core').App;

async function test() {
  App.instance;
  const app = await App.instance.onReady();
  console.log('done', app);
}


test();
