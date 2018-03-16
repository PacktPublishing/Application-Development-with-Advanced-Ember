// Addon
// $ ember addon embercli-bootstrap-components
....
// packt@arlston-laptop:~/emberjs/embercli-bootstrap-components$ npm install
// packt@arlston-laptop:~/emberjs/embercli-bootstrap-components$ npm link
// packt@arlston-laptop:~/emberjs/embercli-bootstrap-components$ ember g blueprint embercli-bootstrap-components
// packt@arlston-laptop:~/emberjs/embercli-bootstrap-components$ ember g component bs-modal

// package.json
{
  "name": "embercli-bootstrap-components",
  "version": "0.0.0",
  "description": "This addon provides components for using bootstrap 4 in Ember.",
  "keywords": [
    "ember-addon",
    "bootstrap 4",
    "ember bootstrap components"
  ],
  ...
  "dependencies": {
    "ember-cli-babel": "^6.6.0",
    "ember-cli-bootstrap-4": "^0.5.6",
    "ember-cli-htmlbars": "^2.0.1"
  },
  ...
}

// addon/components/bs-modal.js
import Component from '@ember/component';
import layout from '../templates/components/bs-modal';

export default Component.extend({
  layout,
  classNames: ['modal', 'fade'],
  elementId: 'exampleModal',
  tabindex: '-1',
  role: 'dialog',
});

// addon/templates/components/bs-modal.hbs
<div class="modal-dialog" role="document">
  <div class="modal-content">
    {{yield}}
  </div>
</div>

// blueprints/embercli-bootstrap-components/index.js
/* eslint-env node */
module.exports = {
  description: ''

  afterInstall(options) {
    return this.addAddonsToProject({
      packages: [
      { name: 'ember-cli-bootstrap-4' }
      ]
    })
  }
};



// Example app
// packt@arlston-laptop:~/emberjs$ ember new exampleapp
// packt@arlston-laptop:~/emberjs/exampleapp$ ember install ember-cli-bootstrap-4
// packt@arlston-laptop:~/emberjs/exampleapp$ npm link embercli-bootstrap-components
// emberjs/exampleapp$ ember s


// app/templates/application.hbs
{{#bs-modal id="exampleModal"}}
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save changes</button>
  </div>
{{/bs-modal}}

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

{{outlet}}
