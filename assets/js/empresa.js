export class Empresa{
    constructor(idEmpresa, rut, nombre) {
        this.idEmpresa = idEmpresa;
        this.rut = rut;
    }
    }
    agregarImportaciones(Importaciones) {
        this.importacion.push(importacion);
    }
    
    export class Importacion extends Empresa {
    
    constructor (idProducto, nombreProducto, numeroProducto, precioProducto ){
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.numeroProducto = numeroProducto;
        this.precioProducto = precioProducto;
    }
    
    calcularPrecio() {
        return this.numeroProducto * this.precioProducto;
    }
    calcularTotalImportaciones () {
        return this.Importaciones
    }
    
    
    
    
    
    }