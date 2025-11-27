import { fetchData } from "./resolverEndpoint.js";
import { mostrarDataEstadoCuenta } from "./estadoCuenta.js";
import { mostrarDataActivos } from "./activos.js";

const IOL_PORTFOLIO_ACTIVOS_URL = 'https://api.invertironline.com/api/v2/portafolio/argentina';
const IOL_ESTADO_CUENTA_URL = 'https://api.invertironline.com/api/v2/estadocuenta?';

fetchData(IOL_ESTADO_CUENTA_URL).then(data => mostrarDataEstadoCuenta(data));
fetchData(IOL_PORTFOLIO_ACTIVOS_URL).then(data => mostrarDataActivos(data));