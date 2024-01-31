


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

console.log(esEmail("j@hk@hj"));





function validarDNI() {

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var NumeroDni;
    var LetraDni;

    do {

        NumeroDni = prompt("ingrese el numero de dni");


    } while (isNaN(NumeroDni) || NumeroDni < 0 || NumeroDni > 99999999);
    do {
        LetraDni = prompt("Ingrese letra del DNI");
    } while ((LetraDni < 'a' || LetraDni > 'z') && (LetraDni < 'A' || LetraDni > 'Z'));


    var LetraAsignada = NumeroDni & 23;
    if (letras[LetraAsignada] == LetraDni.toUpperCase) {
        alert("la letra es correcta");

    } else {
        alert("letra incorrecta");
    }



}
validarDNI();



//RESTO	0	1	2	3	4	5	6	7	8	9	10	11
//LETRA	T	R	W	A	G	M	Y	F	P	D	X	B

//RESTO	12	13	14	15	16	17	18	19	20	21	22
//LETRA	N	J	Z	S	Q	V	H	L	C	K	E

//Por ejemplo, si el número del DNI es 12345678, dividido entre 23 da de resto 14, luego la letra sería la Z: 12345678Z.