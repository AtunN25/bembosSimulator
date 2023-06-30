<?php
    include('../connection.php'); 
    
    $query = "SELECT p.nombre , p.precio_unidad, c.nombre_categoria FROM Producto p INNER JOIN categoria_producto c
    ON p.categoria_producto_id = c.idcategoria_producto where p.idproducto = 10;";

    $result = mysqli_query($connection,$query);

    if(!$result){
        die('query error '.mysqli_error($connection));
    }

    $json = array();

    while($row = mysqli_fetch_array($result)) {
        $json[] = array(
            'nombre' => $row['nombre'],
            'precio_unidad' => $row['precio_unidad'],
            'idcategoria_producto' => $row['idcategoria_producto'],
        );
    }
    
    $jsonstring = json_encode($json);

    echo $jsonstring;


    
?>