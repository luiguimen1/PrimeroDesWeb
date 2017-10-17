/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var datos = new Array();
function valida(Persona) {
    for (var i = 0; i < datos.length; i++) {
        var persona = datos[i];
        if (persona.CC === Persona.CC) {
            return true;
        }
    }
    return false;
}

function agregar() {
    var CC = parseInt(document.getElementById("CC").value);
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var genero = document.getElementById("genero").value;

    var Persona = {
        CC: CC,
        nombre: nombre,
        edad: edad,
        genero: genero};
    if (valida(Persona)) {
        alert("Ya esta en la BD");
    } else {
        datos[datos.length] = Persona;
        document.getElementById("CC").value = "";        
        document.getElementById("nombre").value = "";        
        document.getElementById("edad").value = "";        
        document.getElementById("genero").value = "";
        alert("El usuario fue agregado");
    }
}
/**
 * Metodo que retorna todo el listado del arreglo
 * @returns {String}  
 */
function todos() {
    var cadena = "El listado de todos los elementos<br>";
    for (var i = 0; i < datos.length; i++) {
        var persona = datos[i];
        cadena += persona.CC + " " + persona.nombre + "<br>";
    }
    document.getElementById("Listado").innerHTML = cadena;
}

function filtroG(pVG) {
    var cadena = "El listado de todos los elementos<br>";
    for (var i = 0; i < datos.length; i++) {
        var persona = datos[i];
        if (persona.genero == pVG) {
            cadena += persona.CC + " " + persona.nombre + "<br>";
        }
    }
    document.getElementById("Listado").innerHTML = cadena;
}
function filtroMa() {
    var cadena = "El listado de todos los elementos<br>";
    for (var i = 0; i < datos.length; i++) {
        var persona = datos[i];
        if (persona.edad < 18) {
            cadena += persona.CC + " " + persona.nombre + "<br>";
        }
    }
    document.getElementById("Listado").innerHTML = cadena;
}
function filtroM2() {
    var cadena = "El listado de todos los elementos<br>";
    for (var i = 0; i < datos.length; i++) {
        var persona = datos[i];
        if (persona.edad > 18) {
            cadena += persona.CC + " " + persona.nombre + "<br>";
        }
    }
    document.getElementById("Listado").innerHTML = cadena;
}


