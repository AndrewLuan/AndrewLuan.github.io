/*
 * 功能：根据可用宽度将导航项移入折叠菜单，依赖打包入口中的 jQuery 与 masthead.html。
 * updateNav 保留站点名称、主题切换和链接顺序，同时写入实际导航高度供响应式样式使用。
 * 在窗口变化、字体加载及导航尺寸变化时重算，不依赖 Screen Orientation API。
 * 所有状态仅保存在 DOM 和内存中；不修改用户数据。
 */
var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if ($vlinks.width() > availableSpace) {

    while ($vlinks.width() > availableSpace && $vlinks.children("*:not(.persist)").length > 0) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);

      availableSpace = $btn.hasClass("hidden") ? $nav.width() : $nav.width() - $btn.width() - 30;

      // Show the dropdown btn
      $btn.removeClass("hidden");
    }

    // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $btn.removeClass('close');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  document.documentElement.style.setProperty('--masthead-height', $('.masthead').outerHeight() + 'px');
  $btn.attr({'aria-label': 'Toggle navigation', 'aria-expanded': !$hlinks.hasClass('hidden')});

}

// Window listeners

$(window).on('resize', function () {
  updateNav();
});
$(window).on('load', updateNav);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateNav);
}
if (window.ResizeObserver) {
  new ResizeObserver(updateNav).observe(document.querySelector('.masthead'));
}

$btn.on('click', function () {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
  $(this).attr('aria-expanded', !$hlinks.hasClass('hidden'));
});

updateNav();