function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
        alert("Error: La dirección de correo " + email + " es incorrecta.");
}

function validador() {
  nombre = document.getElementById("full-name").value;
  opcion1 = document.getElementById("opciones_1").checked;
  opcion2 = document.getElementById("opciones_2").checked;
  email = document.getElementById("email").value;
  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  password = document.getElementById("password").value;
  password2 = document.getElementById("password2").value;
  condiciones = document.getElementById("conditions").checked;


  // condicion que debe cumplir el primer campo del formulario
  if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
    alert('[ERROR] El campo Nombre Completo debe rellenarse');
    return false;
  }
  // condicion que debe cumplir los radio button
  else if( opcion1 == false && opcion2 == false ) {
    alert('[ERROR] Seleccione una porcion de edad');
    return false;
  }
  // condicion que debe cumplir el segundo campo del formulario
  else if ( email == null || email.length == 0 || !expr.test(email)  ) {
    alert('[ERROR] El campo Email debe rellenarse');
    return false;
  }
  // condicion que debe cumplir el último campo del formulario
  else if ( password == null || password.length == 0 || password2 == null || password2.length == 0 || password != password2 ) {
    if (password != password2) {
      alert('[ERROR] El campo Password es diferente');
      return false;
    } else {
      alert('[ERROR] El campo Password esta vacio');
      return false;
    }
  }
  // condicion que debe cumplir los radio button
  else if(condiciones == false) {
    alert('[ERROR] Acepte las condiciones');
    return false;
  }


  // Si el script ha llegado a este punto, todas las condiciones
  // se han cumplido, por lo que se devuelve el valor true
  alert('Registrado!');
  return true;
}
