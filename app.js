$(document).ready(function() {


    $(".add-player").on("click", function(){

      // store values
      let inputKey = $(".user-input-title").val();

      //store in local storage
      localStorage.setItem(inputKey, inputKey);

      // clear values
      $(".user-input-title").val("");

      //loop through local storage and add new ul item
      for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i)
        $('#sortable').append('<li class="sortable-item" data-storage-key="'+inputKey+'"> ' + key + '<i class="js-remove">✖</i></ul>');
      }

      // data-
      // let itemHtml = '<div class="display-item" data-storage-key="'+inputKey+'"> ' + inputKey + ' ' +  localStorage.getItem(inputKey) + '</div>';
      // $(".display").html(itemHtml);
      //console.log(localStorage);
      // how can we delegate this event to the outer html node?
      // https://learn.jquery.com/events/event-delegation/

      });




     // TODO add back in later
     // $(".user-input").on("keyup", function(){
     //   let inputValue = $(".user-input").val();
     //   localStorage.setItem("testStorage", inputValue);
     //   $(".display").text(localStorage.getItem("testStorage"));
     // });

     $(".del-text-btn").on("click", function() {
       alert('item deleted? check the console'); // maybe change to a window.confirm
       localStorage.removeItem( $('.user-input-title').val() ); // grab the title and plop here
       $(".user-input-title").val("");
       $(".user-input-body").val("");
       // clearing display? what if I have multiple items?
       // after item is removed from local storage, redisplay items from local storage
       // refresh from storage?
     });

    // how do we get keys? research Object.keys

// Simple list
  var sortableList = Sortable.create(sortable, {
  sort: true,
  animation: 150,
		filter: '.js-remove',
		onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
		}
  });

});
