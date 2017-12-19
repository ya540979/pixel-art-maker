// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  $('#input_width').next().click(function(e) {
    e.preventDefault();
    $('table').empty();
    var h = $('#input_height').val();
    var w = $('#input_width').val();
    for (var i = 0; i < h; i++) {
      $('table').append('<tr></tr>');
    }
    for (var n = 0; n < w; n++) {
      $('tr').append('<td></td>');
    }
  });
  $('table').click(function (event){
    var pickColor = document.getElementById('colorPicker').value;
    $(event.target).not('table').not('tr').css('background-color',pickColor);
  });
}
$(document).ready(function() {
  makeGrid();
});
