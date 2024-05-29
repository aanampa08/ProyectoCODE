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

    let inputContra = document.createElement("input");
    inputContra.type = "password";
    inputContra.name = "nuevo-contra";
    inputContra.id = "nuevo-contra"
    inputContra.placeholder = "Contraseña";
    inputContra.className = "sec-input";

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
    inputRegistro.id = "inputRegistro";
    inputRegistro.value = "Registrarse";
    inputRegistro.className = "btn-general";
    
    divBtnReg.append(inputRegistro)
    let avisoNombre=document.createElement("div");
    let avisoApellido=document.createElement("div");
    let avisoEmail=document.createElement("div");
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
    divSec.append(avisoEmail);
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
            avisoNombre.innerText="";
            inputNombre.classList.remove("error");
            
        }else{
            inputNombre.classList.add("error");
            avisoNombre.style.visibility="visible";
            avisoNombre.style.color="#FFED00";
            avisoNombre.innerText=(`'${inputNombre.placeholder}' admite unicamente letras.`);
        }
    });
    
    inputApellido.addEventListener("keypress",(e)=>{
        if(validarTexto(e)){
            avisoApellido.style.visibility="hidden";
            avisoApellido.innerText="";
            inputApellido.classList.remove("error");
        }else{
            inputApellido.classList.add("error");
            avisoApellido.style.visibility="visible";
            avisoApellido.style.color="#FFED00";
            avisoApellido.innerText=(`'${inputApellido.placeholder}' admite unicamente letras.`);
        }
    });

    inputEmail.addEventListener("keyup",()=>{
        if(expresiones.correo.test(inputEmail.value) || inputEmail.value == ""){
            avisoEmail.style.visibility="hidden";
            avisoEmail.innerText="";
            inputEmail.classList.remove("error");
        }else {
            inputEmail.classList.add("error");
            avisoEmail.style.visibility="visible";
            avisoEmail.style.color="#FFED00";
            avisoEmail.innerText=(`'${inputEmail.placeholder}'  necesita un "@" y un "."`);
        }
    });
    
    inputRegistro.addEventListener("click",(e)=>{
        e.preventDefault();
        if(inputNombre.value != "" && inputEmail.value != "" && inputContra.value !=""){
            avisoGeneral.style.visibility="hidden";
            mostrar_bienvenida(inputNombre.value);
        }
        else{
            avisoGeneral.style.visibility="visible";
            avisoGeneral.style.color="#FFED00";
            avisoGeneral.innerText="Por favor, evite dejar campos vacios.";
            if(inputNombre.value == ""){
                inputNombre.classList.add("error");
            } else {
                inputNombre.classList.remove("error");
            }
            if(inputApellido.value == ""){
                inputApellido.classList.add("error");
            } else {
                inputApellido.classList.remove("error");
            }
            if(inputEmail.value == ""){
                inputEmail.classList.add("error");
            } else {
                inputEmail.classList.remove("error");
            }
            if(inputContra.value == ""){
                inputContra.classList.add("error");
            } else {
                inputContra.classList.remove("error");
            }
        }
        
    });
}


const emailLogin = document.getElementById("emailLogin");
emailLogin.addEventListener("keyup",()=>{
    let avisoEmail = document.getElementById("avisoEmailLogin");
    if(expresiones.correo.test(emailLogin.value) || emailLogin.value == ""){
        avisoEmail.style.display="none";
        avisoEmail.innerText="";
        emailLogin.classList.remove("error");
    }else {
        emailLogin.classList.add("error");
        avisoEmail.style.display="block";
        avisoEmail.style.textAlign="left";
        avisoEmail.style.color="#FFED00";
        avisoEmail.innerText=(`'${emailLogin.placeholder}'  necesita un "@" y un "."`);
    }
});

const contraLogin = document.getElementById("clave");

const iniciarSesion = document.getElementById("iniciar-sesion").addEventListener("click",(e)=>{
    e.preventDefault();
    let avisoLogin = document.getElementById("avisoLogin");
        if(contraLogin.value != "" && emailLogin.value){
            avisoLogin.style.display="none";
            IngresoLogin(emailLogin.value);
        }
        else{
            avisoLogin.style.display="block";
            avisoLogin.style.color="#FFED00";
            avisoLogin.style.textAlign="left";
            avisoLogin.innerText="Por favor, evite dejar campos vacios.";
            if(contraLogin.value == ""){
                contraLogin.classList.add("error");
            } else {
                contraLogin.classList.remove("error");
            }
            if(emailLogin.value == ""){
                emailLogin.classList.add("error");
            } else {
                emailLogin.classList.remove("error");
            }
            
        }
    
});




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

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
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

function IngresoLogin(email) {
    cerrar_login();
    let seccionLoginAdentro = document.getElementById("sectionLogin");
    seccionLoginAdentro.innerHTML = `
            <div class="overlay">
            <section id="inicio-sesion">
            <div class="sec-sesion" >
              <a href="javascript:cerrar_ingresoLogin()" id="cerrarLogin"><img src="./img/close.png" alt="Cerrar" class="cerrarLogin"></a>
                <h4 style="padding: 25px 0; color: white">¡Bienvenid@ ${email}!</h4>
                
                
            </div>
            </section>
            </div>`;

    

}

function cerrar_ingresoLogin(){
    let seccionLoginAdentro = document.getElementById("sectionLogin");
    seccionLoginAdentro.innerHTML = ``;
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
                
                <input type="email" name="email" id="emailLoginP" placeholder="Email" class="sec-input">
                <div id="avisoEmailP"></div>
                <input type="password" name="clave" id="contraLoginP" placeholder="Contraseña" class="sec-input">
                <div class="sec-guardado">
                    <label class="estilos-check">
                        <input type="checkbox">
                        Recuerda
                    </label>
                    <input type="submit" id="recordar-contraseña" value="¿No recordas tu contraseña?">
                </div>
                <div id="avisoLoginP"></div>
                <input type="submit" id="iniciar-sesion-pop" value="Iniciar sesión" class="btn-general">
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

            const emailLoginP = document.getElementById("emailLoginP");
emailLoginP.addEventListener("keyup",()=>{
    let avisoEmailP = document.getElementById("avisoEmailP");
    if(expresiones.correo.test(emailLoginP.value) || emailLoginP.value == ""){
        avisoEmailP.style.display="none";
        avisoEmailP.innerText="";
        emailLoginP.classList.remove("error");
    }else {
        emailLoginP.classList.add("error");
        avisoEmailP.style.display="block";
        avisoEmailP.style.textAlign="left";
        avisoEmailP.style.color="#FFED00";
        avisoEmailP.innerText=(`'${emailLoginP.placeholder}' necesita un "@" y un "."`);
    }
});

const contraLoginP = document.getElementById("contraLoginP");

const iniciarSesionP = document.getElementById("iniciar-sesion-pop").addEventListener("click",(e)=>{
    e.preventDefault();
    let avisoLogin = document.getElementById("avisoLogin");
        if(contraLoginP.value != "" && emailLoginP.value){
            avisoLoginP.style.display="none";
            IngresoLogin(emailLogin.value);
        }
        else{
            avisoLoginP.style.display="block";
            avisoLoginP.style.color="#FFED00";
            avisoLoginP.style.textAlign="left";
            avisoLoginP.innerText="Por favor, evite dejar campos vacios.";
            if(contraLoginP.value == ""){
                contraLoginP.classList.add("error");
            } else {
                contraLoginP.classList.remove("error");
            }
            if(emailLoginP.value == ""){
                emailLoginP.classList.add("error");
            } else {
                emailLoginP.classList.remove("error");
            }
            
        }
    
});

           
}



function cerrar_login() {
    let seccionLogin = document.getElementById("sectionLogin");
    seccionLogin.innerHTML = ``;

}


