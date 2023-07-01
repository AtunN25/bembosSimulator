<?php

    include('../connection.php'); 

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
    }else{
        echo "the database is connected";
    }

    $nombreCliente = $_POST['nombreCliente'];
    $documento = $_POST['documento'];

    echo $nombreCliente;
    echo $documento;

    $query = "INSERT INTO cliente(nombre_completo,documento) values ('$nombreCliente','$documento');";

    if (mysqli_query($connection, $query)) {
        echo "New client created successfully";
    } else {
        echo "Error: " . mysqli_error($connection);
    }

?>