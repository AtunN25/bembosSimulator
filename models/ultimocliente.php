<?php
    
    include('../connection.php'); 

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $nombreCliente;

    $query = "SELECT idCliente, nombre_completo FROM Cliente WHERE idCliente = (SELECT MAX(idCliente) FROM Cliente);";

    $result = mysqli_query($connection,$query);

    if(!$result){
        die('query error '.mysqli_error($connection));
    }

    if ($row = mysqli_fetch_array($result)) {
        $idCliente = trim($row['idCliente']);
        $nombreCliente = trim($row['nombre_completo']);
    }

    echo $nombreCliente;

?>