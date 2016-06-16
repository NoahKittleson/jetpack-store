import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(addedItem) {
    var found = false;
    this.get('items').forEach(function(instance) {
      if (instance.get('item') === addedItem) {
        instance.set('amount', instance.get('amount')+1);
        found = true;
        return;
      }
    })
    if(!found) {
      var newItem: {
        item: addedItem,
        amount: 1
      }
      this.get('items').pushObject(newItem);
    }
  },
});
