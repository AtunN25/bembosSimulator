
$('#boton1').click(function() {
    var nombreCliente = $('input[name="nombreCliente"]').val();
    var documento = $('input[name="documento"]').val();
    console.log(nombreCliente + documento)
    $.ajax({
        type: "POST",
        url: '../../models/cliente.php',
        data: {'nombreCliente': nombreCliente, 'documento': documento},
        success: function(data) {
            console.log(data);
            alert('SE REGISTRO A UN NUEVO CLIENTE')
            $('#nombreClienteActual').text(data);
            // Aquí puedes realizar las acciones que desees después de registrar al cliente
        },
        error: function() {
            alert('Error en la solicitud');
        }
    });
});
