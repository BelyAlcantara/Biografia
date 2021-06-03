function validar(){

    var vnombre = document.getElementById("nombre").value
    var vcorreo = document.getElementById("correo").value
    var vtelefono = document.getElementById("telefono").value
    var vcomentario = document.getElementById("comentario").value
    var expresion_correo = /\w+@\w+\.+[a-z]/;
    var expresion_nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    var expresion_comentario = /[A-Z]/;

     if(vnombre=="" || vcorreo=="" || vtelefono=="" || vcomentario=="") {
         alert ("El campo no debe estar vacio");
         return false;
     }
     else if(!expresion_correo.test(vcorreo)){
         alert("El campo del correo tiene que tener el siguiente apartado: correo@dominio.com");
         return false;
     }
     else if(vnombre.length > 50){
         alert("El nombre es muy largo");
         return false;
     }
     else if(!expresion_nombre.test(vnombre)){
        alert("El campo del nombre solo debe contener letras");
        return false;
    }
     else if(vtelefono.length > 10){
         alert("El número es muy largo");
         return false;
     }
     else if(isNaN(vtelefono)){
         alert("Solo se aceptan números");
         return false;
     }
     else if(!expresion_comentario.test(vcomentario)){
         alert("El campo del comentario debe ir en MAYÚSCULAS")
         return false;
     }

}
