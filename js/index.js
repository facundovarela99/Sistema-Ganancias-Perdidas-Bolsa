import { readdirSync, statSync } from "fs";
import { join } from "path";

function verificarTamanioArchivos(directorio) {
  try {
    // Leer todos los archivos del directorio
    const archivos = readdirSync(directorio);

    archivos.forEach((archivo) => {
      const rutaCompleta = join(directorio, archivo);
      const stats = statSync(rutaCompleta);

      if (stats.isFile()) {
        console.log(
          `Archivo: ${archivo} | Tamaño: ${stats.size} bytes (${(stats.size / 1024).toFixed(2)} KB)`
        );
      }
    });
  } catch (error) {
    console.error("Error al leer el directorio:", error.message);
  }
}

function verificarTamanioDirectorios(ruta){
    try{
        const directorios = readdirSync(ruta);
        
        directorios.forEach((directorio)=>{
            let tamaño_directorio = 0;
            const rutaCompleta = join(ruta, directorio);
            const stats = statSync(rutaCompleta);

            if (stats.isDirectory()){
                for (const elemento of readdirSync(rutaCompleta)){
                    const rutaElemento = join(rutaCompleta, elemento);
                    const statsElemento = statSync(rutaElemento);
                    tamaño_directorio += statsElemento.size;
                }
                console.log(`Directorio: ${directorio} | Tamaño: ${tamaño_directorio} bytes (${(tamaño_directorio / 1024).toFixed(2)} KB)`);
            }
        })
    } catch (error) {
    console.error("Error al leer el directorio:", error.message);
  }
}

// Ejemplo de uso
const rutaDirectorio = "C:\\laragon\\www\\osTicket-v1.17.6\\upload"; // Cambia por la ruta que quieras analizar
console.log('-------------ARCHIVOS-------------')
verificarTamanioArchivos(rutaDirectorio);
console.log("\n--------------------------------------------------\n");
console.log("-------------DIRECTORIOS-------------");
verificarTamanioDirectorios(rutaDirectorio);
