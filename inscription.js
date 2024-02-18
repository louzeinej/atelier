
function validerDateOfBirth() {
    
    var dateNaissance = document.getElementById("dateNaissance").value;
    
   
    var dateNaissanceObj = new Date(dateNaissance);
    
    
    var dateAujourdhui = new Date();
    
   
    if (dateNaissanceObj > dateAujourdhui) {
      
        alert("La date de naissance ne peut pas être dans le futur !");
    }
}


document.getElementById("boutonValider").addEventListener("click", validerDateOfBirth);



document.addEventListener("DOMContentLoaded", function() {
    var formulaire = document.getElementById("formulaireInscription");
    
    formulaire.addEventListener("submit", function(event) {
       
        event.preventDefault();
        
        
        var nom = document.getElementById("nom").value;
        var nomErreur = document.getElementById("nomErreur");
        if (!nom.match(/^[A-Za-z]+$/) || nom.length < 1) {
            nomErreur.textContent = "Le nom doit contenir uniquement des lettres et avoir au moins 1 caractère.";
            nomErreur.style.color = "red";
        } else {
            nomErreur.textContent = "";
        }
        
        var prenom = document.getElementById("prenom").value;
        var prenomErreur = document.getElementById("prenomErreur");
        if (prenom.length < 1) {
            prenomErreur.textContent = "Le prénom doit contenir au moins 1 caractère.";
            prenomErreur.style.color = "red";
        } else {
            prenomErreur.textContent = "";
        }
        
       
        var telephone = document.getElementById("telephone").value;
        var telephoneErreur = document.getElementById("telephoneErreur");
        if (!telephone.match(/^\d{8}$/)) {
            telephoneErreur.textContent = "Le numéro de téléphone doit contenir exactement 8 chiffres.";
            telephoneErreur.style.color = "red";
        } else {
            telephoneErreur.textContent = "";
        }
        
       
        var dateNaissance = document.getElementById("dateNaissance").value;
        var dateNaissanceObj = new Date(dateNaissance);
        var dateAujourdhui = new Date();
        var dateNaissanceErreur = document.getElementById("dateNaissanceErreur");
        if (isNaN(dateNaissanceObj) || dateNaissanceObj >= dateAujourdhui) {
            dateNaissanceErreur.textContent = "La date de naissance doit être une date valide et inférieure à la date d'aujourd'hui.";
            dateNaissanceErreur.style.color = "red";
        } else {
            dateNaissanceErreur.textContent = "";
        }
        
        
        var password = document.getElementById("password").value;
        var passwordErreur = document.getElementById("passwordErreur");
        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
            passwordErreur.textContent = "Le mot de passe doit contenir au moins 8 caractères, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule.";
            passwordErreur.style.color = "red";
        } else {
            passwordErreur.textContent = "";
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var formulaire = document.getElementById("formulaireInscription");
    
    formulaire.addEventListener("submit", function(event) {
        event.preventDefault();
        
        var nom = document.getElementById("nom").value;
        var nomErreur = document.getElementById("nomErreur");
        if (!nom.match(/^[A-Za-z]+$/) || nom.length < 1) {
            nomErreur.textContent = "Le nom doit contenir uniquement des lettres et avoir au moins 1 caractère.";
            nomErreur.style.color = "red";
        } else {
            nomErreur.textContent = "Succès !";
            nomErreur.style.color = "green";
        }
        
        var prenom = document.getElementById("prenom").value;
        var prenomErreur = document.getElementById("prenomErreur");
        if (prenom.length < 1) {
            prenomErreur.textContent = "Le prénom doit contenir au moins 1 caractère.";
            prenomErreur.style.color = "red";
        } else {
            prenomErreur.textContent = "Succès !";
            prenomErreur.style.color = "green";
        }
        
        var telephone = document.getElementById("telephone").value;
        var telephoneErreur = document.getElementById("telephoneErreur");
        if (!telephone.match(/^\d{8}$/)) {
            telephoneErreur.textContent = "Le numéro de téléphone doit contenir exactement 8 chiffres.";
            telephoneErreur.style.color = "red";
        } else {
            telephoneErreur.textContent = "Succès !";
            telephoneErreur.style.color = "green";
        }
        
        var dateNaissance = document.getElementById("dateNaissance").value;
        var dateNaissanceObj = new Date(dateNaissance);
        var dateAujourdhui = new Date();
        var dateNaissanceErreur = document.getElementById("dateNaissanceErreur");
        if (isNaN(dateNaissanceObj) || dateNaissanceObj >= dateAujourdhui) {
            dateNaissanceErreur.textContent = "La date de naissance doit être une date valide et inférieure à la date d'aujourd'hui.";
            dateNaissanceErreur.style.color = "red";
        } else {
            dateNaissanceErreur.textContent = "Succès !";
            dateNaissanceErreur.style.color = "green";
        }
        
        var password = document.getElementById("password").value;
        var passwordErreur = document.getElementById("passwordErreur");
        if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
            passwordErreur.textContent = "Le mot de passe doit contenir au moins 8 caractères, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule.";
            passwordErreur.style.color = "red";
        } else {
            passwordErreur.textContent = "Succès !";
            passwordErreur.style.color = "green";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");

    emailInput.addEventListener("keyup", function() {
        var email = emailInput.value;
        var emailErreur = document.getElementById("emailErreur");

        var emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.includes("@esprit.tn");

        if (!emailValide) {
            emailErreur.textContent = "L'email doit être valide et contenir '@esprit.tn'.";
            emailErreur.style.color = "red";
        } else {
            emailErreur.textContent = "Email valide.";
            emailErreur.style.color = "green";
        }
    });
});
