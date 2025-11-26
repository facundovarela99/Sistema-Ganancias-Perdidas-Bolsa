require('dotenv').config();

const client_id = process.env.IOL_CLIENT_ID;
const client_secret = process.env.IOL_CLIENT_SECRET;
const token = process.env.IOL_TOKEN;

console.log("Client ID:", client_id);
console.log("Token:", token);