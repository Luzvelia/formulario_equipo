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

    // 


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

    inputName.setAttribute('type', "text");
    inputName.setAttribute('placeholder', "Nombre");
    inputName.setAttribute('id', "inputName");
    textName.setAttribute('id', "textName");

    
    inputApellido.setAttribute('type', "text");
    inputApellido.setAttribute('placeholder', "Apellido");
    inputApellido.setAttribute('id', "inputApellido");
    textApellido.setAttribute('id', "textApellido");
    
    inputDni.setAttribute('type', "text");
    inputDni.setAttribute('placeholder', "DNI");
    inputDni.setAttribute('id', "inputDni");
    textDni.setAttribute('id', "textDni");

    
    inputEmail.setAttribute('type', "email");
    inputEmail.setAttribute('placeholder', "Email");
    inputEmail.setAttribute('id', "inputEmail");
    textEmail.setAttribute('id', "textEmail");


    button.setAttribute('type', "button");
    button.setAttribute('style', "width:10%;margin: 20px;padding: 5px;border-radius: 30%; background:#8d8df3;color:#fff;border:none 1px #000;");
    button.setAttribute('id', "button");


    document.body.appendChild(formulario);
    document.body.appendChild(mostrar);
    console.log(formulario);
    console.log(mostrar);
}

crearForm();    


// Validar campos vacíos
button.addEventListener("click", ()=> {
    if(inputName.value.length == ""){
        document.getElementById("textName").innerHTML="El campo Nombre está vacío, por favor ingrese el dato solicitado";
    }
    if(inputApellido.value.length == ""){
        document.getElementById("textApellido").innerHTML="El campo Apellido está vacío, por favor ingrese el dato solicitado";

    }
    if(inputDni.value.length == ""){
        document.getElementById("textDni").innerHTML="El campo DNI está vacío, por favor ingrese el dato solicitado";

    }
    if(inputEmail.value.length == ""){
        document.getElementById("textEmail").innerHTML="El campo Email está vacío, por favor ingrese el dato solicitado";

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
        } else{
            
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
    
    textName.innerHTML = document.getElementById("inputName").value;
    textApellido.innerHTML = document.getElementById("inputApellido").value;
    textDni.innerHTML = document.getElementById("inputDni").value;
    textEmail.innerHTML = document.getElementById("inputEmail").value;



    if (textName.innerHTML === true){
        textName.innerHTML.setAttribute('style', "color:blue;")

    } else{
        textName.innerHTML.setAttribute('style', "color:red;")

    }


}
)


