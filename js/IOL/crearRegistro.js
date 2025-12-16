import { renderizarRegistros } from "./registros.js";

const mainIndex = document.getElementById('mainIndex');
const seccionRegistros = document.createElement('div');
seccionRegistros.className = 'seccionRegistros';

const seccionRegistrosCreados = document.createElement('div');
const divRegistrosCreados = document.createElement('div')
seccionRegistrosCreados.className = 'seccionRegistrosCreados';
divRegistrosCreados.className = 'divRegistrosCreados';




// const seccionRegistrosGuardados

let ArrayRegistrosAgregados;

(localStorage.getItem('ArrayRegistrosAgregados'))
    ? ArrayRegistrosAgregados = JSON.parse(localStorage.getItem('ArrayRegistrosAgregados'))
    : ArrayRegistrosAgregados = [];

function registrosGuardados(arrayRegistros){
    arrayRegistros.forEach((registro)=>{
        const divTarjetaRegistroCreado = document.createElement('div');
        divTarjetaRegistroCreado.className = 'divTarjetaRegistroCreado';
        const cardRegistroCreado = document.createElement('div');
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
                divRegistrosCreados.appendChild(divTarjetaRegistroCreado);
            })
            seccionRegistrosCreados.innerHTML = divRegistrosCreados.outerHTML;
            mainIndex.appendChild(seccionRegistrosCreados);
}

export function mostrarTemplateRegistros(){
    seccionRegistros.innerHTML = `
        <div class="tituloRegistros">
            <h1>CREAR REGISTRO</h1>
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
                    <button class="limpiarBtnFormRegistro" type="reset" value="Limpiar" id="limpiar">Limpiar</button>
                </div>
            </form>
        </div>
        <div class="divCamposRegistroVacios"></div>


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

        
        
        if (registroTitulo && registroCantidad && registroPrecioCompra && registroFecha){
            let nuevoRegistro = {
                id:ArrayRegistrosAgregados.length,
                titulo:registroTitulo,
                cantidad:registroCantidad,
                precioAccion:registroPrecioCompra,
                fecha:registroFecha
            };
    
            ArrayRegistrosAgregados.push(nuevoRegistro);
            localStorage.setItem('ArrayRegistrosAgregados', JSON.stringify(ArrayRegistrosAgregados));
    
            // registrosGuardados(ArrayRegistrosAgregados);
            renderizarRegistros(ArrayRegistrosAgregados);
            
        } else {
        
            setInterval(() =>{
                document.querySelector('.divCamposRegistroVacios').innerHTML=''
            }, 2500);
            
            document.querySelector('.divCamposRegistroVacios').innerHTML=`
                <h3><strong>Debe completar todos los campos</strong></h3>
            `
        }
    })
}

                    // <input class="enviarBtnFormRegistro" type="submit" value="Enviar" id="enviar">