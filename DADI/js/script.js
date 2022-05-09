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
        myNumeroUtente.innerHTML = `${numeroUser}` ;

        let numeroPc = Math.floor(Math.random() * 6) + 1;
        console.log(numeroPc);
        myNumeroPc.innerHTML = `${numeroPc}` ;

        if (numeroUser > numeroPc) {
            myOutput.innerHTML = `Hai vinto`;

        } else if (numeroUser === numeroPc) {
            myOutput.innerHTML = `Riprova avete fatto lo stesso numero!`;
           
        } else if (numeroUser < numeroPc){
            myOutput.innerHTML = `Hai perso`;

        }

    }

)


