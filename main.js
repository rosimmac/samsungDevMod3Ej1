"use strict";
exports.__esModule = true;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var persona_1 = require("./persona");
var telefono_1 = require("./telefono");
var direcciones1 = [new direccion_1.Direccion("calle ejemplo1", 1, 1, "A", 40004, "Motril", "Granada"),
    new direccion_1.Direccion("calle ejemplo2", 2, 2, "B", 40005, "Adra", "Almería")];
var mails1 = [new mail_1.Mail('gmail', 'antonio@gmail.com'), new mail_1.Mail('hotmail', 'antonio@hotmail.com')];
var telefonos1 = [new telefono_1.Telefono("fijo", 950454545), new telefono_1.Telefono("móvil", 610616161)];
var notas1 = ['primeraNota', 'segundaNota'];
var persona1 = new persona_1.Persona("Antonio", "Villegas Castillo", 18, '55555555A', new Date(), 'rojo', 'hombre', direcciones1, mails1, telefonos1, notas1);
var direcciones2 = [new direccion_1.Direccion("calle ejemplo3", 3, 3, "C", 40004, "Motril", "Granada"),
    new direccion_1.Direccion("calle ejemplo4", 4, 4, "D", 40005, "Adra", "Almería")];
var mails2 = [new mail_1.Mail('gmail', 'pablo@gmail.com'), new mail_1.Mail('hotmail', 'pablo@hotmail.com')];
var telefonos2 = [new telefono_1.Telefono("fijo", 950555555), new telefono_1.Telefono("móvil", 610626262)];
var notas2 = ['primeraNota2', 'segundaNota2'];
var persona2 = new persona_1.Persona("Pablo", "Villegas Castillo", 18, '56666666A', new Date(), 'rojo', 'hombre', direcciones2, mails2, telefonos2, notas2);
var direcciones3 = [new direccion_1.Direccion("calle ejemplo5", 5, 5, "E", 40004, "Motril", "Granada"),
    new direccion_1.Direccion("calle ejemplo6", 6, 6, "F", 40005, "Adra", "Almería")];
var mails3 = [new mail_1.Mail('gmail', 'rosa@gmail.com'), new mail_1.Mail('hotmail', 'rosa@hotmail.com')];
var telefonos3 = [new telefono_1.Telefono("fijo", 950656565), new telefono_1.Telefono("móvil", 610636363)];
var notas3 = ['primeraNota3', 'segundaNota3'];
var persona3 = new persona_1.Persona("Rosi", "Villegas Castillo", 18, '55555555A', new Date(), 'rojo', 'hombre', direcciones3, mails3, telefonos3, notas3);
var personas = [persona1, persona2, persona3];
console.log("****************************PERSONAS ANTES DE MODIFICAR****************************");
for (var i = 0; i < personas.length; i++) {
    console.log('Persona ' + i + ':');
    console.log('\tNombre: ' + personas[i].getNombre());
    console.log('\tApellidos: ' + personas[i].getApellidos());
    console.log('\tEdad: ' + personas[i].getEdad());
    console.log('\tDNI: ' + personas[i].getDni());
    console.log('\tCumpleaños: ' + personas[i].getCumpleaños());
    console.log('\tColor Favorito: ' + personas[i].getColorFavorito());
    console.log('\tSexo: ' + personas[i].getSexo());
    console.log('\tDirecciones: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getDirecciones().length; j++) {
        console.log('\tDireccion ' + j + ':');
        console.log('\t\tCalle: ' + (personas[i].getDirecciones()[j]).getCalle());
        console.log('\t\tNumero: ' + personas[i].getDirecciones()[j].getNumero());
        console.log('\t\tPiso: ' + personas[i].getDirecciones()[j].getPiso());
        console.log('\t\tLetra: ' + personas[i].getDirecciones()[j].getLetra());
        console.log('\t\tCódigo Postal: ' + personas[i].getDirecciones()[j].getCodigoPostal());
        console.log('\t\tPoblación: ' + personas[i].getDirecciones()[j].getPoblacion());
        console.log('\t\tProvincia: ' + personas[i].getDirecciones()[j].getProvincia());
        console.log('\n');
    }
    console.log('\tTelefonos: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getTelefonos().length; j++) {
        console.log('\tTelefono ' + j + ':');
        console.log('\t\tTipo: ' + personas[i].getTelefonos()[j].getTipo());
        console.log('\t\tNumero: ' + personas[i].getTelefonos()[j].getNumero());
        console.log('\n');
    }
    console.log('\tMail: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getMails().length; j++) {
        console.log('\tMail ' + j + ':');
        console.log('\t\tTipo: ' + personas[i].getMails()[j].getTipo());
        console.log('\t\tDireccion: ' + personas[i].getMails()[j].getDireccion());
        console.log('\n');
    }
    console.log('\tNotas: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getNotas().length; j++) {
        console.log('\tNota ' + j + ': ' + personas[i].getNotas()[j]);
        console.log('\n');
    }
    if (i !== (personas.length - 1)) {
        console.log("--------------------------------------------------------------------------");
    }
}
//Si no hubieran sido requeridos usar los métodos de las clases para pintar los datos se habría elegido
//esta solución
// console.log('Persona1', persona1);
// console.log('Persona2', persona2);
// console.log('Persona3', persona3);
var dniEncontrar = '56666666A';
var nuevaDireccion = new direccion_1.Direccion("calle ejemplo8", 8, 8, "G", 40004, "Motril", "Granada");
var nuevoMail = new mail_1.Mail("yahoo.es", "nueaDir@yahoo.es");
var nuevoTelefono = new telefono_1.Telefono("fijo", 950484848);
console.log("****************************BUSQUEDA****************************");
console.log("Se buscará a la personas con dni:" + dniEncontrar);
console.log("Se le añadirá a dicha persona la siguiente direccion:");
console.log(nuevaDireccion);
console.log("Se le añadirá a dicha persona el siguiente mail:");
console.log(nuevoMail);
console.log("Se le añadirá a dicha persona el siguiente telefono:");
console.log(nuevoTelefono);
for (var i = 0; i < personas.length; i++) {
    if (personas[i].getDni() === dniEncontrar) {
        personas[i].añadirDireccion(nuevaDireccion);
        personas[i].añadirMail(nuevoMail);
        personas[i].añadirTelefono(nuevoTelefono);
    }
}
console.log("****************************PERSONAS TRAS MODIFICAR****************************");
for (var i = 0; i < personas.length; i++) {
    console.log('Persona ' + i + ':');
    console.log('\tNombre: ' + personas[i].getNombre());
    console.log('\tApellidos: ' + personas[i].getApellidos());
    console.log('\tEdad: ' + personas[i].getEdad());
    console.log('\tDNI: ' + personas[i].getDni());
    console.log('\tCumpleaños: ' + personas[i].getCumpleaños());
    console.log('\tColor Favorito: ' + personas[i].getColorFavorito());
    console.log('\tSexo: ' + personas[i].getSexo());
    console.log('\tDirecciones: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getDirecciones().length; j++) {
        console.log('\tDireccion ' + j + ':');
        console.log('\t\tCalle: ' + (personas[i].getDirecciones()[j]).getCalle());
        console.log('\t\tNumero: ' + personas[i].getDirecciones()[j].getNumero());
        console.log('\t\tPiso: ' + personas[i].getDirecciones()[j].getPiso());
        console.log('\t\tLetra: ' + personas[i].getDirecciones()[j].getLetra());
        console.log('\t\tCódigo Postal: ' + personas[i].getDirecciones()[j].getCodigoPostal());
        console.log('\t\tPoblación: ' + personas[i].getDirecciones()[j].getPoblacion());
        console.log('\t\tProvincia: ' + personas[i].getDirecciones()[j].getProvincia());
        console.log('\n');
    }
    console.log('\tTelefonos: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getTelefonos().length; j++) {
        console.log('\tTelefono ' + j + ':');
        console.log('\t\tTipo: ' + personas[i].getTelefonos()[j].getTipo());
        console.log('\t\tNumero: ' + personas[i].getTelefonos()[j].getNumero());
        console.log('\n');
    }
    console.log('\tMail: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getMails().length; j++) {
        console.log('\tMail ' + j + ':');
        console.log('\t\tTipo: ' + personas[i].getMails()[j].getTipo());
        console.log('\t\tDireccion: ' + personas[i].getMails()[j].getDireccion());
        console.log('\n');
    }
    console.log('\tNotas: ');
    console.log('--------------------------');
    for (var j = 0; j < personas[i].getNotas().length; j++) {
        console.log('\tNota ' + j + ': ' + personas[i].getNotas()[j]);
        console.log('\n');
    }
    if (i !== (personas.length - 1)) {
        console.log("--------------------------------------------------------------------------");
    }
}
//Si no hubieran sido requeridos usar los métodos de las clases para pintar los datos se habría elegido
//esta solución
// console.log('Persona1', persona1);
// console.log('Persona2', persona2);
// console.log('Persona3', persona3);
