const myInput = document.querySelector("input");

const myButton = document.querySelector("button");

const myOutput = document.querySelector(".risultato");

const listaEmail = ["tommaso@gmail.com", "luca@gmail.com", "anna@gmail.com", "giulia@gmail.com"];

let mail = false;

myButton.addEventListener("click",

    function () {

        let emailUtente = myInput.value;
        

        for(i = 0; i < listaEmail.length; i++){

            console.log(listaEmail[i]);

            if(emailUtente == listaEmail[i] ){

               mail = true;

            } 
        }

        if (mail == true){

            myOutput.innerHTML = "Benvenuto";
        } else {

            myOutput.innerHTML = "Sbagliato";
        }
        
    }

)