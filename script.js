function crearForm() {
    
    var formulario = document.createElement("form");
    var mostrar = document.createElement("div");

    var tituloName = document.createElement("label");
    var inputName = document.createElement("input");

    var tituloApellido = document.createElement("label");
    var inputApellido = document.createElement("input");

    var tituloDni = document.createElement("label");
    var inputDni = document.createElement("input");

    var tituloEmail = document.createElement("label");
    var inputEmail = document.createElement("input");

    var button = document.createElement("button");

    // añadir inputs y label al formulario
    formulario.appendChild(tituloName);
    formulario.appendChild(inputName);

    formulario.appendChild(tituloApellido);
    formulario.appendChild(inputApellido);

    formulario.appendChild(tituloDni);
    formulario.appendChild(inputDni);
  
    formulario.appendChild(tituloEmail);
    formulario.appendChild(inputEmail);
    
    formulario.appendChild(button);

    // Agregar texto al label
    tituloName.innerHTML ='<h3>Nombre</h3>';
    tituloApellido.innerHTML ='<h3>Apellido</h3>';
    tituloDni.innerHTML ='<h3>DNI</h3>';
    tituloEmail.innerHTML ='<h3>Email</h3>';
    button.innerHTML ='<h3>Validar</h3>';

    // Crear textos para el div mostrar
    var textName = document.createElement("p");
    var textApellido = document.createElement("p");
    var textDni = document.createElement("p");
    var textEmail = document.createElement("p");

     // añadir textos al div mostrar
     mostrar.appendChild(textName);
     mostrar.appendChild(textApellido);
     mostrar.appendChild(textDni);
     mostrar.appendChild(textEmail);
 
    // Agregar atributos a los inputs
    formulario.setAttribute('style', "width:25%; margin:auto; display:flex; flex-direction:column; justify-content:center;")

    mostrar.setAttribute('style', "width:25%; margin:auto; display:flex; flex-direction:column; justify-content:center;")

    inputName.setAttribute('type', "text");
    inputName.setAttribute('placeholder', "Nombre");
    inputName.setAttribute('id', "inputName");
    inputName.setAttribute('style', "box-shadow: #0000003d 0px 3px 4px; padding:5px; border-radius:7px; border-color:#d0d0f1;");    
    textName.setAttribute('id', "textName");

    inputApellido.setAttribute('type', "text");
    inputApellido.setAttribute('placeholder', "Apellido");
    inputApellido.setAttribute('id', "inputApellido");
    inputApellido.setAttribute('style', "box-shadow: #0000003d 0px 3px 4px; padding:5px; border-radius:7px; border-color:#e3e3f0;");
    textApellido.setAttribute('id', "textApellido");
    
    inputDni.setAttribute('type', "text");
    inputDni.setAttribute('placeholder', "DNI");
    inputDni.setAttribute('id', "inputDni");
    inputDni.setAttribute('style', "box-shadow: #0000003d 0px 3px 4px; padding:5px; border-radius:7px; border-color:#e3e3f0;");
    textDni.setAttribute('id', "textDni");

    
    inputEmail.setAttribute('type', "email");
    inputEmail.setAttribute('placeholder', "Email");
    inputEmail.setAttribute('id', "inputEmail");
    inputEmail.setAttribute('style', "box-shadow: #0000003d 0px 3px 5px; margin-bottom:10px; padding:5px; border-radius:7px; border-color:#e3e3f0;");
    textEmail.setAttribute('id', "textEmail");


    button.setAttribute('type', "button");
    button.setAttribute('id', "button");
    button.setAttribute('style', "box-shadow:#0000003d 0px 3px 8px;; color:white; width:80px; height:50px; margin:auto; padding:2px; border-radius:15px; border:none;background-color:#8d8df3;");

    document.body.appendChild(formulario);
    document.body.appendChild(mostrar);
}

crearForm();    

// funcion de las letras con ASCII

function esLetra(c) { 
    return c.charCodeAt() >= 'a'.charCodeAt() && c.charCodeAt() <= 'z'.charCodeAt() || c.charCodeAt() == ' '.charCodeAt() 
    || c.charCodeAt() >= 'A'.charCodeAt() && c.charCodeAt() <= 'Z'.charCodeAt();
    
}

// Validacion de nombre
function validarNombre() {
    var nombre = document.getElementById("inputName").value;
    var contador  = 0;

    for (let i = 0; i < nombre.length; i++) {
        if(esLetra(nombre[i])){
            contador++;
            textName.style.color="blue";
        }else{
            textName.style.color="red";
        }  
    }
    return contador == nombre.length;
}

// Validacion de apellido

function validarApellido() {
    var apellido = document.getElementById("inputApellido").value;
    var contador  = 0;

    for (let i = 0; i < apellido.length; i++) {
        if(esLetra(apellido[i])){
            contador++;
            textApellido.style.color="blue";
        }else{
            textApellido.style.color="red";
        }
    }
    return contador == apellido.length;
}


// validacion email

function tieneArroba() {
    var mail = document.getElementById("inputEmail").value;
    var cont = 0;
    const arroba = "@";
    var i = 1;
    if(!(mail[0] == arroba || mail[mail.length - 1] == arroba)){
        while (cont < 1 && i < mail.length) {
            console.log(mail[i].length-3);
            if (mail[i] == arroba) {
                cont++; 
            }
            i++; 
        }
    }

    return cont == 1;
}
    

function tienePunto() {
    var email = document.getElementById("inputEmail").value;
    var cont = 0;
    const punto = ".";
    var i = 1;
    if(!(email[0] == punto || email[email.length - 1] == punto)){
        while (cont < 1 && i < email.length) {
            if (email[i] == punto) {
                cont++;
            }
            i++; 
        }
    }
    return cont == 1;  
}

function validarEmail() {
    if (tieneArroba() === true && tienePunto() === true) {
        textEmail.style.color="blue";
    }else{
        textEmail.style.color="red"; 
    }
}

// validar DNI



// function validarDni() {
//     var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
 
//     do {
//        var numeroDni = document.getElementById("inputDni");
//     } while (isNaN(numeroDni) || numeroDni < 0 || numeroDni > 99999999);
//     do {
//         var letraDni = numeroDni%23;
//     } while ((letraDni < 'a' || letraDni > 'z') && (letraDni < 'A' || letraDni > 'Z'));

//         var letraAsignada = numeroDni & 23;
//     if (letras[letraAsignada] == letraDni.toUpperCase) {
//         textEmail.style.color="blue";
//     } else {
//         textEmail.style.color="red";
//     }
// }


function validarDni() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var numeroDni = document.getElementById("inputDni").value;

}







// mostrar los textos de los inputs
button.addEventListener("click", ()=>{
    textName.innerHTML = document.getElementById("inputName").value;
    textApellido.innerHTML = document.getElementById("inputApellido").value;
    textDni.innerHTML = document.getElementById("inputDni").value;
    textEmail.innerHTML = document.getElementById("inputEmail").value;
    validarNombre();
    validarApellido();
    validarEmail();
    validarDni();
    }
)



// Validar campos vacíos
button.addEventListener("click", ()=> {
    if(inputName.value === ""){
        textName.style.color="red";
        textName.innerHTML="Campo vacío, ingrese los datos";
    }
    if(inputApellido.value === ""){
        textApellido.style.color="red";
        textApellido.innerHTML="Campo vacío, ingrese los datos";

    }
    if(inputDni.value === ""){
        textDni.style.color="red";
        textDni.innerHTML="Campo vacío, ingrese los datos";

    }
    if(inputEmail.value === ""){
        textEmail.style.color="red";
        textEmail.innerHTML="Campo vacío, ingrese los datos";   
    }
}) 
