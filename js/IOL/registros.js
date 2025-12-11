import { mainIndex } from "./main.js";
const seccionRegistros = document.createElement('div');
seccionRegistros.className = 'seccionRegistros';

const seccionRegistrosCreados = document.createElement('div');
const divRegistrosCreados = document.createElement('div')
seccionRegistrosCreados.className = 'seccionRegistrosCreados';
divRegistrosCreados.className = 'divRegistrosCreados';

let ArrayRegistrosAgregados;

(localStorage.getItem('ArrayRegistrosAgregados'))
? ArrayRegistrosAgregados = JSON.parse(localStorage.getItem('ArrayRegistrosAgregados'))
: ArrayRegistrosAgregados = [];

export function mostrarRegistros(){
    seccionRegistros.innerHTML = `
        <div class="tituloRegistros">
            <h1>MIS REGISTROS</h1>
        </div>
    `
    const divPadreRegistros = document.createElement('div');
    const divRegistro = document.createElement('div');
    divPadreRegistros.className = 'divPadreRegistros';
    divRegistro.className = 'divRegistro';
    divRegistro.innerHTML = `
        <div class="divFormRegistro">
            <form class="formularioRegistro" action="" method="">
                <div class="inputs1">
                    <div>
                        <label for="registroTitulo"><p>Título</p></label>
                        <input type="text" name="registroTitulo" id="registroTitulo" placeholder="Ingresar título" required>
                    </div>
                    <div>
                        <label for="registroCantidad"><p>Cantidad</p></label>
                        <input type="number" name="registroCantidad" id="registroCantidad" placeholder="Cantidad adquirida" required>
                    </div>
                </div>
                <div class="inputs2">
                    <div>
                        <label for="registroPrecioCompra"><p>Precio compra</p></label>
                        <input type="number" name="registroPrecioCompra" id="registroPrecioCompra" placeholder="Precio por acción" required>
                    </div>
                    <div>
                        <label for="registroFecha"><p>Fecha registro</p></label>
                        <input type="date" name="registroFecha" id="registroFecha" required>
                    </div>
                </div>
                <div class="btnsForm">
                    <button class="enviarBtnFormRegistro" type="submit" id="btnEnviarRegistro">Enviar</button>
                    <input class="limpiarBtnFormRegistro" type="reset" value="Limpiar" id="limpiar">
                    </div>
                    </form>
                    </div>
                    `;
    divPadreRegistros.innerHTML=divRegistro.outerHTML;
    seccionRegistros.appendChild(divPadreRegistros);
    mainIndex.innerHTML = seccionRegistros.outerHTML;

    const botonEnviarRegistro = document.getElementById('btnEnviarRegistro');
    botonEnviarRegistro.addEventListener('click', (event) =>{
        event.preventDefault();

        const registroTitulo = document.getElementById('registroTitulo').value;
        const registroCantidad = document.getElementById('registroCantidad').value;
        const registroPrecioCompra = document.getElementById('registroPrecioCompra').value;
        const registroFecha = document.getElementById('registroFecha').value;

        let nuevoRegistro = {
            titulo:registroTitulo,
            cantidad:registroCantidad,
            precioAccion:registroPrecioCompra,
            fecha:registroFecha
        };

        ArrayRegistrosAgregados.push(nuevoRegistro);

        const divTarjetaRegistroCreado = document.createElement('div');
        const cardRegistroCreado = document.createElement('div');
        divTarjetaRegistroCreado.className = 'divTarjetaRegistroCreado';
        ArrayRegistrosAgregados.forEach((registro)=>{
            cardRegistroCreado.className = 'cardRegistroCreado';
            cardRegistroCreado.innerHTML = `
                <div>
                    <h3>Título: ${registro.titulo}</h3>
                </div>
                <div>
                    <h3>Cantidad de acciones: ${registro.cantidad}</h3>
                </div>
                <div>
                    <h3>Precio por acción: $${registro.precioAccion}</h3>
                </div>
                <div>
                    <h3>Fecha: ${registro.fecha}</h3>
                </div>
                <div>
                    <h3>Subtotal compra: ${registro.cantidad * registro.precioAccion}</h3>
                </div>
            `;
            divTarjetaRegistroCreado.appendChild(cardRegistroCreado);
        })
        divRegistrosCreados.innerHTML = divTarjetaRegistroCreado.outerHTML;
        seccionRegistrosCreados.innerHTML = divRegistrosCreados.outerHTML;
        mainIndex.innerHTML = seccionRegistrosCreados.outerHTML;
    })

}

                    // <input class="enviarBtnFormRegistro" type="submit" value="Enviar" id="enviar">