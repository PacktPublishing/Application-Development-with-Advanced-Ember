// $ ember g template error

// app/routes/categories.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('category').then((categories) => {
      return categories;
    }, (reason) => {
      // alert(reason);
      return [{ name: 'Sweet rejection'}];
    });
  }
});

// OR

// app/routes/categories.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.get('store').findAll('category');
  },
  actions: {
    error(reason){
      alert(reason);
    }
  }
});



// mirage/config.js
export default function() {
  // ...
  // this.get('/categories');
};

// app/templates/error.hbs
<div class="error">
  Oh no! an error occured!
</div>
