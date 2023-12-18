import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.fyvvyf.caption'),
          title: i18n.t('forms.application.sitemap.fyvvyf.title'),
          children: [{
            link: 'i-i-s-fyvvyf-сенсоры-l',
            caption: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-сенсоры-l.caption'),
            title: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-сенсоры-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-fyvvyf-должность-l',
            caption: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-должность-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-fyvvyf-расположение-l',
            caption: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-расположение-l.caption'),
            title: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-расположение-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-fyvvyf-отчет-о-сервере-l',
            caption: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-отчет-о-сервере-l.caption'),
            title: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-отчет-о-сервере-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-fyvvyf-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-сотрудник-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-fyvvyf-серверная-l',
            caption: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-серверная-l.caption'),
            title: i18n.t('forms.application.sitemap.fyvvyf.i-i-s-fyvvyf-серверная-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})