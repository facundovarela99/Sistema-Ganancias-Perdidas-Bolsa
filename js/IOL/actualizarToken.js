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
// getRefreshToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNTI2MzE3IiwianRpIjoiYWUxOGE1M2EtZTNhYS00ZjY3LTg1ODMtYzRhZTVmM2JiZDg3IiwicnRfZmFtaWx5IjoiNTA2MGU4OWYtODkwNi00NDhmLWEyYmEtZDk0M2Q3ZTViOGJiIiwibmJmIjoxNzY0MjY2Njc5LCJleHAiOjE3NjQyNjc4NzksImlhdCI6MTc2NDI2NjY3OSwiaXNzIjoiSU9MT2F1dGhTZXJ2ZXIiLCJhdWQiOiJJT0xPYXV0aFNlcnZlciJ9.gwzPb4uMNsiBKK3VTfyaQoAqZ8dL8oXoyXXHB5xEYZ2aGopZyZ62KUlPrQzJyyei1O7UhDDsO-xlFcVCWwTpIvjyGZe2d38EyJfQMizzHS9NLaWVox8Z3cMqSxfBaBImyb7tkQCyrSaTMkhWlxzMslla0U1ckqep6GVTjlXxFe8K3IYroVxQeEljZPF76i2eYalUfs0Leh6UUeEp68nNpXwJV8SgvMXHRIiqC5fXUEsHVJQyrwJH_cuLOfby540WOHYcbG10AwLxzmybELGAW3azoBdeqUPn_BgxZLo8-eYZtYH-cN2UktdeNGLU6sMbYJdfCYoMUL-K45OWy2Xebw");

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