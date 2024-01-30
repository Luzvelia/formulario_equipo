


/*function validarEmail(valor) {
    var email=[];
    for (let i = 0; i < valor.length; i++) {
        if (valor[i]==);
        
    }
}*/


function esEmail(mail) {
    var cont = 0;
    const arroba = "@";
    var i = 1;
    if(!(mail[0] == arroba || mail[mail.length - 1] == arroba) ){
        while (cont < 1 && i < mail.length) {
            if (mail[i] == arroba ) {
                cont++;
            }
            i++; 
        }
    }
    
    return cont == 1;

}

console.log(esEmail("j@h@khj"));