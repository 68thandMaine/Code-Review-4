///////////////////////////////
// Business logic for pizza //
/////////////////////////////
function Pizza( size, toppings) {
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


//////////////////////////////////
// Business logic for customer //
/////////////////////////////////

function Customer (firstName, lastName, address, phoneNumber){
this.firstName = firstName,
this.lastName = lastName,
this.address = address,
this.phoneNumber = phoneNumber
}

Customer.prototype.fullName = function () {
  return this.firstName + " " + this.lastName
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
  $("#first-name").val("")
  $("#last-name").val("")
  $("#street").val("")
  $("#city").val("")
  $("#state").val("")
  $("#zip-code").val("")
  $("#phone-number").val("");
  $("#pizza-size").val("");
  $('input[type=checkbox]').prop('checked',false);
}

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("#first-name").val();
    var inputtedLastName = $("#last-name").val();
    var inputtedAddress = (($("#street").val())+ " " +($("#city").val())+ " " +($("#state").val()) + " " + ($("#zip-code").val()))
    console.log(inputtedAddress);
    var inputtedPhoneNumber = $("#phone-number").val();
    var inputtedSize = $("#pizza-size").val();
    var calculatedToppings = addToppings();
    var newCustomer = new Customer(inputtedFirstName, inputtedLastName, inputtedAddress, inputtedPhoneNumber)
    var newOrder = new Pizza( inputtedSize, calculatedToppings);
    $("#total").text(newOrder.costBuilder());
    $("#customer-name").text(newCustomer.fullName());
    $("#customer-address").text(newCustomer.address)
    $("#customer-phone-number").text(newCustomer.phoneNumber)
    resetOrder();
  })
})
