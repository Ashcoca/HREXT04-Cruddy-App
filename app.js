$(document).ready(function() {

  //opening animations
  $('h1').addClass('animated fadeInDown');
  // $('ol').hide().delay(700).fadeIn(500);
  $('#qb').hide().delay(600).fadeIn(500);
  $('.qb-input-title').hide().delay(600).fadeIn(500);
  $('.add-qb').hide().delay(600).fadeIn(500);
  $('#sortableqb').hide().delay(600).fadeIn(500);

  $('#rb').hide().delay(750).fadeIn(750);
  $('.rb-input-title').hide().delay(750).fadeIn(750);
  $('.add-rb').hide().delay(750).fadeIn(750);
  $('#sortablerb').hide().delay(750).fadeIn(750);

  $('#wr').hide().delay(1000).fadeIn(1000);
  $('.wr-input-title').hide().delay(1000).fadeIn(1000);
  $('.add-wr').hide().delay(1000).fadeIn(1000);
  $('#sortablewr').hide().delay(1000).fadeIn(1000);

  //loop to generate each sortable list
  for (var i = 0; i < localStorage.length -1; i++){
    var key = localStorage.key(i);
    var position = localStorage.getItem(key);
    if (position == "QB") {
      $('#sortableqb').append('<li class="sortable-item"> ' + key + '<i class="js-remove">✖</i></ul>');
    }
    if (position == "RB") {
      $('#sortablerb').append('<li class="sortable-item"> ' + key + '<i class="js-remove">✖</i></ul>');
    }
    if (position == "WR") {
      $('#sortablewr').append('<li class="sortable-item"> ' + key + '<i class="js-remove">✖</i></ul>');
    }
  }

    //button commands
    $(".add-qb").on("click", function(){
      // store values
      let inputKey = $(".qb-input-title").val();
      //store in local storage
      localStorage.setItem(inputKey, "QB");
      //adds new item to start of list
      $('#sortableqb').prepend('<li class="sortable-item" data-storage-key="'+inputKey+'"> ' + inputKey + '<i class="js-remove">✖</i></ul>');
    });

    $(".add-rb").on("click", function(){
      let inputKey = $(".rb-input-title").val();
      localStorage.setItem(inputKey, "RB");
      $('#sortablerb').prepend('<li class="sortable-item" data-storage-key="'+inputKey+'"> ' + inputKey + '<i class="js-remove">✖</i></ul>');
    });

    $(".add-wr").on("click", function(){
      let inputKey = $(".wr-input-title").val();
      localStorage.setItem(inputKey, "WR");
      $('#sortablewr').prepend('<li class="sortable-item" data-storage-key="'+inputKey+'"> ' + inputKey + '<i class="js-remove">✖</i></ul>');
    });
    //to clear boxes after being clicked
    $('button').on("click", function(){
      $('input').val('Player Name')
    });

// List settings
  //To store list and changes in local storage
  var sortableList = Sortable.create(sortableqb, {
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
      for (var i = 0; i < localStorage.length -1; i++){
        localStorage.removeItem(evt.item.textContent.substr(1).slice(0, -1));
      }
			evt.item.parentNode.removeChild(evt.item);
		}
  });

  var sortableList = Sortable.create(sortablerb, {
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
      for (var i = 0; i < localStorage.length -1; i++){
        localStorage.removeItem(evt.item.textContent.substr(1).slice(0, -1));
      }
      evt.item.parentNode.removeChild(evt.item);
    }
  });

  var sortableList = Sortable.create(sortablewr, {
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
      for (var i = 0; i < localStorage.length -1; i++){
        localStorage.removeItem(evt.item.textContent.substr(1).slice(0, -1));
      }
      evt.item.parentNode.removeChild(evt.item);
    }
  });


});
