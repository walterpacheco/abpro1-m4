export class Empresa {
    constructor(idEmpresa, nombre, rut) {
        this.idEmpresa = idEmpresa;
        this.nombre = nombre;
        this.rut = rut;
        this.importaciones = [];
    }

    getIdEmpresa() {
        return this.idEmpresa;
    }

    getNombre() {
        return this.nombre;
    }

    getRut() {
        return this.rut;
    }

    agregarImportacion(importacion) {
        this.importaciones.push(importacion);
    }
}
