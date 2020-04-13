// business logic

function Pizza (size, crust, sauce, cheeze, veg, meat) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheeze = cheeze;
  this.veg = veg;
  this.meat = meat;
  this.price = 0;
}

Pizza.prototype.calculateOrder = function () {
  if (this.size === "sm") {
    this.price = 10;
} else {
    this.price= 16;
};
  if (this.crust === "glutenFree") {
    this.price += 1.50;
  } else if (this.crust === "cauliflower") {
    this.price += 2;
  }
  return this.price;
  };


// user logics

var pizza = new Pizza();

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var size = $("input[name=size]:checked").val();
    var crust = $("input[name=crust]:checked").val();
    var sauce = $("input[name=sauce]:checked").val();
    var cheeze = $("input[name =cheeze]:checked").val();
    var veg = $("input[name=veg]:checked").val();
    var meat = $("input[name=meat]:checked").val();
    var newPizza = new Pizza (size, crust, sauce,cheeze, veg, meat);
    newPizza.calculateOrder();
    $('div#output').text(`Order Total: ${newPizza.price}`)
    console.log(newPizza.price)

  });
});