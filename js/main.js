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

// $(document).ready(function () {
//   $("a").bind("click", function (e) {
//     e.preventDefault(); // prevent hard jump, the default behavior

//     var target = $(this).attr("href"); // Set the target as variable

//     // perform animated scrolling by getting top-position of target-element and set it as scroll target
//     $("html, body")
//       .stop()
//       .animate(
//         {
//           scrollTop: $(target).offset().top,
//         },
//         600,
//         function () {
//           location.hash = target; //attach the hash (#jumptarget) to the pageurl
//         }
//       );

//     return false;
//   });
// });

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $(".page-section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation a.active").removeClass("active");
        $(".navigation a").eq(i).addClass("active");
      }
    });
  })
  .scroll();
