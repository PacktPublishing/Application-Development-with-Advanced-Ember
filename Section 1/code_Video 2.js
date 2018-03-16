// $ ember g component sample-component
// $ ember g controller application

// app/controllers/application.js
import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  firstName: 'John',
  lastName: 'Doe',
  count: 0,
  actions: {
    changeName(){
      this.incrementProperty('count');
      $('#change-count').html(`Invoked ${this.get('count')} times`);
      this.set('firstName', this.get('newFirstName'));
      this.set('lastName', this.get('newLastName'));
    }
  }
});

// app/components/sample-component.js
import Component from '@ember/component';

export default Component.extend({
  count: 0,
  didRender(){
    this._super(...arguments);
    this.incrementProperty('count');
    this.$('#count').html(`Rendered ${this.get('count')} times`);
  }
});

// app/templates/application.hbs
{{sample-component firstName=firstName lastName=lastName}}
<h3>Change Name</h3>
{{input value=newFirstName}}
{{input value=newLastName}}
<button {{action 'changeName'}}>Change</button>
<div id="change-count"></div>

// app/templates/components/sample-component.hbs
Hello {{firstName}} {{lastName}}!
{{yield}}
<div id="count"></div>