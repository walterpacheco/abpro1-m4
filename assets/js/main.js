import { Empresa } from './empresa.js';
import { Importacion } from './importacion.js';

document.addEventListener('DOMContentLoaded', () => {
    const empresaForm = document.querySelector('#empresaForm');
    const importacionForm = document.querySelector('#importacionForm');
    const tablaEmpresas = document.querySelector('#tablaEmpresas');
    const tablaImportaciones = document.querySelector('#tablaImportaciones');
    const empresaSelect = document.querySelector('#empresaSelect');

    const empresas = [];

    empresaForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const idEmpresa = empresaForm.idEmpresa.value;
        const nombreEmpresa = empresaForm.nombreEmpresa.value;
        const rutEmpresa = empresaForm.rutEmpresa.value;

        const nuevaEmpresa = new Empresa(idEmpresa, nombreEmpresa, rutEmpresa);
        empresas.push(nuevaEmpresa);

        // Agregar la nueva empresa a la tabla de empresas
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nuevaEmpresa.getIdEmpresa()}</td>
            <td>${nuevaEmpresa.getNombre()}</td>
            <td>${nuevaEmpresa.getRut()}</td>
        `;
        tablaEmpresas.appendChild(row);

        // Agregar la nueva empresa al select de importaciones
        const option = document.createElement('option');
        option.value = nuevaEmpresa.getIdEmpresa();
        option.text = `${nuevaEmpresa.getNombre()} (ID: ${nuevaEmpresa.getIdEmpresa()})`;
        empresaSelect.appendChild(option);

        empresaForm.reset();
    });

    importacionForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const idEmpresaSeleccionada = empresaSelect.value;
        const empresaSeleccionada = empresas.find(empresa => empresa.getIdEmpresa() === idEmpresaSeleccionada);

        if (!empresaSeleccionada) {
            alert('Debe seleccionar una empresa válida antes de registrar una importación.');
            return;
        }

        const idImportacion = importacionForm.idImportacion.value;
        const producto = importacionForm.producto.value;
        const numeroProductos = parseInt(importacionForm.numeroProductos.value);
        const precioUnitario = parseInt(importacionForm.precioUnitario.value);

        const nuevaImportacion = new Importacion(idImportacion, producto, numeroProductos, precioUnitario);
        empresaSeleccionada.agregarImportacion(nuevaImportacion);

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${nuevaImportacion.getIdImportacion()}</td>
            <td>${nuevaImportacion.getProducto()}</td>
            <td>${nuevaImportacion.getNumeroProductos()}</td>
            <td>${nuevaImportacion.getPrecioUnitario()}</td>
            <td>${nuevaImportacion.calcularTotal()}</td>
        `;
        tablaImportaciones.appendChild(row);

        importacionForm.reset();
    });
});
