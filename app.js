$(document).ready(function() {
  for (var i = 0; i < localStorage.length -1; i++){
    var key = localStorage.key(i)
    $('#sortable').append('<li class="sortable-item"> ' + key + '<i class="js-remove">✖</i></ul>');
  }

    $(".add-player").on("click", function(){

      // store values
      let inputKey = $(".user-input-title").val();

      //store in local storage
      localStorage.setItem(inputKey, inputKey);

      $('#sortable').append('<li class="sortable-item" data-storage-key="'+inputKey+'"> ' + inputKey + '<i class="js-remove">✖</i></ul>');

    })


// List settings
  var sortableList = Sortable.create(sortable, {
  sort: true,
  group: "localStorage",
	store: {
		get: function (sortable) {
			var order = localStorage.getItem(sortable.options.group.name);
			return order ? order.split('|') : [];
		},
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
		}
	},
  animation: 150,
		filter: '.js-remove',
		onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
      localStorage.removeItem(this.key);
		}

  });

});
