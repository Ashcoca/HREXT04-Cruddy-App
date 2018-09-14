$(document).ready(function() {
  var animationEnd = (function(el) {
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'mozAnimationEnd',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    for (var t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  })(document.createElement('div'));

  $('h1').addClass('animated fadeInDown');
  $('h1').one(animationEnd, function(){
    for (var i = 0; i < localStorage.length -1; i++){
      var key = localStorage.key(i)
      var animated = $('#sortable').append('<li class="sortable-item"> ' + key + '<i class="js-remove">✖</i></ul>');
    }
    return animated.addClass('animated fadeIn');
  });




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
      for (var i = 0; i < localStorage.length -1; i++){
        // if (key == evt.item.textContent.slice(0, -1)) {
          localStorage.removeItem(evt.item.textContent.substr(1).slice(0, -1));
      }
			evt.item.parentNode.removeChild(evt.item);

		}

  });

});
