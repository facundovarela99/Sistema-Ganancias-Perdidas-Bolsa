import { IOL_AUTH_URL_TOKEN } from "../constantes.js";

export async function ActualizarRefreshToken(refresh_token) {
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
    console.log(data)
    // return data;
}

await ActualizarRefreshToken('refresh ...');

