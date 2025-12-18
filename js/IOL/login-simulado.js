const mainIndex = document.getElementById('mainIndex');

export function renderizarLogin(){
    const divFormularioLogin = document.createElement('div');
    divFormularioLogin.className = 'divFormularioLogin'
    divFormularioLogin.innerHTML = `
            <form action="" class="d-flex flex-column align-items-center" id="formularioLogin">
                <label for="inputEmail" style="font-size: 3rem;">E-mail</label>
                <input type="email" name="inputEmail" id="inputEmail" placeholder="Correo electrónico" required>
                <label for="inputPassword" style="font-size: 3rem;">Contraseña</label>
                <input type="password" name="inputPassword" id="inputPassword" placeholder="Contraseña" required>
                <button class="mt-5" type="submit" id="" style="font-size: 1.5rem;">Iniciar sesión</button>
            </form>
    `;
    mainIndex.innerHTML = divFormularioLogin.outerHTML;

}