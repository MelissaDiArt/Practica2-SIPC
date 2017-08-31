function comprobar() {

    document.getElementById('mipass').innerHTML = "";
    document.getElementById('email').innerHTML = "";

    var mail = document.getElementById('mail').value;
    var a = mail.indexOf('@');
    var ext = mail.lastIndexOf('.');

/*Comprobar arroba*/

    if(a < 1 || ext - a < 2 || mail.length - ext < 2 || ext == -1){
        document.getElementById('email').innerHTML = "Incorrect format";
        return false;
    }

    var pass = document.getElementById('pass').value;
    var mayus = 0;
    var num = 0;
/* Comprueba si tiene una mayuscula o un numero con el unicode*/

    for (var i = 0; i < pass.length; i++) {
        if(pass.charCodeAt(i) > 64 && pass.charCodeAt(i) < 91){
            mayus = 1;
        }else if(pass.charCodeAt(i) > 47 && pass.charCodeAt(i) < 57){
            num = 1;
        }
    }

    /*Debe tener almenos una mayuscula y un numero */

    if(!mayus){
        document.getElementById('mipass').innerHTML = "Must have at least an uppercase letter";
        return false;
    }
    if(!num){
        document.getElementById('mipass').innerHTML = "Must have at least one number";
        return false;
    }

    return true;
}
