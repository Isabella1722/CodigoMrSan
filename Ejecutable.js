
let pantalla;
let inicio, acompa, acompaNumero, adiciones, alerta1, alerta2, cerrarSesion, confirmarDir, efectivo, pago, factura,
    historialPedido, menu, menuP, papitas, registro, sCriollo, sVegetariano, sQubano, sItaliano, tarjeta;

function preload() {
    inicio = loadImage("data/inicio.jpg");
    acompa = loadImage("data/Acompa.jpg");
    acompaNumero = loadImage("data/AcompaNumero.jpg");
    adiciones = loadImage("data/Adiciones.jpg");
    alerta1 = loadImage("data/Alerta1.jpg");
    alerta2 = loadImage("data/Alerta2.jpg");
    cerrarSesion = loadImage("data/CerrarSesion.jpg");
    confirmarDir = loadImage("data/ConfirmarDir.jpg");
    efectivo = loadImage("data/Efectivo.jpg");
    pago = loadImage("data/Pago.jpg");
    factura = loadImage("data/Factura.jpg");
    historialPedido = loadImage("data/HistorialPedido.jpg");
    menu = loadImage("data/Menu.jpg");
    menuP = loadImage("data/menuPerfil.jpg");
    papitas = loadImage("data/Papitas.jpg");
    registro = loadImage("data/Registro.jpg");
    sCriollo = loadImage("data/SCriollo.jpg");
    sVegetariano = loadImage("data/SVegetariano.jpg");
    sQubano = loadImage("data/SQubano.jpg");
    sItaliano = loadImage("data/SItaliano.jpg");
    tarjeta = loadImage("data/Tarjeta.jpg");

}

function setup() {
    createCanvas(375, 812);
    pantalla = 0;


}
function draw() {
    background(0);
    cursor(ARROW);
    switch (pantalla) {


        case 0:
            //PANTALLA INICIO
            image(inicio, 0, 0);
            if (mouseX >= 90 && mouseX <= 282 && mouseY >= 543 && mouseY <= 589) {
                cursor(HAND);
            }
            if (mouseX >= 124 && mouseX <= 246 && mouseY >= 623 && mouseY <= 646) {
                cursor(HAND);
            }

            break;


        case 1:

            //PANTALLA MENU
            image(menu, 0, 0);
            if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66) {
                cursor(HAND);
            }
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 336 && mouseY <= 417) {
                cursor(HAND);
            }
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 456 && mouseY <= 536) {
                cursor(HAND);
            }
            if (mouseX >= 34 && mouseX <= 343 && mouseY >= 570 && mouseY <= 652) {
                cursor(HAND);
            }
            if (mouseX >= 35 && mouseX <= 345 && mouseY >= 689 && mouseY <= 765 ) {
                cursor(HAND);
            }
            break;


        case 2:

            //PANTALLA REGISTRO
            image(registro, 0, 0);
            if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 2) {
                cursor(HAND);
            }
            if (mouseX >= 159 && mouseX <= 214 && mouseY >= 551 && mouseY <= 608) {
             cursor(HAND);
            }
           // if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 ) {
           //     cursor(HAND);
           // }

          
            break;

        case 3:

            //PANTALLA MENU PERFIL
            image(menuP, 0, 0);
            if (mouseX >= 0 && mouseX <= 266 && mouseY >= 96 && mouseY <= 162 ) {
                cursor(HAND);
            }
            if (mouseX >= 2 && mouseX <= 257 && mouseY >=196 && mouseY <= 261 ) {
                cursor(HAND);
            }

            break;

        case 4:

            //PANTALLA SANDWICH CRIOLLO
            image(sCriollo, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);
            }
            break;


        case 5:

            //PANTALLA SANDWICH CUBANO
            image(sQubano, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59) {
                cursor(HAND);
            }
            break;

        case 6:

             //PANTALLA SANDWICH CUBANO
             image(sItaliano, 0, 0);
             if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 ) {
                cursor(HAND);
            }
            break;

        case 7:

            //PANTALLA SANDWICH VEGETARIANO
            image(sVegetariano, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 ) {
                cursor(HAND);
            }
            break;
        case 8:

            //PANTALLA FACTURA
            break;
        case 9:

            //PANTALLA CERRAR SESION
            image(cerrarSesion, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 ) {
                cursor(HAND);
            }

            if (mouseX >= 161 && mouseX <= 224 && mouseY >= 533 && mouseY <= 589 ) {
                cursor(HAND);
            }
            break;

        case 10:

            //PANTALLA HISTORIAL PEDIDO
            image(historialPedido, 0, 0);
            if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 ) {
                cursor(HAND);
            }

         
            break;


    }

}

function mousePressed() {
    print( " X" +mouseX + " Y"+ mouseY );
    print( "P "+pantalla);
    //BOTÓN SANDWICH ITALIANO
    if (mouseX >= 34 && mouseX <= 343 && mouseY >= 570 && mouseY <= 652 && pantalla == 1) {
        pantalla = 6;
    }
    //BOTÓN ENTRAR
    if (mouseX >= 90 && mouseX <= 282 && mouseY >= 543 && mouseY <= 589 && pantalla == 0) {
        pantalla = 1;
    }
    //BOTÓN MENÚ PERFIL
    if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 1) {
        pantalla = 3;
    }
    if (mouseX >= 265 && pantalla == 3) {
        pantalla = 1;
    }
    // BOTÓN ENTRAR REGISTRO
    if (mouseX >= 124 && mouseX <= 246 && mouseY >= 623 && mouseY <= 646 && pantalla == 0) {
        pantalla = 2;
    }
    // BOTÓN REGISTRO VOLVER 
    if (mouseX >= 0 && mouseX <= 67 && mouseY >= 1 && mouseY <= 66 && pantalla == 2) {
        pantalla = 0;
    }
     
    // BOTÓN REGISTRO
    if (mouseX >= 159 && mouseX <= 214 && mouseY >= 551 && mouseY <= 608 && pantalla ==2 ) {
       pantalla = 1;
    }
    //BOTÓN SANDWICH CRIOLLO
    if (mouseX >= 34 && mouseX <= 343 && mouseY >= 336 && mouseY <= 417 && pantalla == 1) {
        pantalla = 4;
    }
    //BOTÓN SANDWICH CUBANO
    if (mouseX >= 34 && mouseX <= 343 && mouseY >= 456 && mouseY <= 536 && pantalla == 1) {
        pantalla = 5;
    }
    
     //BOTÓN SANDWICH VEGETARIANO
     if (mouseX >= 35 && mouseX <= 345 && mouseY >= 689 && mouseY <= 765 && pantalla == 1) {
        pantalla = 7;
    }

     //BOTÓN DEVOLVER SANDWICH CUBANO
     if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 5) {
        pantalla = 1;
    }
    //BOTÓN DEVOLVER SANDWICH ITALIANO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 6) {
        pantalla = 1;
    }
     //BOTÓN DEVOLVER SANDWICH CRIOLLO
     if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 4) {
        pantalla = 1;
    }
    //BOTÓN DEVOLVER SANDWICH VEGETARIANO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 7) {
        pantalla = 1;
    }
    //BOTÓN DEVOLVER HISTORIAL DE PEDIDO
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 10) {
        pantalla = 1;
    }
    //BOTÓN IR AL HISTORIAL DE PEDIDO
    if (mouseX >= 0 && mouseX <= 266 && mouseY >= 96 && mouseY <= 162 && pantalla == 3) {
        pantalla = 10;
    }
  //BOTÓN IR A CERRAR SESION
    if (mouseX >= 2 && mouseX <= 257 && mouseY >=196 && mouseY <= 261 && pantalla == 3 ) {
        pantalla = 9;
    }
//BOTÓN DEVOLVER CERRAR SESION
    if (mouseX >= 21 && mouseX <= 69 && mouseY >= 23 && mouseY <= 59 && pantalla == 9) {
        pantalla = 1;
    }

    //BOTÓN CERRAR DEFINITIVAMENTE SESION
    if (mouseX >= 161 && mouseX <= 224 && mouseY >= 533 && mouseY <= 589 && pantalla == 9) {
        pantalla = 0;
    }


}

// alt shift f  para acomodar las lineas de código
