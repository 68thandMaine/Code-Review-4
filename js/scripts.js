// Business logic for pizza
function Pizza(size, toppings) {
  this.size = size
  this.toppings = 0 //(should be determined by a funciton)
}



Pizza.prototype.costBuilder = function() {
  var size;
  if (this.size === "sml") {
    size = 10;
  } else if (this.size === "md") {
    size = 13;
  } else if (this.size === "lg") {
    size = 14
  }
  var toppingCost = this.toppings
  var total = toppingCost + size
  this.pizzaCost = total
  return this.pizzaCost.toFixed(2);
}



//////////////////
//              //
//   UI logic  //
//             //
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

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#pizza-size").val();
    var calculatedToppings = addToppings();
    var newOrder = new Pizza(inputtedSize, calculatedToppings);
    $(".total").text(newOrder.costBuilder());
console.log(calculatedToppings);

  })
})
