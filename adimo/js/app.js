$("nav a").click(function navigate(e) {
  e.preventDefault();
  var id = $(this).attr("href");
  if (id != "login.html") {
    var targetOffset = $(id).offset().top;
    var menuHeight = $("nav").innerHeight();

    console.log(id);

    $("html, body").animate(
      {
        scrollTop: targetOffset - menuHeight,
      },
      500
    );
  }else{
    window.location.href = 'login.html';
  }
});


$("#btnMais").click(function () {
  $(".painel").addClass("painel-aberto").removeClass("painel");
  $("#btnMais").addClass("hidden").removeClass("opened");
  $("#btnMenos").addClass("opened").removeClass("hidden");
});

$("#btnMenos").click(function () {
  $(".painel-aberto").addClass("painel").removeClass("painel-aberto");
  $("#btnMenos").addClass("hidden").removeClass("opened");
  $("#btnMais").addClass("opened").removeClass("hidden");
});

$("#agendar").click(function () {
  var checado = $('#catalogo').find("input[name='checkboxImg']:checked").length > 0;
  if (!checado) {
    alert("Você deve selecionar pelo menos um imóvel!");
  } else {
    alert("Obrigado por agendar uma visita");
  }
});
