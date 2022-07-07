$("a").on("click", function(event){
    event.preventDefault();

    if($(this).attr("href") == "#home"){
        // uzdedam klase hide elementams kuriuos slepiam
        $("#services").addClass("hide");
        $("#about").addClass("hide");

        // logika kuri parodo elementa
        $("#home").removeClass();
        $("#home").addClass("show");
        $("#home").css("left", $(window).width());
        $("#home").animate({ "left": "0px" });
    }

    if($(this).attr("href") == "#services"){
        // uzdedam klase hide elementams kuriuos slepiam
        $("#home").addClass("hide");
        $("#about").addClass("hide");

        // logika kuri parodo elementa
        $("#services").removeClass();
        $("#services").addClass("show");
        $("#services").css("left", $(window).width());
        $("#services").animate({ "left": "0px" });
    }

    if($(this).attr("href") == "#about"){
        // uzdedam klase hide elementams kuriuos slepiam
        $("#home").addClass("hide");
        $("#services").addClass("hide");

        // logika kuri parodo elementa
        $("#about").removeClass();
        $("#about").addClass("show");
        $("#about").css("left", $(window).width());
        $("#about").animate({ "left": "0px" });
    }
})