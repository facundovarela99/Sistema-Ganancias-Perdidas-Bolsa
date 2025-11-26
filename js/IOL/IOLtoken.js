const IOL_AUTH_URL = 'https://api.invertironline.com/token';

const IOL_PORTFOLIO_URL = 'https://api.invertironline.com/api/v2/portafolio/argentina';

fetch(IOL_PORTFOLIO_URL, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer aquí iría el token :)',
        'Accept': 'application/json'
    }
})
    .then(res => res.json())
    .then(data => mostrarData(data))
    .catch(err => console.error(err));


const body = document.getElementById('body');
const divPadre = document.createElement('div');


function mostrarData(data){
    data.activos.forEach(activo => {
        const divHijo = document.createElement('div'); 
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
body.appendChild(divPadre);
}