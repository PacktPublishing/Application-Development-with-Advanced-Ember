// $ ember s
// $ npm install --save ember-cli-sass

// tests/dummy/app/styles/app.scss
@import "ember-cli-bootstrap-4/bootstrap";

// tests/dummy/app/templates/application.hbs
<div class="container">
  <h2 id="title">Welcome to embercli-bootstrap-components</h2>
  <div class="m-4">
    <h3>Block based usage</h3>
    {{#bs-modal id="blockModal"}}
      Some sample content
    {{/bs-modal}}
    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#blockModal">Trigger Block Modal</button>
  </div>
  <div class="m-4">
    <h3>Non-block based usage</h3>
    {{bs-modal id="nonBlockModal"}}
    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#nonBlockModal">Trigger Block Modal</button>
  </div>
</div>

{{outlet}}


// tests/integration/components/bs-modal-test.js
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-modal', 'Integration | Component | bs modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bs-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bs-modal}}
      template block text
    {{/bs-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});



// addon/templates/components/bs-modal.hbs
<div class="modal-dialog" role="document">
  <div class="modal-content">
    {{#if (has-block)}}
      {{yield}}
    {{else}}
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        {{yield}}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    {{/if}}
  </div>
</div>