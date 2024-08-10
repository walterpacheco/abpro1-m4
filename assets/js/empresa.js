export class Empresa {
    // Clase para representar una empresa
    #idEmpresa;
    #rut;
    #nombre;
    constructor(idEmpresa, rut, nombre) {
        this.idEmpresa = idEmpresa;
        this.rut = rut;
        this.nombre = nombre;
        this.importaciones = [];
    }
    setIdEmpresa(idEmpresa) {
        this.#idEmpresa = idEmpresa;
    }
    getIdEmpresao() {
        return this.#idEmpresa;
    }
    setRut(rut) {
        this.#rut = rut;
    }
    getRut() {
        return this.#rut;
    }
    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre;
    }

    agregarImportaciones(Importaciones) {
        this.importacion.push(importacion);
    }
}
// Clase para representar una importación

export class Importacion extends Empresa {
    constructor(idProducto, nombreProducto, numeroProducto, precioProducto) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.numeroProducto = numeroProducto;
        this.precioProducto = precioProducto;
    }

    setidProducto(idProducto) {
        this.#idProducto = idProducto;
    }
    getnombreProducto() {
        return this.#nombreProducto;
    }
    setnumeroProducto(numeroProducto) {
        this.#nombreProducto = nombreProducto;
    }
    getnombreProducto() {
        return this.#nombreProducto;
    }
    // Método para agregar una nueva importación
    calcularPrecio() {
        return this.numeroProducto * this.precioProducto;
    }
    // Método para calcular el total de importaciones
    calcularTotalImportaciones() {
        this.importaciones.reduce(
            (total, importacion) => total + importacion.calcularTotal(),
            0
        );
    }
}