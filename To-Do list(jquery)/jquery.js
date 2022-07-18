$(document).ready(function () {
    $('#input').change(function () {
        var input = $(this).val();
        $('ol').append('<li>' + input + '<i class="fas fa-check fa-trash "> </li>');
        $(this).val('');
    });
    $('ol').on('click', '.fa-trash', function () {
        $(this).parent('li').fadeOut(200);
    });
});