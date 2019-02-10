$('.intro__social__hidden a').each(function() {
  let id = $(this).attr('class');
  let url = window.location.href;
  switch(id) {
    case 'fb':
      $(this).attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'vk':
      $(this).attr('href', 'https://vk.com/share.php?url=' + url);
      break;
    case 'twitter':
      $(this).attr('href', 'https://twitter.com/intent/tweet?url=' + url);
      break;
    case 'ok':
      $(this).attr('href', 'https://odnoklassniki.ru/dk?st.cmd=addShare&st.s=1000&st._surl=' + url);
      break;
  }
});
