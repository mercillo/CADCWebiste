function hideDiv(){

    if ($(window).width() < 750) {

            $("#floatdiv").fadeOut("slow");

    }else{

        $("#floatdiv").fadeIn("slow");

    }

}

//run on document load and on window resize
$(document).ready(function () {

    //on load
    hideDiv();

    //on resize
    $(window).resize(function(){
        hideDiv();
    });

});