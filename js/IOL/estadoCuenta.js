import { mainIndex } from "./main.js";
const seccionEstadoCuenta = document.createElement('section');
seccionEstadoCuenta.className='estadoCuenta';

export function mostrarDataEstadoCuenta(data){
    mainIndex.innerHTML='';
    seccionEstadoCuenta.innerHTML=`
        <div class="tituloEstadoCuenta">
                <h2><strong>ESTADO DE CUENTA</strong></h2>
        </div>
    `
    const divPadre = document.createElement('div');
    divPadre.className='divPadreEstadoCuenta';
    data.cuentas.forEach((moneda)=>{
        const divHijo = document.createElement('div');
        divHijo.className = 'divHijoEstadoCuenta';
        divHijo.innerHTML=`
            <h3>Saldo disponible en ${moneda.moneda}: $${moneda.saldo}</h3>
            <h3>Total valorizado: $${moneda.titulosValorizados}</h3>
            <h3>Sub-total: $${moneda.total}</h3>
            <h3>Estado: ${moneda.estado}</h3>
        `;
        divPadre.appendChild(divHijo);
        seccionEstadoCuenta.appendChild(divPadre);
    })
    mainIndex.appendChild(seccionEstadoCuenta);
}

