jQuery(document).ready(listo);


function listo() {

    jQuery(".hamb").click(function (e) {
        e.preventDefault(); //con esto anulo el comportamiento defoult de un item, en este caso, co numeral que vuelva arriba
        jQuery(".menu").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times"); //con esto transforma el elemento hamb en la X

    });

    jQuery(".menu a").click(function () {
        jQuery(".menu").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times");

    
    })


}