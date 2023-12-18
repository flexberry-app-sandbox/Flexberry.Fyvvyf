import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fyvvyf-отчет-о-сервере', 'Unit | Model | i-i-s-fyvvyf-отчет-о-сервере', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fyvvyf-должность',
    'model:i-i-s-fyvvyf-контроллер',
    'model:i-i-s-fyvvyf-отчет-о-сервере',
    'model:i-i-s-fyvvyf-расположение',
    'model:i-i-s-fyvvyf-сенсоры',
    'model:i-i-s-fyvvyf-серверная',
    'model:i-i-s-fyvvyf-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
