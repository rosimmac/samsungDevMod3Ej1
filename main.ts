import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Persona } from "./persona";
import { Telefono } from "./telefono";


var direcciones1: Direccion[] = [new Direccion("calle ejemplo1", 1, 1, "A", 40004, "Motril", "Granada"),
                                 new Direccion("calle ejemplo2", 2, 2, "B", 40005, "Adra", "Almería")];
var mails1: Mail[] = [new Mail('gmail', 'antonio@gmail.com'), new Mail('hotmail', 'antonio@hotmail.com')];
var telefonos1: Telefono[] = [new Telefono("fijo", 950454545), new Telefono("móvil", 610616161)];
var notas1: string[] = ['primeraNota', 'segundaNota'];
var persona1: Persona = new Persona("Antonio", "Villegas Castillo", 18, '55555555A', new Date(), 'rojo', 'hombre', direcciones1, mails1, telefonos1, notas1);

var direcciones2: Direccion[] = [new Direccion("calle ejemplo3", 3, 3, "C", 40004, "Motril", "Granada"),
                                 new Direccion("calle ejemplo4", 4, 4, "D", 40005, "Adra", "Almería")];
var mails2: Mail[] = [new Mail('gmail', 'pablo@gmail.com'), new Mail('hotmail', 'pablo@hotmail.com')];
var telefonos2: Telefono[] = [new Telefono("fijo", 950555555), new Telefono("móvil", 610626262)];
var notas2: string[] = ['primeraNota2', 'segundaNota2'];
var persona2: Persona = new Persona("Pablo", "Villegas Castillo", 18, '56666666A', new Date(), 'rojo', 'hombre', direcciones2, mails2, telefonos2, notas2);

var direcciones3: Direccion[] = [new Direccion("calle ejemplo5", 5, 5, "E", 40004, "Motril", "Granada"),
                                 new Direccion("calle ejemplo6", 6, 6, "F", 40005, "Adra", "Almería")];
var mails3: Mail[] = [new Mail('gmail', 'rosa@gmail.com'), new Mail('hotmail', 'rosa@hotmail.com')];
var telefonos3: Telefono[] = [new Telefono("fijo", 950656565), new Telefono("móvil", 610636363)];
var notas3: string[] = ['primeraNota3', 'segundaNota3'];
var persona3: Persona = new Persona("Rosi", "Villegas Castillo", 18, '55555555A', new Date(), 'rojo', 'hombre', direcciones3, mails3, telefonos3, notas3);

var personas: Persona[] = [persona1, persona2, persona3];

console.log("****************************PERSONAS ANTES DE MODIFICAR****************************")

for (let i = 0; i < personas.length; i++) {
   
   console.log('Persona '+i+':');
   console.log('\tNombre: '+personas[i].getNombre());
   console.log('\tApellidos: '+personas[i].getApellidos());
   console.log('\tEdad: '+personas[i].getEdad());
   console.log('\tDNI: '+personas[i].getDni());
   console.log('\tCumpleaños: '+personas[i].getCumpleaños());
   console.log('\tColor Favorito: '+personas[i].getColorFavorito());
   console.log('\tSexo: '+personas[i].getSexo());
   console.log('\tDirecciones: ');
   console.log('--------------------------');
   
   for (let j = 0; j < personas[i].getDirecciones().length; j++) {
      console.log('\tDireccion '+j+':');
      console.log('\t\tCalle: '+personas[i].getDirecciones()[j].getCalle());
      console.log('\t\tNumero: '+personas[i].getDirecciones()[j].getNumero());
      console.log('\t\tPiso: '+personas[i].getDirecciones()[j].getPiso());
      console.log('\t\tLetra: '+personas[i].getDirecciones()[j].getLetra());
      console.log('\t\tCódigo Postal: '+personas[i].getDirecciones()[j].getCodigoPostal());
      console.log('\t\tPoblación: '+personas[i].getDirecciones()[j].getPoblacion());
      console.log('\t\tProvincia: '+personas[i].getDirecciones()[j].getProvincia());
      console.log('\n');
      
   }

   console.log('\tTelefonos: ');
   console.log('--------------------------');
   for (let j = 0; j < personas[i].getTelefonos().length; j++) {
      console.log('\tTelefono '+j+':');
      console.log('\t\tTipo: '+personas[i].getTelefonos()[j].getTipo());
      console.log('\t\tNumero: '+personas[i].getTelefonos()[j].getNumero());
      console.log('\n');
   }

   console.log('\tMail: ');
   console.log('--------------------------');
   for (let j = 0; j < personas[i].getMails().length; j++) {
      console.log('\tMail '+j+':');
      console.log('\t\tTipo: '+personas[i].getMails()[j].getTipo());
      console.log('\t\tDireccion: '+personas[i].getMails()[j].getDireccion());
      console.log('\n');
   }

   console.log('\tNotas: ');
   console.log('--------------------------');
   for (let j = 0; j < personas[i].getNotas().length; j++) {
      console.log('\tNota '+j+': '+personas[i].getNotas()[j]);
      console.log('\n');
   }

   if(i!==(personas.length-1)){
      console.log("--------------------------------------------------------------------------");
      
   }
   

}


//Si no hubieran sido requeridos usar los métodos de las clases para pintar los datos se habría elegido
//esta solución
// console.log('Persona1', persona1);
// console.log('Persona2', persona2);
// console.log('Persona3', persona3);




const dniEncontrar: string = '56666666A';

const nuevaDireccion: Direccion= new Direccion("calle ejemplo8", 8, 8, "G", 40004, "Motril", "Granada");
const nuevoMail:Mail = new Mail("yahoo.es","nueaDir@yahoo.es");
const nuevoTelefono:Telefono = new Telefono("fijo",950484848)

console.log("****************************BUSQUEDA****************************")
console.log("Se buscará a la personas con dni:"+dniEncontrar);
console.log("Se le añadirá a dicha persona la siguiente direccion:");
console.log(nuevaDireccion);
console.log("Se le añadirá a dicha persona el siguiente mail:");
console.log(nuevoMail);
console.log("Se le añadirá a dicha persona el siguiente telefono:");
console.log(nuevoTelefono);


for (let i = 0; i < personas.length; i++) {
   if (personas[i].getDni() === dniEncontrar) {
      personas[i].añadirDireccion(nuevaDireccion);
      personas[i].añadirMail(nuevoMail);
      personas[i].añadirTelefono(nuevoTelefono);
   }
}

console.log("****************************PERSONAS TRAS MODIFICAR****************************")

for (let i = 0; i < personas.length; i++) {
   
   console.log('Persona '+i+':');
   console.log('\tNombre: '+personas[i].getNombre());
   console.log('\tApellidos: '+personas[i].getApellidos());
   console.log('\tEdad: '+personas[i].getEdad());
   console.log('\tDNI: '+personas[i].getDni());
   console.log('\tCumpleaños: '+personas[i].getCumpleaños());
   console.log('\tColor Favorito: '+personas[i].getColorFavorito());
   console.log('\tSexo: '+personas[i].getSexo());
   console.log('\tDirecciones: ');
   console.log('--------------------------');
   
   for (let j = 0; j < personas[i].getDirecciones().length; j++) {
      console.log('\tDireccion '+j+':');
      console.log('\t\tCalle: '+personas[i].getDirecciones()[j].getCalle());
      console.log('\t\tNumero: '+personas[i].getDirecciones()[j].getNumero());
      console.log('\t\tPiso: '+personas[i].getDirecciones()[j].getPiso());
      console.log('\t\tLetra: '+personas[i].getDirecciones()[j].getLetra());
      console.log('\t\tCódigo Postal: '+personas[i].getDirecciones()[j].getCodigoPostal());
      console.log('\t\tPoblación: '+personas[i].getDirecciones()[j].getPoblacion());
      console.log('\t\tProvincia: '+personas[i].getDirecciones()[j].getProvincia());
      console.log('\n');
      
   }

   console.log('\tTelefonos: ');
   console.log('--------------------------');
   for (let j = 0; j < personas[i].getTelefonos().length; j++) {
      console.log('\tTelefono '+j+':');
      console.log('\t\tTipo: '+personas[i].getTelefonos()[j].getTipo());
      console.log('\t\tNumero: '+personas[i].getTelefonos()[j].getNumero());
      console.log('\n');
   }

   console.log('\tMail: ');
   console.log('--------------------------');
   for (let j = 0; j < personas[i].getMails().length; j++) {
      console.log('\tMail '+j+':');
      console.log('\t\tTipo: '+personas[i].getMails()[j].getTipo());
      console.log('\t\tDireccion: '+personas[i].getMails()[j].getDireccion());
      console.log('\n');
   }

   console.log('\tNotas: ');
   console.log('--------------------------');
   for (let j = 0; j < personas[i].getNotas().length; j++) {
      console.log('\tNota '+j+': '+personas[i].getNotas()[j]);
      console.log('\n');
   }

   if(i!==(personas.length-1)){
      console.log("--------------------------------------------------------------------------");
      
   }
   

}

//Si no hubieran sido requeridos usar los métodos de las clases para pintar los datos se habría elegido
//esta solución
// console.log('Persona1', persona1);
// console.log('Persona2', persona2);
// console.log('Persona3', persona3);