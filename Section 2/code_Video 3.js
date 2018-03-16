// $ ember install ember-cli-mirage
// $ ember g model Category name:string image:string description:string
// $ ember g mirage-factory Category
// $ ember g template loading

// app/routes/categories.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('category');
  }
});

// app/templates/categories.hbs
...
  <ul>
    {{#each model as |category|}}
      <li>{{category.name}}</li>
    {{/each}}
  </ul>
...

// app/templates/loading.hbs
<div class="loading">
  Please wait a while!
</div>


// mirage/config.js
export default function() {
  this.timing = 1000;
  this.get('/categories');
}
// mirage/scenarios/default.js
export default function( server ) {
  server.createList('category', 10);
}


// mirage/factories/category.js
import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.commerce.productName();
  },
  image(){
    return faker.image.image(100,100);
  },
  description(){
    return faker.lorem.sentence();
  }
});

