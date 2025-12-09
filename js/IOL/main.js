import { fetchData } from "./resolverEndpoint.js";
import { mostrarDataEstadoCuenta } from "./estadoCuenta.js";
import { mostrarDataActivos } from "./activos.js";
import { titulosPage } from "./titulos.js";
import { IOL_ESTADO_CUENTA_URL, IOL_PORTFOLIO_ACTIVOS_URL } from "../constantes.js";

// let refreshTokenActualizado = await ActualizarRefreshToken()
export const mainIndex = document.getElementById('mainIndex');

const botonEstadoCuenta = document.querySelector('.botonEstadoCuenta');
const botonActivos = document.querySelector('.botonActivos');
const botonTitulos = document.querySelector('.botonTitulos');

const dataEstadoCuenta = await fetchData(IOL_ESTADO_CUENTA_URL)
const dataActivos = await fetchData(IOL_PORTFOLIO_ACTIVOS_URL); 

botonEstadoCuenta.addEventListener('click', ()=>{
    (dataEstadoCuenta.message) 
    ?document.getElementById('mainIndex').innerHTML=`
        <h1 class="h1NoData">NO HAY DATA DISPONIBLE</h1>
    ` 
    :mostrarDataEstadoCuenta(dataEstadoCuenta);
}
);

botonActivos.addEventListener('click', ()=>{
    (dataActivos.message)
    ?document.getElementById('mainIndex').innerHTML=`
        <h1 class="h1NoData">NO HAY DATA DISPONIBLE</h1>
    `
    :mostrarDataActivos(dataActivos);
})


botonTitulos.addEventListener('click', ()=>{
    titulosPage();
});