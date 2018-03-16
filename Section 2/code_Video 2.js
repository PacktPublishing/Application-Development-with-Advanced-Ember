
// app/controllers/application.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPromise(){
      let promise = Ember.RSVP.Promise.resolve(Ember.$.getJSON('https://jsonplaceholder.typicode.com/posts/1'));

      promise.then((value) => {
        Ember.$('#output').html(`Response: ${value.title}`);
      }, (reason) => {
        Ember.$('#output').html(`Reason: ${reason.status}`);
      }).finally(() => {
        Ember.$('#finally').html('Finally, i was resolved!');
      });
    }
  }
});

// app/templates/application.hbs
<button {{action 'createPromise'}}>createPromise</button>
<div id="output"></div>
<div id="finally"></div>
