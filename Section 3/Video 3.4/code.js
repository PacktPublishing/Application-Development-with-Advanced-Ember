// packt@arlston-laptop:~/emberjs$ ember addon ember-chat
// packt@arlston-laptop:~/emberjs/ember-gallery$ ember install ember-engines
// packt@arlston-laptop:~/emberjs/ember-gallery$ npm install --save ember-cli-htmlbars
// packt@arlston-laptop:~/emberjs/ember-gallery$ touch addon/engine.js
// packt@arlston-laptop:~/emberjs/ember-gallery$ mkdir addon/templates
// packt@arlston-laptop:~/emberjs/ember-gallery$ touch addon/templates/application.hbs
// packt@arlston-laptop:~/emberjs/ember-gallery$ mkdir addon/controllers
// packt@arlston-laptop:~/emberjs/ember-gallery$ touch addon/controllers/application.js
// packt@arlston-laptop:~/emberjs/ember-gallery$ npm link

// index.js
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-chat',
  lazyLoading: false
});

// config/environment.js
'use strict';

module.exports = function( environment/*, appConfig */) {
  const ENV = {
    modulePrefix: 'ember-chat',
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
  Resolver,
  dependencies: {
    externalRoutes: [
      'home'
    ]
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;

// addon/controllers/application.js
import Controller from '@ember/controller';

export default Controller.extend({
  messages: [],
  actions: {
    sendChat(){
      this.get('messages').pushObject(this.get('chatInput'));
      this.set('chatInput', '');
    }
  }
});

// addon/templates/application.hbs
<h1>Hello from the parent application!</h1>
{{#link-to 'ember-gallery.index'}}Gallery{{/link-to}}
{{outlet}}
<div class="chat">
  {{mount 'ember-chat'}}
</div>

// Parent Application
// app/app.js
...
const App = Application.extend({
  ...
  engines: {
    emberGallery: {
      dependencies: {
        externalRoutes: {
          home: 'index'
        }
      }
    }
  }
});
...

// app/styles/app.css
.chat{
  position: fixed;
  bottom: 0;
  right: 10px;
  padding: 10px;
  min-width: 200px;
  border: 2px solid #aaa
}


// app/templates/application.hbs
<h1>Hello from the parent application!</h1>
{{#link-to 'ember-gallery.index'}}Gallery{{/link-to}}
{{outlet}}
<div class="chat">
  {{mount 'ember-chat'}}
</div>

// package.json
{
  ...
  "devDependencies": {
    "ember-gallery": "*",
    "ember-chat": "*",
  }
}