$(document).ready(function() {

    //Adding items to storage
    $(".add-text-btn").on("click", function(){
        let inputValue = $(".user-input").val();
        localStorage.setItem("testStorage", inputValue)
        // alert("value from local storage" + localStorage.getItem("testStorage"))

        $(".display").text(localStorage.getItem("testStorage"))
    });

    $(".user-input").on("keyup", function(){
        let inputValue = $(".user-input").val();
        localStorage.setItem("testStorage", inputValue)

        $(".display").text(localStorage.getItem("testStorage"))
    });

    //Removing items from storage
    $(".del-text-btn").on("click", function(){
        localStorage.removeItem("testStorage")
        alert('item deleted? check the console')
    });



    //iterative approach to adding items to localStorage
    //store data as stringified array of objects
    //store data as individual keys
    //how do we get keys from localStorage? Research Object.keys
})