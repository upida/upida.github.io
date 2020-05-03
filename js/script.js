window.onscroll = function () {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $('#road').animate({ top: '0' }, 800);
    document.getElementById('to_my_road').innerHTML = '<a href="/">UPIDA</a>';
  }
};
