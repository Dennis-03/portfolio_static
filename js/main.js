var currentCompanyTimer = document.getElementById("currentCompanyTimer");
const date1 = Date.now();
const date2 = new Date('03/03/2021');
const diffTime = Math.abs(date2 - date1);
currentCompanyTimer.innerHTML = `${Math.ceil(diffTime / (1000 * 3600 * 24 * 30))} Months`;

var $grid = $(".grid").isotope({
    // options
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
});

// change is-checked class on buttons
var $buttonGroup = $(".filters");
$buttonGroup.on("click", "li", function(event) {
    $buttonGroup.find(".is-checked").removeClass("is-checked");
    var $button = $(event.currentTarget);
    $button.addClass("is-checked");
    var filterValue = $button.attr("data-filter");
    $grid.isotope({ filter: filterValue });
});

$(window)
    .scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $(".page-section").each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $(".navigation a.active").removeClass("active");
                $(".navigation a").eq(i).addClass("active");
            }
        });
    })
    .scroll();