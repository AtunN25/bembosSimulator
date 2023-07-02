<?php

    include('../connection.php'); 

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $nombreCliente = $_POST['nombreCliente'];
    $documento = $_POST['documento'];


    $query = "INSERT INTO cliente(nombre_completo,documento) values ('$nombreCliente','$documento');";

    if (mysqli_query($connection, $query)) {
        echo $nombreCliente;
    } else {
        echo "Error: " . mysqli_error($connection);
    }

?>