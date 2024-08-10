import { Empresa } from './empresa';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#empresaForm');
    const tabla = document.querySelector('#importacionForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const idProducto = form.idProducto.value;
        const nombreProducto = form.nombreProducto.value;
        const numeroProducto = form.numeroProducto.value;
        const precioProducto = parseInt(form.precioProducto.value);

        const nuevoEmpresa = new Empresa(idProducto, nombreProducto, numeroProducto, precioProducto);

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${nuevoEmpresa.getIdEmpresao}</td>
        <td>${nuevoEmpresa.getNombre}</td>
        <td>${nuevoEmpresa.getRut}</td>
    `;
        tabla.appendChild(row);

        form.reset();
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const idProducto = form.idProducto.value;
        const nombreProducto = form.nombreProducto.value;
        const anio = parseInt(form.anio.value);

        const nuevoAuto = new Auto(marca, modelo, anio);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nuevaEmpresa.getIdEmpresa()}</td>
            <td>${nuevaEmpresa.getNombre()}</td>
            <td>${nuevaEmpresa.getRut()}</td>
        `;
        tablaEmpresas.appendChild(row);

        empresaForm.reset();
    });
    
    importacionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const idImportacion = importacionForm.idImportacion.value;
        const producto = importacionForm.producto.value;
        const numeroProductos = parseInt(importacionForm.numeroProductos.value);
        const precioUnitario = parseInt(importacionForm.precioUnitario.value);

        const nuevaImportacion = new Importacion(idImportacion, producto, numeroProductos, precioUnitario);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nuevaImportacion.getIdProducto()}</td>
            <td>${nuevaImportacion.nombreProducto}</td>
            <td>${nuevaImportacion.numeroProducto}</td>
            <td>${nuevaImportacion.precioProducto}</td>
            <td>${nuevaImportacion.calcularPrecio()}</td>
        `;
        tablaImportaciones.appendChild(row);

        importacionForm.reset();
    });
});