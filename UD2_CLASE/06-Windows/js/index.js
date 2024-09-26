// propiedades básicas de windows
window.name = "Ventana Principal";
var texto = "";
//Nombre de la ventana
texto += "<br/>Nombre: " + window.name;
//Tamaño de la ventana con toolbar y scrollbar
texto += "<br/>Ancho externo: " + window.outerWidth;
texto += "<br/>Alto externo: " + window.outerHeight;
//Tamaño de la ventana sin toolbar y scrollbar
texto += "<br/>Ancho interno: " + window.innerWidth;
texto += "<br/>Alto interno: " + window.innerWidth;
//Distancia con la esquina superior izquierda
texto += "<br/>Distancia desde la izquierda: " + window.screenX;
document.getElementById("ventanaPpal").innerHTML = texto;

//MÉTODOS DE WINMDOWS IMPORTANTES
let miVentanaSecundaria;
function crearVentana(){
    miVentanaSecundaria = window.open("","","width=500, height=200");
    miVentanaSecundaria.document.write("<h1>Mi Ventana Secundaria</h1>");    
}

function cerrarVentana(){
    miVentanaSecundaria.close();
}

//redimensionar ventana
function redimensionarVentana(){
    miVentanaSecundaria.resi
}

//focus
function enfocarVentana(){
    miVentanaSecundaria.focus();
}