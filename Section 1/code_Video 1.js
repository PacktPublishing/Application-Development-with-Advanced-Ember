$ ember new sample-app
$ cd sample-add
$ ember g route index
$ ember g route about
$ ember g route contact
$ ember g service current-user
$ ember g controller application
$ ember g initializer current-user

// app/controller/application.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    setUser(){
      this.get('user').setUser(this.get('newUser'));
    }
  }
});
// app/initializers/current-user.js
export function initialize( application ) {
  application.inject('controller', 'user', 'service:current-user');
}

export default {
  initialize
};

// app/services/current-user.js
import Service from '@ember/service';

export default Service.extend({
  name: null,
  setUser(name){
    this.set('name', name);
  }
});




// app/templates/application.hbs
{{#if user.name}}
  Welcome {{user.name}}
  <br/>
  {{#link-to 'index'}}Home{{/link-to}}
  {{#link-to 'about'}}About{{/link-to}}
  {{#link-to 'contact'}}Contact{{/link-to}}

  {{outlet}}
{{else}}
  Please Enter your name
  {{input type="text" value=newUser}}
  <button {{action 'setUser'}}>Let me in</button>
{{/if}}

// app/templates/index.hbs
<h1>Home</h1>
{{outlet}}

// app/templates/contact.hbs
<h1>Contact {{user.name}}</h1>
{{outlet}}

