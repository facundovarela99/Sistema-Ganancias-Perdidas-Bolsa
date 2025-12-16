import { mostrarTemplateRegistros } from "./crearRegistro.js";

const mainIndex = document.getElementById('mainIndex');
const seccionRegistros = document.createElement('div');
seccionRegistros.className = 'seccionRegistros';

// const seccionRegistrosGuardados

export function validarStorage(storage){
    if (storage) return JSON.parse(storage);
    return [];
}

export function renderizarRegistros(ArrayRegistros){
    mainIndex.innerHTML = '';
    seccionRegistros.innerHTML=`
        <div class="divTituloRegistros">
            <h1><STRONG>MIS REGISTROS</STRONG></h1>
        </div>
        <div class="divBtnCrearNuevoRegistro">
            <button class="btnCrearNuevoRegistro" type="button">CREAR NUEVO REGISTRO</button>
        </div>
    `;

    if (ArrayRegistros.length !== 0){
        const divRegistros = document.createElement('div');
        divRegistros.className = 'divRegistros';
        console.log('Registros con mas de un elemento:\n ', ArrayRegistros)

        ArrayRegistros.forEach((registro) => {
            console.log(registro.id)
            const cardRegistroCreado = document.createElement('div');
            cardRegistroCreado.className = 'cardRegistroCreado';
            cardRegistroCreado.innerHTML = `
                <div class="divHijoCardRegistroCreado">
                    <p><strong>Título: ${registro.titulo}</strong></p>
                    <p><strong>Cantidad acciones: ${registro.cantidad}</strong></p>
                    <p><strong>Precio por accion: $${registro.precioAccion}</strong></p>
                    <p><strong>Subtotal: $${(registro.precioAccion * registro.cantidad).toFixed(2)}</strong></p>
                    <p><strong>Fecha de compra: ${registro.fecha}</strong></p>
                </div>
                <div class="divBtnEliminarRegistro">
                    <button class="BtnEliminarRegistro${registro.id}" type="button" data-id="${registro.id}">ELIMINAR REGISTRO</button>
                </div>
            `;
            divRegistros.appendChild(cardRegistroCreado);
        });

        // DELEGACIÓN DE EVENTOS para los botones de eliminar
        divRegistros.addEventListener('click', (event) => {
            if (event.target && event.target.className.startsWith('BtnEliminarRegistro')) {
                const id = event.target.getAttribute('data-id');
                console.log('Eliminar registro con id:', id);
                localStorage.clear();
                renderizarRegistros(ArrayRegistros);
                // const nuevosRegistros = ArrayRegistros.filter(registro => registro.id !== id);
                // localStorage.setItem('ArrayRegistrosAgregados', JSON.stringify(nuevosRegistros));
                // renderizarRegistros(nuevosRegistros);
            }
        });

        seccionRegistros.appendChild(divRegistros);
    } else{

        seccionRegistros.innerHTML = `
            <h1 class="h1NoData">Aún no posee registros.</h1>
            <div class="divBtnCrearNuevoRegistro">
                <button class="btnCrearNuevoRegistro" type="button">CREAR NUEVO REGISTRO</button>
            </div>
        `;

    }
    mainIndex.appendChild(seccionRegistros);

    const btnCrearNuevoRegistro = document.querySelector('.btnCrearNuevoRegistro');
    
    btnCrearNuevoRegistro.addEventListener('click', ()=>{
        mostrarTemplateRegistros();
    });

}