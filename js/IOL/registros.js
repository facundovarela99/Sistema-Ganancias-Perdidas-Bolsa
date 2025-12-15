import { mostrarTemplateRegistros } from "./crearRegistro.js";

const mainIndex = document.getElementById('mainIndex');
const seccionRegistros = document.createElement('div');
seccionRegistros.className = 'seccionRegistros';

// const seccionRegistrosGuardados

export let ArrayRegistrosAgregados;

if (localStorage.getItem('ArrayRegistrosAgregados')){
    ArrayRegistrosAgregados = JSON.parse(localStorage.getItem('ArrayRegistrosAgregados'))
} else  {
    ArrayRegistrosAgregados = [];
}

renderizarRegistros(ArrayRegistrosAgregados);

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
    
    // document.querySelector('.btnCrearNuevoRegistro').addEventListener('click', mostrarTemplateRegistros());

    if (ArrayRegistros.length !== 0){
        
        const divRegistros = document.createElement('div');
        divRegistros.className = 'divRegistros';
        console.log('Registros: ', ArrayRegistros[0])

        ArrayRegistros.forEach((registro) => {

            const cardRegistroCreado = document.createElement('div');
            cardRegistroCreado.className = 'cardRegistroCreado';
            cardRegistroCreado.innerHTML = `
                <div class="divHijoCardRegistroCreado">
                    <p><strong>Título: ${registro.titulo}</strong></p>
                    <p><strong>Cantidad acciones: ${registro.cantidad}</strong></p>
                    <p><strong>Precio por accion: ${registro.precioAccion}</strong></p>
                    <p><strong>Subtotal: ${registro.precioAccion * registro.cantidad}</strong></p>
                    <p><strong>Fecha de compra: ${registro.fecha}</strong></p>
                </div>
                <div class="divBtnEliminarRegistro">
                    <button class="BtnEliminarRegistro${registro.id}" type="button">ELIMINAR REGISTRO</button>
                </div>
            `;

            divRegistros.appendChild(cardRegistroCreado);
            
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

    const btnEliminarRegistro = document.querySelector(`.BtnEliminarRegistro${registro.id}`)

    if (btnEliminarRegistro){
        btnEliminarRegistro.addEventListener('click', ()=>{
            mainIndex.innerHTML=`
                saldñklñsadklñsadklñsad
                dsalñkdsalñkdsalñdksalñas
            `
        })
    }
    
    
        btnCrearNuevoRegistro.addEventListener('click', ()=>{
            mostrarTemplateRegistros();
        });

}