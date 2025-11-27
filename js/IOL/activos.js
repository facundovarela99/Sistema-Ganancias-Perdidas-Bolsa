const seccionActivos = document.querySelector('.activos');
const divPadre = document.createElement('div');
divPadre.className = 'divPadreActivos';


export function mostrarDataActivos(data) {
    data.activos.forEach(activo => {
        const divHijo = document.createElement('div');
        divHijo.className = 'divHijoActivos';
        divHijo.innerHTML = `   
            <h3>${`ACTIVO: ${activo.titulo.simbolo}`}</h3>
            <p>${`CANTIDAD: ${activo.cantidad}`}</p>
            <p>${`PRECIO COMPRA: ${activo.ppc}`}</p>
            <p>${`ULTIMO PRECIO CIERRE: ${activo.ultimoPrecio}`}</p>
            <p>${`GANANCIA PORCENTAJE: ${activo.gananciaPorcentaje}`}</p>
            <p>${`GANANCIA DINERO: ${activo.gananciaDinero}`}</p>
            <p>${`VALORIZADO: ${activo.valorizado}`}</p>
        `;
        divPadre.appendChild(divHijo);
    });
    seccionActivos.appendChild(divPadre);
}