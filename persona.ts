
import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleaños: Date;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mail[];
    private telefonos: Telefono[];
    private notas: string[]

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleaños: Date,
        colorFavorito: string,
        sexo: string,
        direcciones: Direccion[],
        mails: Mail[],
        telefonos: Telefono[],
        notas: string[]
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }


    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    setApellidos(apellidos: string) {
        this.apellidos = apellidos;
    }

    getEdad() {
        return this.edad;
    }

    setEdad(edad: number) {
        this.edad = edad;
    }

    getDni() {
        return this.dni;
    }

    setDni(dni: string) {
        this.dni = dni;
    }

    getCumpleaños() {
        return this.cumpleaños;
    }

    setCumpleaños(cumpleaños: Date) {
        this.cumpleaños = cumpleaños;
    }

    getColorFavorito() {
        return this.colorFavorito;
    }

    setColorFavorito(colorFavorito: string) {
        this.colorFavorito = colorFavorito;
    }

    getSexo() {
        return this.sexo;
    }

    setSexo(sexo: string) {
        this.sexo = sexo;
    }

    getDirecciones() {
        return this.direcciones;
    }

    setDirecciones(direcciones: Direccion[]) {
        this.direcciones = direcciones;
    }

    añadirDireccion(direccion:Direccion){
        this.direcciones.push(direccion)
    }

    getMails() {
        return this.mails;
    }

    setMails(mails: Mail[]) {
        this.mails = mails;
    }

    añadirMail(mail:Mail){
        this.mails.push(mail)
    }

    getTelefonos() {
        return this.telefonos;
    }

    setTelefonos(telefonos: Telefono[]) {
        this.telefonos = telefonos;
    }

    añadirTelefono(telefono:Telefono){
        this.telefonos.push(telefono)
    }


    getNotas() {
        return this.notas;
    }

    setNotas(notas: string[]) {
        this.notas = notas;
    }


}