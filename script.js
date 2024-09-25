
$("#btn4").click(function() {
  swal({
    title: "Atenção!",
    text: "Clique no botão para ser redirecionado!",
    icon: "warning",
    buttons: true,
  }).then(function(result) {
    if (result) {
      window.location.href="https://www.big-loser.site";
    } else {
      alert("Você não será redirecionado pois clicou em \"Cancelar\"");
    }
  });
});


function message() {
  alert('Serviço indisponível: Error 404.');
}
