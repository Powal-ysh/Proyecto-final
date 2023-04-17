function agregarComentario(evt) {
  evt.preventDefault();
  
  var nom = document.getElementById("nombre").value;
 
  
  var comentario = document.getElementById("comentario").value;

  var comentarioHtml = "<tr><td>" + nom + "</td><td>" + comentario + "</td></tr>";

  document.getElementById("tabla-comentarios").getElementsByTagName('tbody')[0].innerHTML += comentarioHtml;
  alert("Gracias por tu comentario :-)");
  document.getElementById("nombre").value = "";
  document.getElementById("comentario").value = "";
  
}
document.getElementById("formulario-comentarios").addEventListener("submit", agregarComentario);


let url2 = 'https://api.opendota.com/api/heroStats'
  fetch(url2)
    .then(response => response.json())
    .then(data2 => mostrarData2(data2))
    .catch(error => console.log(error));

  const mostrarData2 = (data2) => {
    console.log(data2)
    let body = ""
    for(let i = 0;i < 20 ; i++){
      body+=`<tr><td>${data2[i].localized_name}</td><td>${data2[i].pro_pick}</td><td>${data2[i].pro_win}</td></tr>`
      document.getElementById('data2').innerHTML = body
      }
    }



    document.getElementById("agregar-jugador").addEventListener("click", function(){
      document.getElementById("formulario-modal").style.display = "block";
    });
    
    document.querySelector("form").addEventListener("submit", function(event){
          
      var nombre = document.getElementById("nombre").value;
      var nickname = document.getElementById("nickname").value;
      var id_amigo = document.getElementById("id-amigo").value;
      var nivel = document.getElementById("nivel").value;
      var roles = document.querySelectorAll('input[name="rol"]:checked');
      var rolesArray = [];
    
      for (var i = 0; i < roles.length; i++) {
        rolesArray.push(roles[i].value);
      }
    
      var mensaje = "Nombre: " + nombre + "\n" +
                    "Nickname: " + nickname + "\n" +
                    "ID de amigo: " + id_amigo + "\n" +
                    "Nivel: " + nivel + "\n" +
                    "Roles: " + rolesArray.join(", ") + "\n";
    
      var confirmacion = confirm(mensaje);
    
      if (confirmacion === true) {
        alert("Gracias, ahora espera unos minutos y te llegaran las invitaciones. Disfruta de la experiencia y de la comunidad");
        var doc = new jsPDF();
        doc.text(mensaje, 10, 10);
        doc.save("formulario.pdf");
      } else {
        alert("Disfruta de la experiencia del juego, que no quieras jugar con personas nuevas no te quita esta hermosa experiencia");
      }
    });