// utente sceglie un numero

const myButton = document.querySelector("button");
console.log(myButton);

const myOutput = document.querySelector(".risultato");

const myNumeroUtente = document.querySelector(".numero-utente");

const myNumeroPc = document.querySelector(".numero-pc");




myButton.addEventListener("click",
    function () {

        let numeroUser = Math.floor(Math.random() * 6) + 1;
        console.log(numeroUser);
        myNumeroUtente.append(numeroUser);

        let numeroPc = Math.floor(Math.random() * 6) + 1;
        console.log(numeroPc);
        myNumeroPc.append(numeroPc);

        if (numeroUser > numeroPc) {
            myOutput.append("Hai vinto");

        } else if (numeroUser === numeroPc) {
            myOutput.append("Riprova! Avete fatto lo stesso numero!");
        } else if (numeroUser < numeroPc){
            myOutput.append("Hai perso");

        }

    }

)


