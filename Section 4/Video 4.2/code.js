// $ember g model Post title:string body:string
// $ember g route index
// $ember g adapter application
// $ember g serializer application
// $ember install ember-cli-fastboot

// app/adapters/application.js
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://jsonplaceholder.typicode.com'
});


// app/serializers/application.js
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.RESTSerializer.extend({
  normalizeArrayResponse (store, primaryModelClass, payload, id, requestType){
    let modelName = pluralize(primaryModelClass.modelName);
    return this._super(store, primaryModelClass, { [modelName]: payload }, id, requestType);
  }
});

// app/routes/index.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('post');
  }
});



// app/templates/index.hbs
<h2>Posts</h2>
{{#each model as |post|}}
  <div class="post">
    <h4>{{post.title}}</h4>
    <p>{{post.body}}</p>
  </div>
{{/each}}
{{outlet}}

