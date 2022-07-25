$(document).ready(function(){
    $('#btn1').click(function(){
        $('#textcontainer').css({"background-color":"black"});
        $('textarea').css({"background-color":"black","color":"white","border-color":"white"});
    });
    $('#btn2').click(function(){
        $('#textcontainer').css({"background-color":"#0fd10f"});
        $('textarea').css({"background-color":"#0fd10f","color":"black","border-color":"black"});
    });
    $('#btn3').click(function(){
        $('#textcontainer').css({"background-color":"yellow"});
        $('textarea').css({"background-color":"yellow","color":"black","border-color":"black"});
    });
    $('#btn4').click(function(){
        $('#textcontainer').css({"background-color":"rgb(53, 53, 247)"});
        $('textarea').css({"background-color":"rgb(53, 53, 247)","color":"white","border-color":"white"});
    });
});