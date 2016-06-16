import Ember from 'ember';

export default Ember.Component.extend({

  actualPrice: Ember.computed('item.price', 'item.sale', function() {
    return (this.get('item.price') - this.get('item.price') * (this.get('item.sale') / 100.00)).toFixed(2);
  })
});
