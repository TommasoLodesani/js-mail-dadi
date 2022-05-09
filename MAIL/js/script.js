const myInput = document.querySelector("input");

const myButton = document.querySelector("button");

const myOutput = document.querySelector(".risultato");

const listaEmail = ["tommaso@gmail.com", "luca@gmail.com", "anna@gmail.com", "giulia@gmail.com"];

myButton.addEventListener("click",

    function () {

        let emailUtente = myInput.value;
        

        for(i = 0; i < listaEmail.length; i++){

            console.log(listaEmail[i]);

            if(emailUtente == listaEmail[i] ){

                emailUtente = true;

            } 
        }

        if (emailUtente == true){

            myOutput.innerHTML = "Benvenuto";
        } else {

            myOutput.innerHTML = "Sbagliato";
        }
        

    }

)