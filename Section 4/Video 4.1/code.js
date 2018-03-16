// $ ember g controller application
// app/index.html
<!DOCTYPE html>
<html>
  ....
  <body>
    <section id="vue-app">
      <ol>
          <li v-for="todo in todos">
            {{ todo.text }}
          </li>
        </ol>
    </section>
    <script type="text/javascript">
      var vueApp = new Vue({
        el: '#vue-app',
        data: {
          todos: [
            { text: 'Learn JavaScript' }
          ]
        }
      })
    </script>
    <section id="ember-app">
      {{content-for "body"}}

      <script src="{{rootURL}}assets/vendor.js"></script>
      <script src="{{rootURL}}assets/exampleapp.js"></script>

      {{content-for "body-footer"}}
    </section>
  </body>
</html>

// app/app.js
...
const App = Application.extend({
  rootElement: '#ember-app',
  ...
});

// app/controllers/application.js
/* GLOBAL vueApp */
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addTodoToList(){
      vueApp.todos.push({ text: this.get('newText') });
      this.set('newText', '');
    }
  }
});


// app/templates/application.hbs
<h3>Add Todos</h3>
<form>
  {{input value=newText}}
  <button {{action 'addTodoToList'}}>Submit</button>
</form>
{{outlet}}
