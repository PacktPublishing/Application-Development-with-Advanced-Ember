// $ ember g route categories
// $ ember g route categories/images
// $ ember g route categories/description

// app/routes/categories.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return ['Dogs', 'Cats', 'Lizards', 'Snakes', 'Tortoises', 'Ferrets'];
  }
});



// app/styles/app.css
body{
  margin: 0;
  padding: 0;
}
.container{
  min-height: 800px;
  max-width: 90%;
  margin: 0 auto;
  border: 5px solid #ccc;
  padding: 10px;
}
.categories{
  padding: 10px;
  border: 5px solid #ccc;
  margin: 0 auto;
  max-width: 90%;
  min-height: 600px;
}
.images, .description{
  padding: 10px;
  border: 5px solid #ccc;
  margin: 0 auto;
  max-width: 90%;
  min-height: 400px;
  text-align: center;
}

// app/templates/application.hbs
<div class="container">
  Welcome to the application route!
  {{outlet}}
</div>

// app/templates/categories.hbs
<div class="categories">
  Welcome to the categories route!
  <ul>
    {{#each model as |category|}}
      <li>{{category}}</li>
    {{/each}}
  </ul>
  {{#link-to 'categories.images'}}Images{{/link-to}}
  {{#link-to 'categories.description'}}Description{{/link-to}}
  {{outlet}}
</div>


// app/templates/categories/images.hbs
<div class="images">
  <img src="http://lorempixel.com/200/200/" alt="">
  {{outlet}}
</div>

// app/templates/categories/description.hbs
<div class="description">
  We are in the description template!
  {{outlet}}
</div>