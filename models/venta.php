<?php
   //FALTA EL TOTAL DE VENTA PORQUE PRIMERO SE NECESITA CALCULAR EL DETALLE DE VENTA EN EL CONTROLADOR
   
    include('../connection.php'); 

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }else{
        echo "the database is connected";
    }

    $fecha = date("Y-m-d");
    $idCliente;
 
    $query = "SELECT MAX(idCliente) FROM Cliente;";

    $result = mysqli_query($connection,$query);

    if(!$result){
        die('query error '.mysqli_error($connection));
    }

    if ($row = mysqli_fetch_array($result)) {
        $idCliente = trim($row[0]);
    }

    echo $fecha;
    echo $idCliente;

?>