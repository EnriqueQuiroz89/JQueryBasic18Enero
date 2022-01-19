// Hace que el H! se esconda
$("h1").show();
$("#muestra").hide();


//Estructura basica $ dolar y selector
$(document).ready(function () {
    // Cambia el colo de fondo de los elementos Indicados
    // Especificidad parecida a CSS
    $("p").css({ "background-color": "skyblue" });
    $("#tercero").css({ "background-color": "silver" });
    $(".cuarto").css({ "background-color": "yellow" });

    $("#show-h1").click(function () {
        $("h1").show();
    });

    $("#hide-h1").click(function () {
        $("h1").hide();
    });

    /**Oculta el Parrafo 3 al hacer doble click un boton y lo muestra al doble click en el otro */
    $("#oculta").dblclick(function () {
        $("#cuarto").hide();
        $("#muestra").show();
        $("#oculta").hide();
    });

    $("#muestra").dblclick(function () {
        $("#cuarto").show();
        $("#oculta").show();
        $("#muestra").hide();
    });

    /**Cambia de color el parrafo 3 cuando pasamos el Mouse */

    $("#tercero").mouseenter(function () {
        $("#tercero").css({ "background-color": "brown" });
    });

    $("#tercero").mouseleave(function () {
        $("#tercero").css({ "background-color": "silver" });
    });

    /**Oculta con suavidad el parrafo 2 */
    $("#segundo").mouseenter(function () {
        $("#segundo").fadeOut();
    });

    $("#segundo").mouseleave(function () {
        $("#segundo").fadeIn();
    });

    /**Oculta con suavidad el parrafo 2 */
    $("#primero").mouseenter(function () {
        $("#primero").slideUp();
    });

    $("#primero").mouseleave(function () {
        $("#primero").slideDown();
    });

    


});

