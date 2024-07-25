// stocker de l'information


function displayAge() {
    // récupérer info
    const age = document.getElementById("age").value;

    // traitement
    const textAge = "Vous avez <i> " + age + " <i> ans.";

    // addichage
    document.getElementById("textAge").innerHTML = textAge;

}