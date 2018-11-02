// Business logic for pizza
function Pizza(firstName, lastName, address, phoneNumber, size, toppings) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.address = address,
  this.phoneNumber = phoneNumber,
  this.size = size,
  this.toppings = toppings //(should be determined by a funciton)
}



Pizza.prototype.costBuilder = function() {
  var size;
  if (this.size === "sml") {
    size = 10;
  } else if (this.size === "med") {
    size = 13;
  } else if (this.size === "lg") {
    size = 14
  }
  var toppingCost = this.toppings
  var total = toppingCost + size
  this.pizzaCost = total
  return this.pizzaCost.toFixed(2);
}



 /////////////////
//              //
//   UI logic   //
//              //
/////////////////


function addToppings() {
  var input = document.getElementsByName("toppings")
  var total = 0
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value)
    }
  }
  return total
}
function resetOrder () {
  $("#first-name").val("")
  $("#last-name").val("");
  $("#address").val("");
  $("#phone-number").val("");
  $("#pizza-size").val("");
  $('input[type=checkbox]').prop('checked',false);
}

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("#first-name").val();
    var inputtedLastName = $("#last-name").val();
    var inputtedAddress = $("#address").val();
    var inputtedPhoneNumber = $("#phone-number").val();
    var inputtedSize = $("#pizza-size").val();
    var calculatedToppings = addToppings();
    var newOrder = new Pizza(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedPhoneNumber, inputtedSize, calculatedToppings);
    $(".total").text(newOrder.costBuilder());
    resetOrder();
  })
})
