function formula() {                                                 //Se crea una funcion que contendra las operaciones que seran necesarias para el funcionamiento del boton antes descrito
    var CantidadT=parseInt(document.getElementById('Cant').value)    //Se declara una variable, se convierte a entera, se manda a llamar el valor del id con el document.getElementeById y se evalua su valor, y adopta su valor la variable
    var Cantidad1=parseInt(document.getElementById('C1').value)      //Se declara una variable, se convierte a entera, se manda a llamar el valor del id con el document.getElementeById y se evalua su valor, y adopta su valor la variable
    
    if (CantidadT>Cantidad1) {                                       //Se crea una condicion que si cantidad total es mayor a cantidad 1
       alert("Saldo insuficiente")                                   //Si se cumple la condicion se manda un alert con el mensaje de saldo insuficiente
    } else {
       document.getElementById('C1').value=(Cantidad1-CantidadT);    //Si no se cumple se procede a restar cantidadT a cantidad1, y ahora cantidad1 va a ser igual a ala resta de cantidad1 menos cantidadT
    }
    }

function formula2() {                                                //Se crea una funcion que contendra las operaciones que seran necesarias para el funcionamiento del boton antes descrito
    var CantidadT=parseInt(document.getElementById('Cant').value)    //Se declara una variable, se convierte a entera, se manda a llamar el valor del id con el document.getElementeById y se evalua su valor, y adopta su valor la variable
    var Cantidad2=parseInt(document.getElementById('C2').value)      //Se declara una variable, se convierte a entera, se manda a llamar el valor del id con el document.getElementeById y se evalua su valor, y adopta su valor la variable
    

    if (CantidadT>Cantidad2) {                                       //Se crea una condicion que si cantidad total es mayor a cantidad 2
       alert("Saldo insuficiente")                                   //Si se cumple la condicion se manda un alert con el mensaje de saldo insuficiente
    } else {
       document.getElementById('C2').value=(Cantidad2-CantidadT);    //Si no se cumple se procede a restar cantidadT a cantidad2, y ahora cantidad2 va a ser igual a ala resta de cantidad2 menos cantidadT
    }

   
     }

function formula3() {                                                 //Se crea una funcion que contendra las operaciones que seran necesarias para el funcionamiento del boton antes descrito
       var CantidadT=parseInt(document.getElementById('Cant').value)  //Se declara una variable, se convierte a entera, se manda a llamar el valor del id con el document.getElementeById y se evalua su valor, y adopta su valor la variable
       var Cantidad1=parseInt(document.getElementById('C1').value)    //Se declara una variable, se convierte a entera, se manda a llamar el valor del id con el document.getElementeById y se evalua su valor, y adopta su valor la variable
       var Cantidad2=parseInt(document.getElementById('C2').value)    //Se declara una variable, se convierte a entera, se manda a llamar el valor del id con el document.getElementeById y se evalua su valor, y adopta su valor la variable
       alert("Su saldo en Quetzales es: Q"+Cantidad1);                //Se muestra un alert mostrando el saldo contenido en la variable
       alert("Su saldo en Dolares es: $" +Cantidad2);                 //Se muestra un alert mostrando el saldo contenido en la variable
    }

function formula4() {                                                 //Se crea una funcion que contendra las operaciones que seran necesarias para el funcionamiento del boton antes descrito
      
       var p=prompt("Ingrese el nuevo pin de cuatro digitos");        //Se declara la variable, esta va a ser igual al promp, que es una caja de texto, y la variable tomara el valor del texto ingresado 
       alert("Su nuevo pin es: "+p);                                  //Se muestra un alert que contendra, Su nuevo pin es: y el valor de la variable
       }

function formula5(){                                                  //Se crea una funcion que contendra las operaciones que seran necesarias para el funcionamiento del boton antes descrito

      location="Proyectocajero.html"                                  //Se redirecciona hacia el archivo Proyectocajero.html
     }