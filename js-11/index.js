// jquery
// document ready naudojamas patikrinimui ar visas dokumentas uzkrautas
$(document).ready(function(){
    
    console.log($("h1").text());

    $(".box").on("click", function(){
        $(this).fadeOut(1000, function(){
            $(this).fadeIn(1000, function(){
                $(this).text("Woohoo!");
            });
        });
    })
    
    // vanilla javascript
    console.log(document.querySelector("h1").innerText);
})


