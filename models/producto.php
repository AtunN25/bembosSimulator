<?php
     
    if (isset($_GET['valor'])) {

        $valor = $_GET['valor'];

        include('../connection.php'); 

        $query = "SELECT p.idproducto, p.nombre , p.precio_unidad, c.nombre_categoria FROM Producto p INNER JOIN categoria_producto c
        ON p.categoria_producto_id = c.idcategoria_producto where p.idproducto = $valor;";

        $result = mysqli_query($connection,$query);

        if(!$result){
            die('query error '.mysqli_error($connection));
        }
        
        $row = mysqli_fetch_array($result);
    
        $jsonproducto = json_encode(array(
            'idproducto' => (int)$row['idproducto'],
            'nombre' => $row['nombre'],
            'precio_unidad' => (float)$row['precio_unidad'],
            'nombre_categoria' => $row['nombre_categoria']
        ));
        
        echo $jsonproducto;
        exit();
        } else {
            echo json_encode(array('error' => 'No se recibió ningún valor'));
        }


?>