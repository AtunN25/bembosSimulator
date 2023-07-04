<?php
   
    include('../connection.php'); 

    if (!$connection) {
        die("Connection failed: " . mysqli_connect_error());
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

    //hacemos uso de los datos obtenidos
        //INSERTAMOS UNA NUEVA VENTA

        
    if(isset($_POST['total'])){
        $total = $_POST['total'];

        //echo $total;
    
        $queryinto =
         "INSERT INTO Venta (fecha, total, cliente_id, comprobante_id, metodo_pago_id, empleado_id)
            VALUES
          ('$fecha', $total, $idCliente, 1, 2, 1);
          ";
    
        $resultinto = mysqli_query($connection,$queryinto);
    
        if(!$resultinto){
            die('query error '.mysqli_error($connection));
        }

        echo $total;
    }else{
        echo "no llego ningun total";
    }
   

?>