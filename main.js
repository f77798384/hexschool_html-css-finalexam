$(document).ready(function () {
    $('.drop').click(function (e) { 
        e.preventDefault();
        $('.drop').toggleClass('active');
        $('.dropopen').slideToggle();
    });
});