'use strict';

// ハンバーガーメニュー
$(function() {
    $('#open, .close').on('click', function() {
      $('#contents, #main-link').toggleClass('show');
    });
});

// スクロール速度
$(function() {
  $('a[href^="#"]').on('click', function() {
    var speed = 300;
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    $('body, html').animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});