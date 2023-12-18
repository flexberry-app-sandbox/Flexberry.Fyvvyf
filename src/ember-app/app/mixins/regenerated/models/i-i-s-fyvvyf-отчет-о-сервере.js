import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  режим: DS.attr('i-i-s-fyvvyf-режим-сервера'),
  расположение: DS.belongsTo('i-i-s-fyvvyf-расположение', { inverse: null, async: false }),
  серверная: DS.belongsTo('i-i-s-fyvvyf-серверная', { inverse: null, async: false })
});

export let ValidationRules = {
  режим: {
    descriptionKey: 'models.i-i-s-fyvvyf-отчет-о-сервере.validations.режим.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расположение: {
    descriptionKey: 'models.i-i-s-fyvvyf-отчет-о-сервере.validations.расположение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  серверная: {
    descriptionKey: 'models.i-i-s-fyvvyf-отчет-о-сервере.validations.серверная.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОСервереE', 'i-i-s-fyvvyf-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 }),
    расположение: belongsTo('i-i-s-fyvvyf-расположение', 'Расположение', {
      адрес: attr('Адрес', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'адрес' }),
    серверная: belongsTo('i-i-s-fyvvyf-серверная', 'Серверная', {
      протокол: attr('Протокол', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'протокол' })
  });

  modelClass.defineProjection('ОтчетОСервереL', 'i-i-s-fyvvyf-отчет-о-сервере', {
    режим: attr('Режим', { index: 0 }),
    расположение: belongsTo('i-i-s-fyvvyf-расположение', 'Адрес', {
      адрес: attr('Адрес', { index: 1 })
    }, { index: -1, hidden: true }),
    серверная: belongsTo('i-i-s-fyvvyf-серверная', 'Протокол', {
      протокол: attr('Протокол', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
