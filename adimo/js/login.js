$("#btnEntrar").click(function (e) {
  e.preventDefault();

  var username = $("#username").val();
  var password = $("#password").val();

  if (username == "adm" && password == "adimo") {
    window.location.href = "aprovacao.html";
  } else if (username == "" || password == "") {
    alert("Preencha os campos corretamente !");
  } else {
    alert("Não encontramos nenhum cadastro com essas credenciais.");
  }
});

