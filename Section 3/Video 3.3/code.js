// packt@arlston-laptop:~/emberjs$ ember addon ember-gallery
// packt@arlston-laptop:~/emberjs/ember-gallery$ ember install ember-engines
// packt@arlston-laptop:~/emberjs/ember-gallery$ npm install --save ember-cli-htmlbars
// packt@arlston-laptop:~/emberjs/ember-gallery$ touch addon/engine.js
// packt@arlston-laptop:~/emberjs/ember-gallery$ touch addon/routes.js
// packt@arlston-laptop:~/emberjs/ember-gallery$ mkdir addon/templates
// packt@arlston-laptop:~/emberjs/ember-gallery$ touch addon/templates/application.hbs
// packt@arlston-laptop:~/emberjs/ember-gallery$ npm link

// index.js
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-gallery',
  lazyLoading: false
});

// config/environment.js
'use strict';

module.exports = function( environment/*, appConfig */) {
  const ENV = {
    modulePrefix: 'ember-gallery',
    environment: environment
  }
  return ENV;
};


// addon/engine.js
import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;
const Eng = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;

// addon/routes.js
import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function(){

});
// addon/templates/application.hbs
<h3>Hello from ember-gallery engine!</h3>

// Parent Application
// packt@arlston-laptop:~/emberjs$ ember new parent-application
// packt@arlston-laptop:~/emberjs/parent-application$ ember install ember-engines
// packt@arlston-laptop:~/emberjs/parent-application$ ember install ember-engines
// packt@arlston-laptop:~/emberjs/parent-application$ ember serve

// app/templates/application.hbs
<h1>Hello from the parent application!</h1>
{{outlet}}

// package.json
{
  ...
  "devDependencies": {
    "ember-gallery": "*",
  }
}

// app/router.js
...
Router.map(function() {
  this.mount('ember-gallery', { path: '/gallery' })
});

...