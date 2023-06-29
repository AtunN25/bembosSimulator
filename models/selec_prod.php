<?php
include '../conexion.php';

$sql="SELECT nombre from producto";

$run_sql=mysqli_query($connection,$sql);

if(mysqli_num_rows($run_sql)>0){
    foreach($run_sql as $fila){
    echo $fila['nombre'].'<br>'; 
    }
}else{
}
?>