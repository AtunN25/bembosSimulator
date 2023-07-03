
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

            //console.log(jsonData); 

            if(arregloproductocontado.length === 0 ){
                //si el arreglo esta vacio se agrega un nuevo producto
                jsonData.cantidad = 1;
                arregloproductocontado.push(jsonData);
                jsonData.subtotal = jsonData.precio_unidad;
            }else{
                //si es falso entonces se verifica si se repiten los id de los productos
                var productoExistente = false;
                for(let i=0;i<arregloproductocontado.length;i++){
                    //si se encuentra un id igual se aumenta su atributo cantidad
                    if(arregloproductocontado[i].idproducto === jsonData.idproducto){
                        arregloproductocontado[i].cantidad += 1;
                        arregloproductocontado[i].subtotal += jsonData.precio_unidad;
                        productoExistente = true;
                        break;
                    }
                }
                //sino se encuentra uno igual solo se agrega
                if (productoExistente == false) {
                    jsonData.cantidad = 1;
                    arregloproductocontado.push(jsonData);
                    jsonData.subtotal = jsonData.precio_unidad;
                }
            }

            //console.log(jsonData);

            //arregloproductos.push(jsonData);
            //console.log("arr")
            //console.log(arregloproductos)
            console.log("narr")
            console.log(arregloproductocontado)

            
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

