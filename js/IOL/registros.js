import { mainIndex } from "./main.js";
const seccionRegistros = document.createElement('div');
seccionRegistros.className = 'seccionRegistros';

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
                    <input class="enviarBtnFormRegistro" type="submit" value="Enviar" id="enviar">
                    <input class="limpiarBtnFormRegistro" type="reset" value="Limpiar" id="limpiar">
                </div>
            </form>
        </div>
    `;
    divPadreRegistros.innerHTML=divRegistro.outerHTML;
    seccionRegistros.appendChild(divPadreRegistros);
    mainIndex.innerHTML = seccionRegistros.outerHTML;
}
