import { IOL_AUTH_URL_TOKEN } from "../constantes.js";

export async function getBearerToken(refresh_token) {
    try{
        const response = await fetch(IOL_AUTH_URL_TOKEN, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `refresh_token=${refresh_token}&grant_type=refresh_token`
        });
        let data =  await response.json(); // devuelve nuevo access_token y refresh_token
        // console.log('BEARER BEARER BEARER BEARER BEARER BEARER')
        console.log(data);
    } catch(error){
        console.log('ERRORASO DEL BUENO', error.message);
    }
}

//Recibe un refresh con el cual devuelve un nuevo bearer

await getBearerToken('refresh t0ken');