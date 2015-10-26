
  var myDataForm = new Firebase('https://formulariosipc.firebaseio.com/');
  $('#Boton').click(function(){
      var name = $('#full-name').val();
      var email = $('#email').val();
      var mayor = $('#opciones_1').val();
      var pass = $('#password').val();
      myDataForm.push({name: name, email: email, mayorEdad: mayor, password: pass});
    });
