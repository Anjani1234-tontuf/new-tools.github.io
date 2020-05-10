groceryListApp.factory('items', function() {
  var itemsService = {};
  var items = [
    {item:'Potatoes', amount:'10lbs', done:true},
    {item:'Meat', amount:'', done:false},
    {item:'Bacon', amount:'', done:true},
    {item:'More Meat', amount:'', done:true}
  ];

  itemsService.list = function() {
    return items;
  };
  itemsService.addItem = function(item) {
    items.push(item);
  };
  itemsService.removeItem = function(item) {
    items.splice(items.indexOf(item), 1);
  };
  itemsService.removeDone = function() {
    var newItems = [];
    angular.forEach(items, function(item) {
      if (!item.done) {
        newItems.push(item);
      }
    });
    items = newItems;
  };

  return itemsService;
});