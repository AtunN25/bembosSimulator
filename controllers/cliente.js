
var clienteenviado = false;

$('#boton1').click(function() {
    //.trim() elimina los espacios pipipi
    var nombreCliente = $('input[name="nombreCliente"]').val().trim();
    var documento = $('input[name="documento"]').val().trim();

    // Verificar si los campos están vacíos 
    if (nombreCliente === '' || documento === '') {
        alert('Por favor, complete todos los campos');
        return; // Detener la ejecución de la función y evitar la llamada AJAX
    }

    $.ajax({
        type: "POST",
        url: '../../models/cliente.php',
        data: {'nombreCliente': nombreCliente, 'documento': documento},
        success: function(data) {
            //console.log(data);
            alert('SE REGISTRO A UN NUEVO CLIENTE')
            clienteenviado = true;
            $('#nombreClienteActual').text(data);
            // Aquí puedes realizar las acciones que desees después de registrar al cliente
        },
        error: function() {
            alert('Error en la solicitud');
        }
    });

    //console.log(data);

});

export{clienteenviado};
