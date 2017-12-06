//Check off specific todos while clicking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete todo

$("span").on("click", "X", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
})

$("input[type='text']").keypress(function(e) {
   if (e.which === 13) {
    var toDoText = $(this).val();
    $(this).val("");
    $("ul").append(`<li><span>X </span>${toDoText}</li>`);
   }
});