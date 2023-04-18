var modal = document.getElementById("formulario-modal");
var formulario = document.querySelector("form");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  var nombre = document.getElementById("nombre").value;
  var nickname = document.getElementById("nickname").value;
  var id_amigo = document.getElementById("id-amigo").value;
  var id_discord = document.getElementById("id-discord").value;
  var nivel = document.getElementById("nivel").value;
  var roles = document.querySelectorAll('input[name="rol"]:checked');
  var rolesArray = [];
  for (var i = 0; i < roles.length; i++) {
    rolesArray.push(roles[i].value);
  }
  var mensaje = "Nombre: " + nombre + "\n" +
                "Nickname: " + nickname + "\n" +
                "ID de amigo: " + id_amigo + "\n" +
                "ID de Discord: " + id_discord + "\n" +
                "Nivel: " + nivel + "\n" +
                "Roles: " + rolesArray.join(", ") + "\n";
  var confirmacion = confirm("Los datos son correctos? " + mensaje);
  if (confirmacion === true) {
    alert("Sus datos fueron confirmados. Disfrute de la experiencia de jugar con gente nueva.");
  } else {
    alert("Corrija los datos y vuelva a enviar su informacion.");
  }
});

    function agregarComentario(evt) {
      evt.preventDefault();
    
      var nom = document.getElementById("nom");
      var comentario = document.getElementById("comentario");
      var tabla = document.getElementById("tabla-comentarios");
    
      if (nom && comentario && tabla) {
        var nomValue = nom.value;
        var comentarioValue = comentario.value;
    
        var comentarioHtml = "<tr><td>" + nomValue + "</td><td>" + comentarioValue + "</td></tr>";
    
        tabla.getElementsByTagName('tbody')[0].innerHTML += comentarioHtml;
        alert("Gracias por tu comentario :-)");
        nom.value = "";
        comentario.value = "";
      }
    }
    
    document.getElementById("formulario-comentarios").addEventListener("submit", agregarComentario);
    