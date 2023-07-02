
let arregloproductos = [];

console.log("holaaaa detalle_venta")

function agregarEventoAjax(id) {
    console.log("funciona el botón ajax");
    $.ajax({
        type: "GET",
        url: '../../models/producto.php',
        data: {'valor': id},
        success: function(response) {
            console.log(response);
            arregloproductos.push(response);
            console.log(arregloproductos)
            var jsonData = JSON.parse(response);
            
            if (jsonData.valor == id) {
                console.log('todo bien');
                setTimeout(function () {
                    window.location = '../../models/producto.php?valor=' + id;
                }, 3000); // esto redirigirá al mismo archivo.php después de 3 segundos
            }
        }
    });
}



export {arregloproductos , agregarEventoAjax }

