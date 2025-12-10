import dotenv from "dotenv";
dotenv.config({ path: "../../.env" }); //si se quita hay que ejecutar el script desde la raíz del proyecto 


// async function loginIOL(username, password) { //Función para simular el login y obtener el primer par de tokens (propenso a llevar a un bloqueo de cuenta si se usa repetidamente)
//     const response = await fetch("https://api.invertironline.com/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: `grant_type=password&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
//     });

//     if (!response.ok) {
//         console.error("Error:", response.status, response.statusText);
//         const errorText = await response.text();
//         console.error("Detalle:", errorText);
//         return null;
//     }

//     const data = await response.json();
//     console.log("Access token:", data.access_token);
//     console.log("Refresh token:", data.refresh_token);

//     return data; // Devuelve el objeto con los tokens
// }

// // // Ejemplo de uso:
const username = process.env.IOL_usuario;
const password = process.env.IOL_contrasenia;
//
// loginIOL(username, password);

async function loginIOL(usuario, contrasena) { //Nueva función con mayor contenido en el header para simular un login mas seguro y legítimo
  const url = "https://api.invertironline.com/token";

  // Datos del body en formato x-www-form-urlencoded
  const params = new URLSearchParams();
  params.append("username", usuario);
  params.append("password", contrasena);
  params.append("grant_type", "password");

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Cabecera opcional para simular un cliente legítimo
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
                      "AppleWebKit/537.36 (KHTML, like Gecko) " +
                      "Chrome/120.0 Safari/537.36"
      },
      body: params.toString()
    });

    if (!response.ok) {
      throw new Error(`Error en login: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // data contiene access_token, refresh_token, expires_in, etc.
    return data;

  } catch (error) {
    console.error("Fallo en la autenticación:", error.message);
    throw error;
  }
}

// Ejemplo de uso
(async () => {
  try {
    const tokens = await loginIOL(username, password);
    console.log("\nAccess Token: ", tokens.access_token);
    console.log("\nRefresh Token: ", tokens.refresh_token);
  } catch (err) {
    console.error("No se pudo iniciar sesión:", err);
  }
})();


