$(document).ready(function() {

    //parallaxe
    $("header").parallax("center", 0.5, 2, true);

    //compétences
    var $articleComp = $(".bagage article");
    var $etudesLink = $("a[href='#etudes']");

    $articleComp.hide();
    $("#etudes").show();
    $etudesLink.addClass("active");

    $(".bagage_choice a").click(function(e) {
        e.preventDefault();
        //cache inactif
        $(this).siblings().removeClass("active");
        $articleComp.hide();
        //ajoute actif
        $(this).addClass("active");
        var toShow = $(this).attr("href");
        $(toShow).show();
    });

    //réalisations
    var $articleRealisations = $("#realisations_section article");

    $articleRealisations.hide();
    $("#audiovisuel").show();
    $("a[href='#audiovisuel']").addClass("active");

    $(".realisations_choice a").click(function(e) {
        e.preventDefault();
        $(this).siblings().removeClass("active");
        $articleRealisations.hide();
        $(this).addClass("active");
        var toShow = $(this).attr("href");
        $(toShow).show();
    });

    //mentions
    $("a[href='#mentions']").click(function(e) {
        e.preventDefault();
        $("#mentions").toggleClass("active");
    });

    //menu
    var menu = $(".website_menu");
    var hauteurMenu = menu.offset().top;

    $(window).scroll(function() {
        //si menu au dessus de ligne de flottaison
        if(hauteurMenu > $(window).scrollTop()) {
            $("body").removeClass("stickyMenu");
        } else {
            $("body").addClass("stickyMenu");
        }
    });

    //clic menu = scroll vers item
    $('.website_menu a[href^="#"]').click(function () {
        var ancre = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(ancre).offset().top
        }, 'slow');
        return false;
    });


    //initialisation zoombox
    $('a.zoombox').zoombox();

});
