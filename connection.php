<?php
   
    $connection = mysqli_connect(
        'localhost',
        'root',
        '123123',
        'bembos',
    );

 /*
    $query =   "SELECT * FROM categoria_producto;";

    $result = mysqli_query($connection,$query);

    if(!$result){
      die('query error '.mysqli_error($connection));
    }
    
    
    $json = array();
    while($row = mysqli_fetch_array($result)) {
      $json[] = array(
        'idcategoria_producto' => $row['idcategoria_producto'],
        'nombre_categoria' => $row['nombre_categoria'],

      );
    }
    $jsonstring = json_encode($json);
    
    echo $jsonstring;


    */
    
?>