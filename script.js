

var button = $(".middle");
var pop = $("#card1");
var science = $("#card2");
var lit = $("#card3");
var poli = $("#card4");
var his = $("#card5");
var catagories= [
  "Pop Culture", "Science", "Literature", "Politics", "History" ];
var random= catagories[Math.floor(Math.random()*catagories.length)];

button.on("click", function(){

var random= catagories[Math.floor(Math.random()*catagories.length)];
console.log (random);
})
