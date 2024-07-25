// Exercices Nathan

/** DIVISION *
 * ---------------------------- 
 * Écrire une fonction `safeDivide` qui prend deux nombres en entrée et retourne le résultat de leur division. Si le deuxième nombre est 0, la fonction doit retourner `"Erreur : Division par zéro"`.
 * Rappel : La division par zéro est indéfinie en mathématiques et en programmation, elle produit une erreur ou une valeur infinie.
 **/

console.log("-- DIVISION ---------------------------------------------------------");

function safeDivide(a, b) {
    if (b == 0) {
        console.log("Erreur: Division par zéro");
        return;
    }
    return a / b;
}

// Exemple d'utilisation
console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0));


// "Erreur : Division par zéro"


/** SUITE 
 * ---------------------------- 
 * Consigne : Écrire une fonction `fibonacci` qui prend un nombre `n` en entrée et retourne le `n`-ième nombre de la séquence de Fibonacci.
 *
 * Rappel :  La séquence de Fibonacci est une suite de nombres où chaque nombre est la somme des deux précédents, commençant par 0 et 1. Les premiers termes de la séquence sont 0, 1, 1, 2, 3, 5, 8, etc.
 */
console.log("-- SUITE DE FIBONACCI ---------------------------------------------------------");

function fibonacci(n) {

    // on initialise la suite avec 0
    let suiteFibo = [0];


    if (n == 0) {
        // si 0 alors 0
        return suiteFibo;
    }
    else if (n == 1) {
        // si 1 on rajoute 0 pour avoir 0 , 1
        suiteFibo.push(1);
        return suiteFibo;
    }
    else {
        // à partir de 2 on initialise à 0,1 puis on fait une boucle

        suiteFibo.push(1);
        let n_2 = 0;
        let n_1 = 1;
        let fibo = 0;

        for (let i = 2; i <= n; i++) {
            fibo = n_2 + n_1;
            suiteFibo.push(fibo);
            n_2 = n_1;
            n_1 = fibo;

        }
        return suiteFibo;
    }

}

// Exemple d'utilisation
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55


/** NOMBRE PREMIERS
 * ---------------------------- 
 * Écrire une fonction `isPrime` qui prend un nombre en entrée et retourne `true` si le nombre est un nombre premier et `false` sinon.
 * Un nombre premier est un nombre entier supérieur à 1 qui n'a pas d'autres diviseurs que 1 et lui-même (par exemple 2, 3, 5, 7).
*/
console.log("-- NOMBRES PREMIERS  ---------------------------------------------------------");

function isPrime(number) {


    if (number == 0) { return false; }
    if ((number == 1) || (number == 2)) { return true; }

    for (i = 2; i <= number; i++) {
        modulo = number % i;
        if (modulo == 0) {
            return false;
        }
        return true;
    }
}

// Exemple d'utilisation
console.log("0" + isPrime(0)); // true
console.log("1" + isPrime(1)); // true
console.log("2" + isPrime(2)); // true
console.log("5" + isPrime(5)); // true
console.log("7" + isPrime(7)); // false
console.log("10" + isPrime(10)); // false
console.log("34" + isPrime(34)); // false


if ((number % 2) == 0) {
    return true;
}
else {
    return false;
}
