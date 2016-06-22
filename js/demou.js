/**
 * Created by Zuhui on 6/6/2016.
 */

$(function(){
    $(".sub-work div:nth-child(2)").hover(function(){
        $(this).children("h2").css("color", "#02b3e4");
        $(this).children("p").children("a").css("color", "#02b3e4");
    }, function(){
        $(this).children("h2").css("color", "");
        $(this).children("p").children("a").css("color", "");
    });
});

window.addEventListener("load", function(){
    var str1 = "\\";
    var pattern =/\\/;
    console.log(pattern.exec(str1))
}, false);















