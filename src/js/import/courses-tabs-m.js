$('.courses__tabs ul').on('click', 'li:not(.is-active)', function() {
  $(this)
    .addClass('is-active').siblings().removeClass('is-active')
    .closest('div.courses__tabs')
    .find('div.courses__tabs__block').fadeOut(200)
    .eq($(this).index()).delay(200).fadeIn(200);
});

$('.courses__tabs__block:last-child').hide();



$('.price__tabs ul').on('click', 'li:not(.is-active)', function() {
  $(this)
    .addClass('is-active').siblings().removeClass('is-active')
    .closest('div.price__tabs').find('div.price__tab').fadeOut(200)
    .eq($(this).index()).delay(200).fadeIn(200);
});


