/**
 * Crear un nuevo cliente
 */
 const postClient = () => {
  // Obtener valor de los campos del formulario
  // let id = $("#client_id").val();
  // let name = $("#client_name").val();
  // let email = $("#client_email").val();
  // let age = $("#client_age").val();

  const client = {
    "name": $("#client_name").val(),
    "age": $("#client_age").val(),
    "email": $("#client_email").val(),
    "password": $("#client_password").val()
  }

  const clientJson = JSON.stringify(client);

  console.log("client",client);
  console.log("clientJson",clientJson);

  // Realizar peticion post
  $.ajax({
    url: 'http://129.153.28.255/api/Client/save',
    crossDomain: true,
    type: 'POST',
    dataType: 'json', // Tipo de dato que se espera
    data: clientJson,
    contentType: 'application/json', // Tipo de dato que se envia
    success: function(json) {
      console.log(json);
    },
    error: function(xhr, status) {
      alert('ha sucedido un problema');
    }
  })
}