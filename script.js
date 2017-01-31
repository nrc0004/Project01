

var button = $(".middle");
var pop = $("#card1");
var science = $("#card2");
var lit = $("#card3");
var poli = $("#card4");
var his = $("#card5");
var centerpiece = $(".centerpiece");
var question = $(".questions");
var answers = $(".answers");
var catagories= [
  "Pop Culture", "Science", "Literature", "Politics", "History" ];
var random= catagories[Math.floor(Math.random()*catagories.length)];


var question = button.on("click", function(){

  var random= catagories[Math.floor(Math.random()*catagories.length)];
  console.log (random);

  if (random === catagories[0]) {
    $(".middle").css("background-image", "url(http://i.imgur.com/3uDxPBl.jpg)");
    $(".middle").css("background-size", "cover");

      var questions= "How many kids?";
      var choices = ["1", "2", "3", "4"];

        question.html("<h2>"+ questions+ "</h2>")

        for ( i= 0; i < choices.length; i++) {
        question.append ("<li>" + choices[i] + "</li>");
        }

  $("li").on("click", function (){
      if ($(this).text() === choices[1]) {
        $("#card1").css("opacity", "1");
      } else {
        alert ("Sorry that is incorrect");
      }
  })
  } else if (random === catagories[1]) {
    $(".middle").css("background-image", "url(http://i.imgur.com/r1nBBTD.jpg)");
    $(".middle").css("background-size", "cover");

      var questions= "How many planets";
      var choices = ["4", "9", "10", "8"];

        question.html("<h2>"+ questions+ "</h2>")
          for ( i= 0; i < choices.length; i++) {
            question.append ("<li>" + choices[i] + "</li>");
          }
          $("li").on("click", function (){
              if ($(this).text() === choices[1]) {
                $("#card2").css("opacity", "1");
              } else {
                alert ("Sorry that is incorrect");
              }
          });
  } else if (random === catagories[2]) {
    $(".middle").css("background-image", "url(http://i.imgur.com/XdcsOZL.png)");
    $(".middle").css("background-size", "cover");

      var questions= "How many books in Lord of the Rings?";
      var choices = ["4", "9", "10", "8"];

        question.html("<h2>"+ questions+ "</h2>")
          for ( i= 0; i < choices.length; i++) {
            question.append ("<li>" + choices[i] + "</li>");
          }
          $("li").on("click", function (){
              if ($(this).text() === choices[0]) {
                $("#card3").css("opacity", "1");
              } else {
                alert ("Sorry that is incorrect");
              }
          });
  } else if (random === catagories[3]) {
    $(".middle").css("background-image", "url(http://i.imgur.com/bplprtj.jpg)");
    $(".middle").css("background-size", "cover");

      var questions= "How many terms can a pres sit in office?";
      var choices = ["2", "4", "6", "8"];

        question.html("<h2>"+ questions+ "</h2>")
          for ( i= 0; i < choices.length; i++) {
            question.append ("<li>" + choices[i] + "</li>");
          }
          $("li").on("click", function (){
              if ($(this).text() === choices[0]) {
                $("#card4").css("opacity", "1");
              } else {
                alert ("Sorry that is incorrect");
              }
          });
  } else if (random === catagories[4]) {
    $(".middle").css("background-image", "url(http://i.imgur.com/CUTzwBy.jpg)");
    $(".middle").css("background-size", "cover");

      var questions= "How many boats were in columbus' fleet?";
      var choices = ["3", "4", "6", "8"];

        question.html("<h2>"+ questions+ "</h2>")
          for ( i= 0; i < choices.length; i++) {
            question.append ("<li>" + choices[i] + "</li>");
          }
          $("li").on("click", function (){
              if ($(this).text() === choices[0]) {
                $("#card5").css("opacity", "1");
              } else {
                alert ("Sorry that is incorrect");
              }
            });
    };
});

//
