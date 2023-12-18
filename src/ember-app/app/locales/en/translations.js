import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Fyvvyf',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fyvvyf',
          title: 'Fyvvyf'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        курсовая: {
          caption: 'Курсовая',
          title: 'Курсовая',
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-fyvvyf-должность-l': {
              caption: 'Должность',
              title: ''
            },
            'i-i-s-fyvvyf-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          'информация-о-сервере': {
            caption: 'ИнформацияОСервере',
            title: 'ИнформацияОСервере',
            'i-i-s-fyvvyf-расположение-l': {
              caption: 'Расположение',
              title: ''
            },
            'i-i-s-fyvvyf-серверная-l': {
              caption: 'Серверная',
              title: ''
            },
            'i-i-s-fyvvyf-отчет-о-сервере-l': {
              caption: 'Отчет о сервере',
              title: ''
            }
          },
          другое: {
            caption: 'Другое',
            title: 'Другое',
            'i-i-s-fyvvyf-сенсоры-l': {
              caption: 'Сенсоры',
              title: ''
            }
          }
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
