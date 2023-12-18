import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fyvvyf-должность', 'Unit | Serializer | i-i-s-fyvvyf-должность', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-fyvvyf-должность',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-fyvvyf-режим-сервера',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
