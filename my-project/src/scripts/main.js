$(document).ready(() => {
    console.log("doc ready");
});

$(".flyout_menu_links").hide();

$('.logo').on('click', () => {
    location.reload();
});

$('.flyout_menu').on('click', function(){
    $(".flyout_menu_links").slideToggle();
});