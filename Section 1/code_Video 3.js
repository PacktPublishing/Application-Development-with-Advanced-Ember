// $ ember g initializer notification

// app/initializers/notification.js
import EmberObject from '@ember/object';

export function initialize( application ) {
  let message = EmberObject.extend({
    init(){
      Notification.requestPermission().then((result) => {
        console.log(result);
      });
    },
    send(text){
      new Notification(text);
    }
  })

  application.register('notification:message', message);

  application.inject('controller:application', 'notification', 'notification:message');
}

export default {
  initialize
};



// app/controllers/application.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    notify(){
      let message = this.get('message');
      this.get('notification').send(message);
    }
  }
});


// app/templates/application.hbs
{{input value=message}}

<button {{action 'notify'}}>Notify</button>

{{outlet}}
