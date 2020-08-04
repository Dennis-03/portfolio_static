var $grid = $(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

// change is-checked class on buttons
var $buttonGroup = $(".filters");
$buttonGroup.on("click", "li", function (event) {
  $buttonGroup.find(".is-checked").removeClass("is-checked");
  var $button = $(event.currentTarget);
  $button.addClass("is-checked");
  var filterValue = $button.attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
