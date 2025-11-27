const seccionEstadoCuenta = document.querySelector('.estadoCuenta');
const divPadre = document.createElement('div');
divPadre.className='divPadreEstadoCuenta';

export function mostrarDataEstadoCuenta(data){
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
    })
    seccionEstadoCuenta.appendChild(divPadre)
}

