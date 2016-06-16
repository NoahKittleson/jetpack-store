import Ember from 'ember';

export default Ember.Component.extend({
  totalPrice: Ember.computed('items.[]', function() {
    var list = this.get('items');
    var total = 0;

    for (var i = 0; i < list.length; i++) {
      total += list[i].get('price') - (list[i].get('price') * (list[i].get('sale')/100));
      console.log(total);
    }
    return total;
  })
});
