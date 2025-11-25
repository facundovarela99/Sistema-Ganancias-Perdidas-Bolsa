const IOL_AUTH_URL = 'https://api.invertironline.com/token';

const IOL_PORTFOLIO_URL = 'https://api.invertironline.com/api/v2/portafolio/argentina';

fetch(IOL_PORTFOLIO_URL, {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJzdWIiOiI3NDQ2MjYiLCJJRCI6Ijc0NDYyNiIsImp0aSI6IjcwYWEyOTdmLWFlOTMtNGQ5My1hMzc0LTk5ODIzNTEzM2U4OSIsImNvbnN1bWVyX3R5cGUiOiIxIiwidGllbmVfY3VlbnRhIjoiVHJ1ZSIsInRpZW5lX3Byb2R1Y3RvX2J1cnNhdGlsIjoiVHJ1ZSIsInRpZW5lX3Byb2R1Y3RvX2FwaSI6IlRydWUiLCJ0aWVuZV9UeUMiOiJUcnVlIiwibmJmIjoxNzY0MDc5NTI2LCJleHAiOjE3NjQwODA0MjYsImlhdCI6MTc2NDA3OTUyNiwiaXNzIjoiSU9MT2F1dGhTZXJ2ZXIiLCJhdWQiOiJJT0xPYXV0aFNlcnZlciJ9.J1gNPDgAbn0m6FI8todgK3QkPzepPqk380NFfF_gZIfDHV-KaxhvrVm2FXgRTo7My0AmzaxgI4mkCtJNYhA__UxE2UB4XQY6aO1xLCFQCYCBR2weTctloq_K5Llc5pcf3DophbxDsEdXPMuI37Ef15fruvsd1Jg5yZ_rgsZD7k2KqRQcPR6Fq8A_XECX1cDfBLHPqPKnKWCnK6aYxwRnV06yV9TP390kuBjS8hNAz32U__DJnwMx0oKrFVMOB7DQMKxTyD6pgmTYtZVUrB6EC2080Ot3IjUVPI2o3lztcUKtew65Vgc_Nyyji6DTBA85srJ7CtGqBxl8sCAmM2MziA',
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