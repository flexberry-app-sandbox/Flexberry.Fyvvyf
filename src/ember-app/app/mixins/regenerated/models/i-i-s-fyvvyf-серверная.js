import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iP: DS.attr('string'),
  настройки: DS.attr('string'),
  порт: DS.attr('number'),
  протокол: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-fyvvyf-сотрудник', { inverse: null, async: false }),
  контроллер: DS.hasMany('i-i-s-fyvvyf-контроллер', { inverse: 'серверная', async: false })
});

export let ValidationRules = {
  iP: {
    descriptionKey: 'models.i-i-s-fyvvyf-серверная.validations.iP.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настройки: {
    descriptionKey: 'models.i-i-s-fyvvyf-серверная.validations.настройки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  порт: {
    descriptionKey: 'models.i-i-s-fyvvyf-серверная.validations.порт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  протокол: {
    descriptionKey: 'models.i-i-s-fyvvyf-серверная.validations.протокол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-fyvvyf-серверная.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контроллер: {
    descriptionKey: 'models.i-i-s-fyvvyf-серверная.validations.контроллер.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СервернаяE', 'i-i-s-fyvvyf-серверная', {
    протокол: attr('Протокол', { index: 0 }),
    настройки: attr('Настройки', { index: 1 }),
    iP: attr('IP', { index: 2 }),
    порт: attr('Порт', { index: 3 }),
    сотрудник: belongsTo('i-i-s-fyvvyf-сотрудник', 'Сотрудник', {
      имя: attr('Имя', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'имя' }),
    контроллер: hasMany('i-i-s-fyvvyf-контроллер', 'Контроллер', {
      модель: attr('Модель', { index: 0 }),
      настройки: attr('Настройки', { index: 1 }),
      сенсоры: belongsTo('i-i-s-fyvvyf-сенсоры', 'Сенсоры', {
        тип: attr('Тип', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'тип' })
    })
  });

  modelClass.defineProjection('СервернаяL', 'i-i-s-fyvvyf-серверная', {
    протокол: attr('Протокол', { index: 0 }),
    настройки: attr('Настройки', { index: 1 }),
    iP: attr('IP', { index: 2 }),
    порт: attr('Порт', { index: 3 }),
    сотрудник: belongsTo('i-i-s-fyvvyf-сотрудник', 'Имя', {
      имя: attr('Имя', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
