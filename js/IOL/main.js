import { fetchData } from "./resolverEndpoint.js";
import { mostrarDataEstadoCuenta } from "./estadoCuenta.js";
import { mostrarDataActivos } from "./activos.js";
import { titulosPage } from "./titulos.js";
import { mostrarRegistros } from "./registros.js";
import { IOL_ESTADO_CUENTA_URL, IOL_PORTFOLIO_ACTIVOS_URL } from "../constantes.js";

// let refreshTokenActualizado = await ActualizarRefreshToken()
export const mainIndex = document.getElementById('mainIndex');

const botonEstadoCuenta = document.querySelector('.botonEstadoCuenta');
const botonActivos = document.querySelector('.botonActivos');
const botonTitulos = document.querySelector('.botonTitulos');
const botonRegistros = document.querySelector('.botonMisRegistros');

const dataEstadoCuenta = await fetchData(IOL_ESTADO_CUENTA_URL)
const dataActivos = await fetchData(IOL_PORTFOLIO_ACTIVOS_URL); 

botonEstadoCuenta.addEventListener('click', ()=>{
    mostrarDataEstadoCuenta(dataEstadoCuenta);
}
);

botonActivos.addEventListener('click', ()=>{
    mostrarDataActivos(dataActivos);
})


botonTitulos.addEventListener('click', ()=>{
    titulosPage();
});

botonRegistros.addEventListener('click',()=>{
    mostrarRegistros();
})