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


// user logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var size = $("input[name=size]:checked").val();
    var crust = $("input[name=crust]:checked").val();
    var sauce = $("input[name=sauce]:checked").val();
    var cheeze = $("input[name =cheeze]:checked").val();
    var veg = $("input[name=veg]:checked").val();
    var meat = $("input[name=meat]:checked").val();
    console.log(crust);
  });
});