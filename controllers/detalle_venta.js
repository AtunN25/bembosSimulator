
let arregloproductos = [];
let arregloproductocontado = [];

console.log("holaaaa detalle_venta")

function agregarEventoAjax(id) {
    console.log("funciona el botón ajax");
    $.ajax({
        type: "GET",
        url: '../../models/producto.php',
        data: {'valor': id},
        success: function(response) {
            //console.log(response);

            var jsonData = JSON.parse(response);

            console.log(jsonData); 

            jsonData.cantidad = 1;

            
            console.log(jsonData);

            arregloproductos.push(jsonData);

            console.log(arregloproductos)
           

            
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

