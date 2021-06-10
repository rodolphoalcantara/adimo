$(document).ready(function () {
  $(".btn-credito").click(function (e) {
    e.preventDefault();
    var thisBtn = $(this);
    thisBtn.addClass("spinner").blur();

    setTimeout(function(){
        thisBtn.removeClass('spinner');
        thisBtn.removeClass('btn-secondary');
        thisBtn.addClass('btn-success');
        thisBtn.html('Crédito Aprovado');
        thisBtn.prop('disabled',true);
    }, 3500)

  });
});
