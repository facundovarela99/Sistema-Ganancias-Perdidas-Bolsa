import { fetchData } from "./resolverEndpoint.js";
let IOL_TITULO = 'https://api.invertironline.com/api/v2/bcba/Titulos/titulo/Cotizacion';

const cardTitulo = document.querySelector('.tituloBuscado');

export function ingresarTitulo(titulo){
    if (titulo){
        let nuevoTitulo = IOL_TITULO.replace('titulo', titulo);
        fetchData(nuevoTitulo).then(data => mostrarDataTitulos(data));
        console.log(nuevoTitulo);
    }
    else{
        cardTitulo.innerHTML = `
            No ingresó ningún título.
        `;
    }
}


export function mostrarDataTitulos(data){
    cardTitulo.innerHTML = `
        <h2>Título: ${data.simbolo}</h2>
        <h3>Descripcion: ${data.descripcionTitulo}</h3>
        <h3>Último precio: $${Number(data.ultimoPrecio).toFixed(2)}</h3>
        <h3>Variacion: ${data.variacion}</h3>
        <h3>Apertura: $${Number(data.apertura).toFixed(2)}</h3>
        <h3>Máximo: $${Number(data.maximo).toFixed(2)}</h3>
        <h3>Mínimo: $${Number(data.minimo).toFixed(2)}</h3>
        <h3>Tendencia: ${data.tendencia}</h3>
    `;
}