import { mainIndex } from "./main.js";
const seccionActivos = document.createElement('section');
seccionActivos.className='activos'


export function mostrarDataActivos(data) {
    mainIndex.innerHTML = '';
    seccionActivos.innerHTML=`
        <div class="tituloActivos">
                <h1><strong>ACTIVOS</strong></h1>
        </div>
    `
    const divPadre = document.createElement('div');
    divPadre.className = 'divPadreActivos';
    data.activos.forEach(activo => {
        const divHijo = document.createElement('div');
        const divContenido = document.createElement('div');
        divHijo.className = 'divHijoActivos';
        divContenido.className = 'divContenidoActivo';
        divContenido.innerHTML = `   
            <h3>${`ACTIVO: ${activo.titulo.simbolo}`}</h3>
            <p>${`DESCRIPCIÓN: ${activo.titulo.descripcion}`}</p>
            <p>${`CANTIDAD: ${activo.cantidad}`}</p>
            <p>${`PRECIO COMPRA: ${activo.ppc}`}</p>
            <p>${`ULTIMO PRECIO CIERRE: ${activo.ultimoPrecio}`}</p>
            <p>${`GANANCIA PORCENTAJE: ${activo.gananciaPorcentaje}`}</p>
            <p>${`GANANCIA DINERO: ${activo.gananciaDinero}`}</p>
            <p>${`VALORIZADO: ${activo.valorizado}`}</p>
        `;
        divHijo.appendChild(divContenido);
        divPadre.appendChild(divHijo);
        seccionActivos.appendChild(divPadre);
    });
    mainIndex.appendChild(seccionActivos);
}