$("nav a").click(function (e) {
  e.preventDefault();
  var id = $(this).attr("href");
  var targetOffset = $(id).offset().top;
  var menuHeight = $("nav").innerHeight();

    console.log(id)

    $("html, body").animate(
      {
        scrollTop: targetOffset - menuHeight
      },
      500
    );
});
