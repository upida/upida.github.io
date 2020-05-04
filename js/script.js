window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $('#road').animate({ top: '0' }, 500);
    $this = $('#to_my_road');
    $this.css('text-align', 'left');
    $this.css('margin', '5px 30px');
    document.getElementById('to_my_road').innerHTML = '<a href="/">UPIDA</a>';
  }
};
