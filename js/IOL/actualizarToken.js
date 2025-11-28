const IOL_AUTH_URL_TOKEN = 'https://api.invertironline.com/token';

async function getBearerToken(refreshToken) {
    const response = await fetch(IOL_AUTH_URL_TOKEN, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=refresh_token&refresh_token=${refreshToken}`
    });
    return await response.json(); // devuelve nuevo access_token y refresh_token
}


// async function getRefreshToken(refresh_token) {
//         const response = await fetch({
//             url: IOL_AUTH_URL_TOKEN,
//             method: "POST",
//             headers: { "Content-type": "application/x-www-form-urlencoded" },
//             body: {
//                 mode: 'urlencoded',
//                 urlencoded: [
//                     {key: 'grant_type', value: 'refresh_token'},
//                     {key: 'refresh_token', value: refresh_token},
//                 ]
//             }
//         });
//         const data = await response.json();
//         console.log(data.refresh_token);
//     } 





// async function getRefreshToken(refresh_token) {
//     const response = await fetch(IOL_AUTH_URL_TOKEN, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `refresh_token=${refresh_token}&grant_type=refresh_token`
//     });

//     if (!response.ok) {
//         console.error("Error:", response.status, response.statusText);
//         return;
//     }
//     let data = await response.json();
//     console.log(data);
// }

// // Simulación: ya tienes un refresh token válido
// getRefreshToken("aquí iria el refresh token");

async function loginIOL(username, password) {
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

// Ejemplo de uso:
loginIOL("TU_USUARIO", "TU_PASSWORD");






// getRefreshToken('aquí iria el refresh token);