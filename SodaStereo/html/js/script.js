const vecPaises = new Array(
    "Argentina"
    , "Bolivia"
    , "Brasil"
    , "Chile"
    , "Colombia"
    , "Ecuador"
    , "Guyana"
    , "Perú"
    , "Surinam"
    , "Uruguay"
    , "Venezuela"
    , "Bahamas"
    , "Barbados"
    , "Canadá"
    , "Cuba"
    , "Dominica"
    , "Granda"
    , "Jamaica"
    , "Estados Unidos"
    , "México"
    , "Panamá"
);

function mostrar_registro() {

    cerrar_login();
    let aRegistrar = document.getElementById("aRegistrar");
    aRegistrar.classList.add("not-active");
    let sectionRegistro = document.getElementById("sectionRegistro");
    sectionRegistro.style.display = "flex";

    //CREAMOS CONTENIDO
    let divContenedor = document.createElement("form");
    divContenedor.className = "overlay";
    let divSec = document.createElement("div");
    divSec.id = "divRegistro";
    divSec.setAttribute("class", "sec-sesion sec-registro");

    let divCerrar = document.createElement("div");
    let aImg = document.createElement("a");
    aImg.setAttribute("href", "javascript:cerrar_registro()");

    let img = document.createElement("img");
    img.id = "cerrar";
    img.src = "./img/close.png";
    aImg.append(img);

    divCerrar.append(aImg);

    let h3 = document.createElement("h3");
    h3.innerText = "Registro";

    let divInfoUser = document.createElement("div");
    divInfoUser.setAttribute("class", "info-user");

    let inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.name = "nombre";
    inputNombre.id = "nombre"
    inputNombre.placeholder = "Nombre";
    inputNombre.className = "info-reg";
    inputNombre.required = true;

    let inputApellido = document.createElement("input");
    inputApellido.type = "text";
    inputApellido.name = "apellido";
    inputApellido.id = "apellido"
    inputApellido.placeholder = "Apellido";
    inputApellido.className = "info-reg";


    let inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.name = "nuevo-email";
    inputEmail.id = "nuevo-email"
    inputEmail.placeholder = "Email";
    inputEmail.className = "sec-input";
    inputEmail.required= true;

    let inputContra = document.createElement("input");
    inputContra.type = "text";
    inputContra.name = "nuevo-contra";
    inputContra.id = "nuevo-contra"
    inputContra.placeholder = "Contraseña";
    inputContra.className = "sec-input";
    inputContra.required= true;

    let select = document.createElement("select");
    select.name = "Paises";
    select.id = "Paises";
    select.className = "sec-input";
    let optionMain = document.createElement("option");
    optionMain.innerText = "Seleccione un país"
    select.append(optionMain);
    for (let i = 0; i < vecPaises.length; i++) {
        let option = document.createElement("option");
        option.value = vecPaises[i];
        option.innerText = vecPaises[i];
        select.append(option);
    }

    let inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";

    let label = document.createElement("label");
    label.innerText = "Deseo recibir novedades al correo electrónico";
    label.className = "estilos-check";




    label.append(inputCheck);



    let divBtnReg = document.createElement("div");
    divBtnReg.className = "btn-reg";


    ////-----------------------------------------------------------------------------
    let aviso=document.createElement("div");
    /////-----------------------------------------------------------------------------
    let inputRegistro = document.createElement("input");

    inputRegistro.type = "submit";
    inputRegistro.value = "Registrarse";
    inputRegistro.className = "btn-general";
    
    divBtnReg.appendChild(inputRegistro)

    //inputRegistro.addEventListener("submit", validate);
    //////-----------------------------------------------------------------------------
    //agregamos el contenido al div
    divSec.append(divCerrar);
    divSec.append(h3);
    divSec.append(divInfoUser);
    divSec.append(inputNombre);
    divSec.append(inputApellido);
    divSec.append(inputEmail);
    divSec.append(inputContra);
    divSec.append(select);
    divSec.append(label);
    divSec.append(aviso);
    divSec.append(divBtnReg);

    //agregamos todo el contenido del div al section

    divContenedor.append(divSec);
    sectionRegistro.append(divContenedor);

    //validacion de nombre y apellido
    inputNombre.addEventListener("change",(e)=>{
        resultado=validarTexto(e.target.value);
        informarError(aviso,resultado,inputNombre,inputRegistro);
    });
    inputApellido.addEventListener("change",(e)=>{
        resultado=validarTexto(e.target.value);
        informarError(aviso,resultado,inputApellido,inputRegistro);
    });

}
function informarError(aviso,resultado,tag,inputRegistro){
    if(resultado==true){
        inputRegistro.classList.add("btn-general");
        inputRegistro.classList.remove("btnDisabled");
        tag.style.color="white";
        aviso.style.visibility="hidden";
    }
    else{
        inputRegistro.disabled=true;
        inputRegistro.classList.add("btnDisabled");
        inputRegistro.classList.remove("btn-general");
        tag.style.color="#FFED00";
        aviso.style.visibility="visible";
        aviso.style.color="#FFED00";
        aviso.innerText=(`'${tag.placeholder}' admite unicamente letras.`);
    }
}

function validarTexto(texto){
    resultado=false;
    var patron=/^[a-zA-Z\s]*$/;
    if(!texto.search(patron)){
        resultado=true;
    }
    return resultado;
}




function cerrar_registro() {
    document.getElementById("sectionRegistro").innerHTML = "";
    let aRegistrar = document.getElementById("aRegistrar");
    aRegistrar.classList.remove("not-active");

}



//---------------------------------------------------------------------------
function mostrar_bienvenida() {

    const containerOverlay = document.querySelector(".overlay")

    let divRegistro = document.getElementById("divRegistro");
    divRegistro.remove();
    const bienvenida = document.createElement("div")
    bienvenida.setAttribute("id", "containerBienvenida")
    bienvenida.setAttribute("class", "sec-sesion sec-registro");


    let divCerrar = document.createElement("div");
    let aImg = document.createElement("a");
    aImg.setAttribute("href", "javascript:cerrar_registro()");
    let img = document.createElement("img");
    img.id = "cerrar";
    img.src = "./img/close.png";
    aImg.append(img);

    divCerrar.append(aImg);
    divCerrar.appendChild(aImg)
    bienvenida.appendChild(divCerrar)

    let h3 = document.createElement("h3");
    h3.innerText = "👋 ¡Bienvenido tu registro se ha completado con éxito! 😎";
    bienvenida.appendChild(h3)

    containerOverlay.appendChild(bienvenida);

}

let hamburguesa = document.getElementById("menuHamburguesa");
let loginBTN = document.getElementById("login-button");
const loginTexto = document.createTextNode("Iniciar sesión");
let lista = [];
let menuActivo = false;


let tamañoVentana = window.innerWidth;
if (tamañoVentana <= 608) {
    loginBTN.appendChild(loginTexto);

    loginBTN.addEventListener("click", abrirLogin);
    hamburguesa.addEventListener("click", function () {

        if (menuActivo) {
            hamburguesa.style.backgroundImage = "url('../img/menu.png')";
            document.getElementById("menu").style.visibility = "hidden";
            cerrar_login();
            document.body.style.overflow = 'auto';

        } else {
            hamburguesa.style.backgroundImage = "url('../img/close.png')";
            document.getElementById("menu").style.visibility = "visible"

            document.body.style.overflow = 'hidden';
        }

        menuActivo = !menuActivo;


    });




    for (let i = 0; i < 4; i++) {
        lista[i] = document.getElementById(`lista${i}`);
        lista[i].addEventListener("click", function () {
            document.getElementById("menu").style.visibility = "hidden";
            hamburguesa.style.backgroundImage = "url('../img/menu.png')";
            menuActivo = false;
            cerrar_login();
            document.body.style.overflow = 'auto';
        });
    }


} else {
    document.getElementById("menu").style.visibility = "visible";
}





function abrirLogin() {

    let seccionLogin = document.getElementById("sectionLogin");
    seccionLogin.innerHTML = `
            <div class="overlay">
            <section id="inicio-sesion">
            <form class="sec-sesion">
              <a href="javascript:cerrar_login()" id="cerrarLogin"><img src="./img/close.png" alt="Cerrar" class="cerrarLogin"></a>
                <h3>Iniciar sesión</h3>
                
                <input type="email" name="email" id="email" placeholder="Email" class="sec-input">
                <input type="password" name="clave" id="clave" placeholder="Contraseña" class="sec-input">
                <div class="sec-guardado">
                    <label class="estilos-check">
                        <input type="checkbox">
                        Recuerda
                    </label>
                    <input type="submit" id="recordar-contraseña" value="¿No recordas tu contraseña?">
                </div>
                <input type="submit" id="iniciar-sesion" value="Iniciar sesión" class="btn-general">
                <div class="registrate">
                    <label for="registro">
                      ¿No tenes cuenta?
                      
                      
                      <a href="javascript:mostrar_registro()" id="aRegistrar">Registrarse</a>
                      
                    </label>
                    
                </div>
                <fieldset>
                    <legend>o inicia con</legend>
                    <div class="btns-sesion">
                        <!-- poner emoji dentro del boton -->
                        <input type="submit" value="Cuenta de Google" class="btn-sesion">
                        <input type="submit" value="Cuenta de Facebook" class="btn-sesion">
                    </div>
                </fieldset>
            </form>
            </section>
            </div>`;


}



function cerrar_login() {
    let seccionLogin = document.getElementById("sectionLogin");
    seccionLogin.innerHTML = ``;

}


