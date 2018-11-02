function Pizza(size, meat, toppings) {
  this.size = size //(sml, med, lg) shold be the values the ui collects
  this.meat = 0 //(should be determined by a funciton)
  this.toppings = 0//(should be determined by a funciton)
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
var total = this.meat + this.toppings + size
this.pizzaCost = total
}
