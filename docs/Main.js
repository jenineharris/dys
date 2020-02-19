//Properly indents and left-justifies TOC lines
$(document).ready(function() {
  $items = $('div#TOC li');
  $items.each(function(idx) {
    num_ul = $(this).parentsUntil('#TOC').length;
    $(this).css({'padding-left': num_ul * 10});
  });
});
