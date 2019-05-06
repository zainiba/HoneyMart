
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

// // popovers Initialization
// $(function () {
// $('[data-toggle="popover"]').popover()
// })
//
//
//
// // popovers initialization - on click
// $('[data-toggle="popover-click"]').popover({
//   html: true,
//   trigger: 'click',
//   placement: 'bottom',
//   content: function () { return '<img src="' + $(this).data('img') + '" />'; }
// });
//


// popovers Initialization
$(function () {
$('[data-toggle="popover-click"]').popover({
  html: true,
  trigger: 'trigger',
  placement: 'top',
  content: function () { return '<img src="' + $(this).data('img') + '" />'; }
})
})



// shopping test 2

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
