// *When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
// *Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
// *Remove the last paragraph in the article.
// *Set the font size of the title to be a random pixel size from 0 to 100.
// *Add an item to the list; it can say whatever you want.
// *Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
// *When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
// *Add an event listener so that when you click on the image, it is removed from the DOM.

$(function () {
  console.log("Let's get ready to party with jQuery!");
});

$("article img").addClass("image-center");

$("article p").last().remove();

$("h1").css("font-size", function () {
  return Math.floor(Math.random() * 100);
});

$("ol").append("<li> New item added to list!</li>");

$("aside").children().remove();
$("aside").append("<p>No more lists! This is better!</p>");

$(".form-control").on("keyup", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
});

$("img").click(function () {
  $(this).remove();
});
