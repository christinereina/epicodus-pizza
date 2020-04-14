// business logic

function Pizza (size, crust, veg, meat) {
  this.size = size;
  this.crust = crust;
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

  Pizza.prototype.addToppins = function () {
    if (this.meat === "1") {
      this.price += 1.50;
  } else if (this.veg === "vegtop") {
      this.price += 0.50;
  }
  return this.price;
  };

  console.log(this.price);

// user logic

var pizza = new Pizza();

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var size = $("input[name=size]:checked").val();
    var crust = $("input[name=crust]:checked").val();
    var veg = $("input[name=veg]:checked").val();
    var meat = $("input[name=meat]:checked").val();
    var newPizza = new Pizza (size, crust, veg, meat);
    newPizza.calculateOrder();
    $('div#output').text(`Order Total: ${newPizza.price}`)
    console.log(newPizza.price)
  });
});