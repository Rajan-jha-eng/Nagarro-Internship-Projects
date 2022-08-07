$(document).ready(function(){
    $('#btn').click(function(){
        $('#aboutme').slideToggle('slow');
    });
});
function goTo(id) {
    $('html,body').animate({
        scrollTop: $('#' + id).offset().top - 50}, 'fast');
}