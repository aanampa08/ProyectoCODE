AOS.init({
  duration: 1200,
})

const vecPaises= new Array(
    "Argentina"
    ,"Bolivia"
    ,"Brasil"
    ,"Chile"
    ,"Colombia"
    ,"Ecuador"
    ,"Guyana"
    ,"Perú"
    ,"Surinam"
    ,"Uruguay"
    ,"Venezuela"
    ,"Bahamas"
    ,"Barbados"
    ,"Canadá"
    ,"Cuba"
    ,"Dominica"
    ,"Granda"
    ,"Jamaica"
    ,"Estados Unidos"
    ,"México"
    ,"Panamá"
);

function mostrar_registro(){
    let aRegistrar=document.getElementById("aRegistrar");
    aRegistrar.classList.add("not-active");
    let sectionRegistro= document.getElementById("sectionRegistro");
    sectionRegistro.style.display="flex";

    //CREAMOS CONTENIDO
    let divContenedor= document.createElement("div");
    divContenedor.className="overlay";
    let divSec= document.createElement("div");
    divSec.id="divRegistro";
    divSec.setAttribute("class","sec-sesion sec-registro");

    let divCerrar= document.createElement("div");
    let aImg= document.createElement("a");
    aImg.setAttribute("href","javascript:cerrar_registro()");

    let img= document.createElement("img");
    img.id="cerrar";
    img.src="./img/cerca.png";
    aImg.append(img);

    divCerrar.append(aImg);

    let h3= document.createElement("h3");
    h3.innerText="Registro";

    let divInfoUser= document.createElement("div");
    divInfoUser.setAttribute("class","info-user");

    let inputNombre=document.createElement("input");
    inputNombre.type="text";
    inputNombre.name="nombre";
    inputNombre.id="nombre"
    inputNombre.placeholder="Nombre";
    inputNombre.className="info-reg";
    inputNombre.required;
    
    let inputApellido=document.createElement("input");
    inputApellido.type="text";
    inputApellido.name="apellido";
    inputApellido.id="apellido"
    inputApellido.placeholder="Apellido";
    inputApellido.className="info-reg";


    let inputEmail=document.createElement("input");
    inputEmail.type="email";
    inputEmail.name="nuevo-email";
    inputEmail.id="nuevo-email"
    inputEmail.placeholder="Email";
    inputEmail.className="sec-input";
    inputEmail.required;

    let inputContra=document.createElement("input");
    inputContra.type="text";
    inputContra.name="nuevo-contra";
    inputContra.id="nuevo-contra"
    inputContra.placeholder="Contraseña";
    inputContra.className="sec-input";
    inputContra.required;

    let select=document.createElement("select");
    select.name="Paises";
    select.id="Paises";
    select.className="sec-input";
    let optionMain=document.createElement("option");
    optionMain.innerText="Seleccione un país"
    select.append(optionMain);
    for(let i=0; i < vecPaises.length; i++){
        let option=document.createElement("option");
        option.value=vecPaises[i];
        option.innerText=vecPaises[i];
        select.append(option);
    }

    let label=document.createElement("label");
    label.className="estilos-check";
    label.innerText="Deseo recibir novedades al correo electrónico";

    let inputCheck=document.createElement("input");
    inputCheck.type="checkbox";
    
    label.append(inputCheck);



    let divBtnReg= document.createElement("div");
    divBtnReg.className="btn-reg";
/////-----------------------------------------------------------------------------
    let inputRegistro= document.createElement("input");
    let ancla= document.createElement("a");
    ancla.setAttribute("href","javascript:mostrar_bienvenida()");
    inputRegistro.type="submit";
    inputRegistro.value="Registrarse";
    inputRegistro.className="btn-general";
    ancla.appendChild(inputRegistro)

    divBtnReg.append(ancla);
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
    divSec.append(divBtnReg);

    //agregamos todo el contenido del div al section
    
    divContenedor.append(divSec);
    sectionRegistro.append(divContenedor);
    
}



function cerrar_registro(){
    document.getElementById("sectionRegistro").innerHTML="";
    let aRegistrar=document.getElementById("aRegistrar");
    aRegistrar.classList.remove("not-active");

}


//---------------------------------------------------------------------------
function mostrar_bienvenida(){

    const containerOverlay=document.querySelector(".overlay")
    
    let divRegistro=document.getElementById("divRegistro");
     divRegistro.remove();
    const bienvenida=document.createElement("div")
    bienvenida.setAttribute("id" , "containerBienvenida")
    bienvenida.setAttribute("class","sec-sesion sec-registro");
    

    let divCerrar= document.createElement("div");
    let aImg= document.createElement("a");
    aImg.setAttribute("href","javascript:cerrar_registro()");
    let img= document.createElement("img");
    img.id="cerrar";
    img.src="./img/cerca.png";
    aImg.append(img);

    divCerrar.append(aImg);
    divCerrar.appendChild(aImg)
    bienvenida.appendChild(divCerrar)
    
    let h3= document.createElement("h3");
    h3.innerText="👋 ¡Bienvenido tu registro se ha completado con éxito! 😎";
    bienvenida.appendChild(h3)

    containerOverlay.appendChild(bienvenida);
    
}

