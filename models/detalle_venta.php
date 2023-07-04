<?php
 
    include('../connection.php');
    
    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

     /* SOLCITAMOS Y OBTENEMOS EL ID DE LA ULTIMA VENTA */
    
     $query = "SELECT COALESCE(MAX(idVenta),0) FROM Venta;";

     $result = mysqli_query($connection,$query);
 
     if(!$result){
         die('query error '.mysqli_error($connection));
     }
 
     if ($row = mysqli_fetch_array($result)) {
         $idVenta = trim($row[0]);
     }
    /******************************** */

    $arregloproductos = json_decode($_POST['arregloproductos'], true); // Convertir cadena JSON a arreglo

    //$primerObjeto = $arregloproductos[0];

    $idproducto = $arregloproductos['idproducto'];
    $cantidad = $arregloproductos['cantidad'];
    $subtotal = $arregloproductos['subtotal'];

    /********************************* */
    $queryproducts = "INSERT INTO detalle_venta (venta_id, producto_id, cantidad, subtotal) VALUES($idVenta,$idproducto,$cantidad,$subtotal);"; 

    $resultproducts = mysqli_query($connection, $queryproducts);

    if ($resultproducts) {
        echo "Inserción exitosa.";
    } else {
        echo "Error al insertar datos: " . mysqli_error($connection);
    }
    
?>