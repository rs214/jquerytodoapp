//Check off specific todos while clicking

$("li").on("click", function() {
  $(this).toggleClass("completed");
});

//Click on X to delete todo

$("span").on("click", function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
})