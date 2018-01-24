// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

var gridRowss = $('#input_height').val();
var gridColss = $('#input_width').val();
var table = $('#pixel-canvas');
table.children().remove();

for (i = 0; i < gridRowss; i++) {
    table.append('<tr></tr>');
}

for (j = 0; j < gridColss; j++) {
   $('tr').each(function(){
       $('this').append("<td></td>")
});
   }
}

$('#sizePicker').on("submit", function(event) {
        event.preventDefault();
        makeGrid();
        });
