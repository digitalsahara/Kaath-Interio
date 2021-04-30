$(document).ready(function() {
    // jQuery code

    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function(e) {
        e.stopPropagation();
    });


});

$('.carousel').carousel({
    pause: "false"
});
var sizeTheOverlays = function() {
    $(".overlay").resize().each(function() {
        var h = $(this).parent().outerHeight();
        var w = $(this).parent().outerWidth();
        $(this).css("height", h);
        $(this).css("width", w);
    });
};

sizeTheOverlays();


var width = $(window).width();
$(window).resize(function() {
    if ($(this).width() != width) {
        width = $(this).width();
        sizeTheOverlays();
    }
});


/** Our Speciality*/



$(document).ready(function() {
    $('.counter-value').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3500,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});



function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    var offset = ($(window).height() - $dialog.height()) / 2;
    // Center modal vertically in window
    $dialog.css("margin-top", offset);
}

$('.modal').on('show.bs.modal', centerModal);
$(window).on("resize", function() {
    $('.modal:visible').each(centerModal);
});



/**Galary */

/**Galary */