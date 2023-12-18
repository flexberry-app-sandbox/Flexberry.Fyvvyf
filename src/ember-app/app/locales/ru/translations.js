import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFyvvyfДолжностьLForm from './forms/i-i-s-fyvvyf-должность-l';
import IISFyvvyfОтчетОСервереLForm from './forms/i-i-s-fyvvyf-отчет-о-сервере-l';
import IISFyvvyfРасположениеLForm from './forms/i-i-s-fyvvyf-расположение-l';
import IISFyvvyfСенсорыLForm from './forms/i-i-s-fyvvyf-сенсоры-l';
import IISFyvvyfСервернаяLForm from './forms/i-i-s-fyvvyf-серверная-l';
import IISFyvvyfСотрудникLForm from './forms/i-i-s-fyvvyf-сотрудник-l';
import IISFyvvyfДолжностьEForm from './forms/i-i-s-fyvvyf-должность-e';
import IISFyvvyfОтчетОСервереEForm from './forms/i-i-s-fyvvyf-отчет-о-сервере-e';
import IISFyvvyfРасположениеEForm from './forms/i-i-s-fyvvyf-расположение-e';
import IISFyvvyfСенсорыEForm from './forms/i-i-s-fyvvyf-сенсоры-e';
import IISFyvvyfСервернаяEForm from './forms/i-i-s-fyvvyf-серверная-e';
import IISFyvvyfСотрудникEForm from './forms/i-i-s-fyvvyf-сотрудник-e';
import IISFyvvyfДолжностьModel from './models/i-i-s-fyvvyf-должность';
import IISFyvvyfКонтроллерModel from './models/i-i-s-fyvvyf-контроллер';
import IISFyvvyfОтчетОСервереModel from './models/i-i-s-fyvvyf-отчет-о-сервере';
import IISFyvvyfРасположениеModel from './models/i-i-s-fyvvyf-расположение';
import IISFyvvyfСенсорыModel from './models/i-i-s-fyvvyf-сенсоры';
import IISFyvvyfСервернаяModel from './models/i-i-s-fyvvyf-серверная';
import IISFyvvyfСотрудникModel from './models/i-i-s-fyvvyf-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fyvvyf-должность': IISFyvvyfДолжностьModel,
    'i-i-s-fyvvyf-контроллер': IISFyvvyfКонтроллерModel,
    'i-i-s-fyvvyf-отчет-о-сервере': IISFyvvyfОтчетОСервереModel,
    'i-i-s-fyvvyf-расположение': IISFyvvyfРасположениеModel,
    'i-i-s-fyvvyf-сенсоры': IISFyvvyfСенсорыModel,
    'i-i-s-fyvvyf-серверная': IISFyvvyfСервернаяModel,
    'i-i-s-fyvvyf-сотрудник': IISFyvvyfСотрудникModel
  },

  'application-name': 'Fyvvyf',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fyvvyf',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fyvvyf',
          title: 'Fyvvyf'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        fyvvyf: {
          caption: 'Fyvvyf',
          title: 'Fyvvyf',
          'i-i-s-fyvvyf-сенсоры-l': {
            caption: 'Сенсоры',
            title: ''
          },
          'i-i-s-fyvvyf-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-fyvvyf-расположение-l': {
            caption: 'Расположение',
            title: ''
          },
          'i-i-s-fyvvyf-отчет-о-сервере-l': {
            caption: 'Отчет о сервере',
            title: ''
          },
          'i-i-s-fyvvyf-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-fyvvyf-серверная-l': {
            caption: 'Серверная',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-fyvvyf-должность-l': IISFyvvyfДолжностьLForm,
    'i-i-s-fyvvyf-отчет-о-сервере-l': IISFyvvyfОтчетОСервереLForm,
    'i-i-s-fyvvyf-расположение-l': IISFyvvyfРасположениеLForm,
    'i-i-s-fyvvyf-сенсоры-l': IISFyvvyfСенсорыLForm,
    'i-i-s-fyvvyf-серверная-l': IISFyvvyfСервернаяLForm,
    'i-i-s-fyvvyf-сотрудник-l': IISFyvvyfСотрудникLForm,
    'i-i-s-fyvvyf-должность-e': IISFyvvyfДолжностьEForm,
    'i-i-s-fyvvyf-отчет-о-сервере-e': IISFyvvyfОтчетОСервереEForm,
    'i-i-s-fyvvyf-расположение-e': IISFyvvyfРасположениеEForm,
    'i-i-s-fyvvyf-сенсоры-e': IISFyvvyfСенсорыEForm,
    'i-i-s-fyvvyf-серверная-e': IISFyvvyfСервернаяEForm,
    'i-i-s-fyvvyf-сотрудник-e': IISFyvvyfСотрудникEForm
  },

});

export default translations;
