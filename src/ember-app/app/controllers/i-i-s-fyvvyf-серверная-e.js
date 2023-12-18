import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-fyvvyf-серверная-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-fyvvyf-контроллер+сенсоры':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'тип',
            required: true,
            relationName: 'сенсоры',
            projection: 'СенсорыL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
