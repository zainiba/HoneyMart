
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}


<!-- second pop up -->

// When the user clicks on <div>, open the popup
function myFunction() {
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
}

<!-- popper js-->

// popovers Initialization
$(function () {
$('[data-toggle="popover"]').popover()
})
