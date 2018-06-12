(function(){
    "use strict";

    var formClient = document.querySelector("#form-client");
    var email = document.querySelector("#form-client #ac-email");
    var emailVerif = document.querySelector("#form-client #ac-email-verif");
    var btnEnvoyer = document.querySelector("#form-client [type=submit]");

    formClient.addEventListener("input",validationFormClient);
    email.addEventListener("input",verifEmail);
    emailVerif.addEventListener("input",verifEmail);

    function verifEmail(event){
        if(email.value !== emailVerif.value){
            emailVerif.setCustomValidity("L'adresse e-mail ne correspond pas à la première adresse saisie.");
        } else {
            emailVerif.setCustomValidity("");
        }
    }
    function validationFormClient(){
        btnEnvoyer.disabled = !formClient.checkValidity();
    }

    verifEmail();
    validationFormClient();

// ------ Vue JS -------------

var clients = [{
    nom: "Ainslie",
    prenom: "Ben"
},{
    nom: "Scheidt",
    prenom: "Robert"    
},{
    nom: "Leblanc",
    prenom: "Juste"
}];

var tableClients = new Vue({
    el: "#clients",
    data: {
        titre: "Liste des clients",
        clients: clients
    },
    methods: {
        ajouterClient: function (event) {
          clients.push({
              nom: event.target.nom.value,
              prenom: event.target.prenom.value
          });
          console.log(event.target.nom.value);
        }
    }
});


})();