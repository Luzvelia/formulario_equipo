function crearForm() {
    
    var formulario = document.createElement("form");
    var mostrar = document.createElement("div");


    var tituloName = document.createElement("label");
    var inputName = document.createElement("input");
    var textName = document.createElement("p");

    var tituloApellido = document.createElement("label");
    var inputApellido = document.createElement("input");
    var textApellido = document.createElement("p");


    var tituloDni = document.createElement("label");
    var inputDni = document.createElement("input");
    var textDni = document.createElement("p");


    var tituloEmail = document.createElement("label");
    var inputEmail = document.createElement("input");
    var textEmail = document.createElement("p");


    var button = document.createElement("button");


    // añadir inputs y label al formulario
    formulario.appendChild(tituloName);
    formulario.appendChild(inputName);
    formulario.appendChild(textName);

    formulario.appendChild(tituloApellido);
    formulario.appendChild(inputApellido);
    formulario.appendChild(textApellido);

    formulario.appendChild(tituloDni);
    formulario.appendChild(inputDni);
    formulario.appendChild(textDni);

    formulario.appendChild(tituloEmail);
    formulario.appendChild(inputEmail);
    formulario.appendChild(textEmail);

    formulario.appendChild(button);


    // Agregar texto al label
    tituloName.innerHTML ='<h3>Nombre</h3>';
    tituloApellido.innerHTML ='<h3>Apellido</h3>';
    tituloDni.innerHTML ='<h3>DNI</h3>';
    tituloEmail.innerHTML ='<h3>Email</h3>';
    button.innerHTML ='<h3>Validar</h3>';


    // Agregar atributos a los inputs

    inputName.setAttribute('type', "text");
    inputName.setAttribute('placeholder', "Nombre");
    inputName.setAttribute('id', "inputName");
    textName.setAttribute('id', "textName");
    textName.setAttribute('text', "Los datos ingresados no son válidos");
    textName.setAttribute('style', "color:red;")

    
    inputApellido.setAttribute('type', "text");
    inputApellido.setAttribute('placeholder', "Apellido");
    inputApellido.setAttribute('id', "inputApellido");
    textApellido.setAttribute('id', "textApellido");
    textApellido.setAttribute('text', "Los datos ingresados no son válidos");
    textApellido.setAttribute('style', "color:red;")

    
    inputDni.setAttribute('type', "text");
    inputDni.setAttribute('placeholder', "DNI");
    inputDni.setAttribute('id', "inputDni");
    textDni.setAttribute('id', "textDni");
    textDni.setAttribute('text', "Los datos ingresados no son válidos");
    textDni.setAttribute('style', "color:red;")

    
    inputEmail.setAttribute('type', "email");
    inputEmail.setAttribute('placeholder', "Email");
    inputEmail.setAttribute('id', "inputEmail");
    textEmail.setAttribute('id', "textEmail");
    textEmail.setAttribute('text', "Los datos ingresados no son válidos");
    textEmail.setAttribute('style', "color:red;")



    button.setAttribute('type', "button");
    button.setAttribute('style', "width:10%;margin: 20px;padding: 5px;border-radius: 30%; background:#8d8df3;color:#fff;border:none 1px #000;");
    button.setAttribute('id', "button");


    // agregar estilos a los inputs


    document.body.appendChild(formulario);
    console.log(formulario);
 
}

crearForm();    




// Validar campos vacíos

button.addEventListener("click", ()=> {
    if(inputName.value.length == ""){
        document.getElementById("textName").innerHTML="El campo está vacío, por favor ingrese el dato solicitado";
    }
    if(inputApellido.value.length == ""){
        document.getElementById("textApellido").innerHTML="El campo está vacío, por favor ingrese el dato solicitado";

    }
    if(inputDni.value.length == ""){
        document.getElementById("textDni").innerHTML="El campo está vacío, por favor ingrese el dato solicitado";

    }
    if(inputEmail.value.length == ""){
        document.getElementById("textEmail").innerHTML="El campo está vacío, por favor ingrese el dato solicitado";

    }
}) 




function validarNombre() {
    var nombre = document.getElementById("inputName").value;
    var contador  = 0;

    for (let i = 0; i < nombre.length; i++) {
        if(esLetra(nombre[i])){
            contador++;
        }
    }
    console.log(contador);
    return contador == nombre.length;
}



function validarApellido() {
    var apellido = document.getElementById("inputApellido").value;
    var contador  = 0;

   

    for (let i = 0; i < apellido.length; i++) {
        if(esLetra(apellido[i])){
            contador++;
        }
    }
    console.log(contador);
    return contador == apellido.length;
}




function esLetra(c) { 
    return c.charCodeAt() >= 'a'.charCodeAt() && c.charCodeAt() <= 'z'.charCodeAt() || c.charCodeAt() == ' '.charCodeAt() 
    || c.charCodeAt() >= 'A'.charCodeAt() && c.charCodeAt() <= 'Z'.charCodeAt();
    
}


button.addEventListener("click", ()=>{

    if (validarNombre() == false) {
        document.getElementById("textName").innerHTML="error";
    }
   
    if (validarApellido() == false) {
        document.getElementById("textApellido").innerHTML="error";
    }
}
)


