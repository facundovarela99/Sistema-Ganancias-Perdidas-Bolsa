import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const usu = process.env.IOL_usuario;
const pass = process.env.IOL_contrasenia;
const refreshToken = process.env.IOL_REFRESH_TOKEN;
const accessToken = process.env.IOL_REFRESH_TOKEN;

console.log("Usuario:", usu);
console.log("Access Token:", accessToken);