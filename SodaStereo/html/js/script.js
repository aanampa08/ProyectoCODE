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
    let form_registro = document.createElement("form");
    form_registro.id="form-registro";
    form_registro.className = "overlay";
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
    
    /////-----------------------------------------------------------------------------
    let inputRegistro = document.createElement("input");

    inputRegistro.type = "submit";
    inputRegistro.value = "Registrarse";
    inputRegistro.className = "btn-general";
    
    divBtnReg.append(inputRegistro)
    let avisoNombre=document.createElement("div");
    let avisoApellido=document.createElement("div");
    let avisoGeneral=document.createElement("div");
    //////-----------------------------------------------------------------------------
    //agregamos el contenido al div
    divSec.append(divCerrar);
    divSec.append(h3);
    divSec.append(divInfoUser);
    divSec.append(inputNombre);
    divSec.append(avisoNombre);
    divSec.append(inputApellido);
    divSec.append(avisoApellido);
    divSec.append(inputEmail);
    divSec.append(inputContra);
    divSec.append(select);
    divSec.append(label);
    
    divSec.append(avisoGeneral);
    divSec.append(divBtnReg);

    //agregamos todo el contenido del div al section

    form_registro.append(divSec);
    sectionRegistro.append(form_registro);

    //validacion de nombre y apellido
    inputNombre.addEventListener("keypress",(e)=>{
        if(validarTexto(e)){
            avisoNombre.style.visibility="hidden";
        }else{
            avisoNombre.style.visibility="visible";
            avisoNombre.style.color="#FFED00";
            avisoNombre.innerText=(`'${inputNombre.placeholder}' admite unicamente letras.`);
        }
    });
    inputApellido.addEventListener("keypress",(e)=>{
        if(validarTexto(e)){
            avisoApellido.style.visibility="hidden";
        }else{
            avisoApellido.style.visibility="visible";
            avisoApellido.style.color="#FFED00";
            avisoApellido.innerText=(`'${inputApellido.placeholder}' admite unicamente letras.`);
        }
    });
    
    inputRegistro.addEventListener("click",()=>{
        if(inputNombre.value != "" && inputEmail.value != "" && inputContra.value !=""){
            avisoGeneral.style.visibility="hidden";
            mostrar_bienvenida(inputNombre.value);
        }
        else{
            avisoGeneral.style.visibility="visible";
            avisoGeneral.style.color="#FFED00";
            avisoGeneral.innerText="Por favor, evite dejar campos vacios.";

        }
        
    });
    inputRegistro.addEventListener("click",()=>{
        if(inputNombre.value != "" && inputEmail.value != "" && inputContra.value !=""){
            avisoGeneral.style.visibility="hidden";
            mostrar_bienvenida(inputNombre.value);
        }
        else{
            avisoGeneral.style.visibility="visible";
            avisoGeneral.style.color="#FFED00";
            avisoGeneral.innerText="Por favor, evite dejar campos vacios.";

        }
        
    });
}

function validarTexto(event){
    resultado=true;
    console.log(event.key);
    var patron=/^[a-zA-Z\s]*$/;
    if(!patron.test(event.key)){
        event.preventDefault();
        resultado=false;
    }
    return resultado;
}




function cerrar_registro() {
    document.getElementById("sectionRegistro").innerHTML = "";
    let aRegistrar = document.getElementById("aRegistrar");
    aRegistrar.classList.remove("not-active");

}



//---------------------------------------------------------------------------
function mostrar_bienvenida(user) {

    const containerOverlay = document.querySelector(".overlay")

    let divRegistro = document.getElementById("divRegistro");
    divRegistro.remove();
    const bienvenida = document.createElement("div");
    bienvenida.setAttribute("id", "containerBienvenida");

    bienvenida.setAttribute("class", "confirmRegistroPop");


    let divCerrar = document.createElement("div");
    let aImg = document.createElement("a");
    aImg.setAttribute("href", "javascript:cerrar_registro()");
    let img = document.createElement("img");
    img.id = "cerrar";
    img.src = "./img/close.png";
    aImg.append(img);

    divCerrar.append(aImg);
    divCerrar.append(aImg);
    bienvenida.append(divCerrar);

    let h4 = document.createElement("h4");
    h4.innerText = `¡Felicidades ${user} !`;
    let divCheck=document.createElement("div");
    let imgCheck=document.createElement("img");
    imgCheck.src="./img/check.png";
    divCheck.append(imgCheck);
    let p=document.createElement("p");
    p.innerText="Tu registro se ha completado con éxito!";
    bienvenida.append(h4);
    bienvenida.append(divCheck);
    bienvenida.append(p);
    containerOverlay.append(bienvenida);

}

let hamburguesa = document.getElementById("menuHamburguesa");
let loginBTN = document.getElementById("login-button");
const loginTexto = document.createTextNode("Iniciar sesión");
let lista = [];
let menuActivo = false;


let tamañoVentana = window.innerWidth;
if (tamañoVentana <= 608) {
    loginBTN.append(loginTexto);

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


