import { fetchData } from "./resolverEndpoint.js";
import { mainIndex } from "./main.js";
let IOL_TITULO = 'https://api.invertironline.com/api/v2/bcba/Titulos/titulo/CotizacionDetalle';

const seccionTitulo = document.createElement('section');
seccionTitulo.className = 'tituloBuscado';
const divTarjeta = document.createElement('div');
divTarjeta.className = 'divTarjeta';


export function titulosPage(){
    seccionTitulo.innerHTML=`
        <div class="tituloTitulos">
                <h1><strong>TITULOS</strong></h1>
        </div>
        <div class="divInputTituloBuscado">
                <label for="inputTitulo"><h2>Ingrese el titulo a buscar</h2></label>
                <input name="inputTitulo" id="inputTitulo" type="text">
                <button type="button" id="botonBuscarTitulo">BUSCAR</button>
        </div>
        <div id="mensajeError"></div>
    `;
    mainIndex.innerHTML=seccionTitulo.outerHTML;

    document.getElementById('botonBuscarTitulo').addEventListener('click',()=>{
        ingresarTitulo(document.getElementById('inputTitulo').value)
    })

}

function ingresarTitulo(titulo){
    const mensajeError = document.getElementById('mensajeError');
    if (titulo){
        let nuevoTitulo = IOL_TITULO.replace('titulo', titulo);
        fetchData(nuevoTitulo).then(data => mostrarDataTitulos(data));
        document.getElementById('inputTitulo').value = '';
        console.log(nuevoTitulo);
        mensajeError.innerHTML = '';
    }
    else{
        if (divTarjeta){
            divTarjeta.innerHTML = "";
        }

        setInterval(() =>{
                mensajeError.innerHTML=''
            }, 2500);
            
            mensajeError.innerHTML = `
            <p style="color:red; font-weight:bold;">
                No ingresó ningún título. Por favor ingresar un título.
            </p>
        `
    }
}


function mostrarDataTitulos(data){
    const divPadre = document.createElement('div');
    divPadre.className = 'divPadreTituloBuscado';
    const divCardTitulo = document.createElement('div');
    divCardTitulo.className='cardTitulo';
    if (data.message) {
        divCardTitulo.innerHTML=`
            <h1 class="h1NoData">NO HAY DATA DISPONIBLE</h1>
        `

    } else{
        divTarjeta.innerHTML = '';
        mainIndex.innerHTML = '';
        divCardTitulo.innerHTML = `
            <h2>Título: ${data.simbolo}</h2>
            <h3>Descripcion: ${data.descripcionTitulo}</h3>
            <h3>Último precio: $${Number(data.ultimoPrecio).toFixed(2)}</h3>
            <h3>Variacion: ${data.variacion}</h3>
            <h3>Apertura: $${Number(data.apertura).toFixed(2)}</h3>
            <h3>Máximo: $${Number(data.maximo).toFixed(2)}</h3>
            <h3>Mínimo: $${Number(data.minimo).toFixed(2)}</h3>
            <h3>Tendencia: ${data.tendencia}</h3>
        `;
        divPadre.appendChild(divCardTitulo);
        divTarjeta.appendChild(divPadre)
        seccionTitulo.appendChild(divTarjeta);
        mainIndex.appendChild(seccionTitulo);
        document.getElementById('botonBuscarTitulo').addEventListener('click', ()=>{
        let inputTitulo = document.getElementById('inputTitulo');
        ingresarTitulo(inputTitulo.value);
    });
    }

}

