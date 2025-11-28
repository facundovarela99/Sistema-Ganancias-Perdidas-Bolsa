export async function fetchData(endpoint) {
    try {
        let response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer aquí iria el access token :)',
                'Accept': 'application/json'
            }
        });
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}


// fetch(IOL_PORTFOLIO_URL, { //funcion con fetch
//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer aquí iría el token :)',
//         'Accept': 'application/json'
//     }
// })
//     .then(res => res.json())
//     .then(data => mostrarData(data))
//     .catch(err => console.error(err));