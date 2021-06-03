<?php

include 'conexion.php';
$nombre=$_POST["nombre"];
$correo=$_POST["correo"];
$telefono=$_POST["telefono"];
$comentario=$_POST["comentario"];

$insertar="INSERT INTO campos(Nombre, Correo, Telefono, Comentario) VALUES ('$nombre','$correo','$telefono','$comentario')";

$resultado = mysqli_query($conexion,$insertar);

if(!$resultado){
    echo 'Error al Registrar sus datos';
}
else{
    echo 'Datos registrados exitosamente';
}

mysqli_close($conexion);

?>