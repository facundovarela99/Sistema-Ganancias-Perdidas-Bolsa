export async function fetchData(endpoint) {
    try {
        let response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ...`,
                'Accept': 'application/json'
            }
        });
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}