import dotenv from "dotenv";
dotenv.config({ path: "../../.env" }); //si se quita hay que ejecutar el script desde la raíz del proyecto 


const IOL_AUTH_URL_TOKEN = 'https://api.invertironline.com/token';

async function getBearerToken(refreshToken) {
    try{
        const response = await fetch(IOL_AUTH_URL_TOKEN, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `grant_type=refresh_token&refresh_token=${refreshToken}`
        });
        let data =  await response.json(); // devuelve nuevo access_token y refresh_token
        console.log('BEARER BEARER BEARER BEARER BEARER BEARER')
        console.log(data);
    } catch(error){
        console.log('ERRORASO DEL BUENO', error);
    }
}


async function ActualizarRefreshToken(refresh_token) {
    const response = await fetch(IOL_AUTH_URL_TOKEN, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `refresh_token=${refresh_token}&grant_type=refresh_token`
    });

    if (!response.ok) {
        console.error("Error al querer actualizar el refresh token:", response.status, response.statusText);
        return;
    }
    let data = await response.json();
    console.log('REFRESH REFRESH REFRESH REFRESH REFRESH REFRESH')
    console.log(data);
}

ActualizarRefreshToken("aquí iria el último refresh token obtenido");

getBearerToken('aquí iria el refresh token :)');

async function loginIOL(username, password) { //Función para simular el login y obtener el primer par de tokens (propenso a llevar a un bloqueo de cuenta si se usa repetidamente)
    const response = await fetch("https://api.invertironline.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        const errorText = await response.text();
        console.error("Detalle:", errorText);
        return null;
    }

    const data = await response.json();
    console.log("Access token:", data.access_token);
    console.log("Refresh token:", data.refresh_token);

    return data; // Devuelve el objeto con los tokens
}

// // Ejemplo de uso:
const username = process.env.IOL_usuario;
const password = process.env.IOL_contrasenia;
//
loginIOL(username, password);