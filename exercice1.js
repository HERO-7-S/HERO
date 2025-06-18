
// exercice 1 //

function verifierAge() {
  const age = parseInt(document.getElementById("ageEntré").value);
  const message = document.getElementById("message");

  if (isNaN(age)) {
    message.textContent = "Veuillez entrer votre âge.";
  } else if (age < 18) {
    message.textContent = "Vous êtes mineur.";
  } else {
    message.textContent = "Vous êtes majeur.";
  }
}





window.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("btnVerifier");

  bouton.addEventListener("click", function () {
    const valeur = parseInt(document.getElementById("nombreEntré").value);
    const resultat = document.getElementById("resultat");

    if (isNaN(valeur)) {
      resultat.textContent = "Veuillez entrer un nombre valide.";
    } else if (valeur % 2 === 0) {
      resultat.textContent = "Le nombre est pair.";
    } else {
      resultat.textContent = "Le nombre est impair.";
    }
  });
});





window.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("btnAfficher");

  bouton.addEventListener("click", function () {
    const mois = parseInt(document.getElementById("moisInput").value);
    const affichage = document.getElementById("affichageMois");

    const nomsMois = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    if (isNaN(mois) || mois < 1 || mois > 12) {
      affichage.textContent = "Veuillez entrer un nombre entre 1 et 12.";
    } else {
      affichage.textContent = "Le mois est : " + nomsMois[mois - 1];
    }
  });
});





        