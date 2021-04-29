//Exo1
// let bonjour = () => {
//     console.log("Bonjour");
// }

// bonjour()

//Exo2
// function calcul() {
//     console.log(5+5);
// }

// calcul();

//Exo3
// let prenom = (nom) => {
//     console.log("Bonjour " + nom);
// }

// prenom("Cactus");

//Exo4
// function theType(obj1, obj2, obj3) {
//     let box = [obj1, obj2, obj3];
//     box.forEach(e => {
//         console.log(typeof e);
//     });
// }

// theType(10, "hello", true);

//Exo Logique
//Ex1
// let guessingGame = () => {
//     let result = Math.round(Math.random()*20);
//     let num = prompt("Rentrez un chiffre: ");
//     i = 0;
    
//     while (i<4 && num != result) {
//         if (Math.abs(result - num) > 5) {
//             console.log("Froid");
//         } else if (Math.abs(result - num) == 1) {
//             console.log("Brulant");
//         } else if (Math.abs(result - num) == 2) {
//             console.log("Chaud");
//         } else {
//             console.log("Tiède");
//         }
//         num = prompt("Rentrez un chiffre: ")
//         i++
//     }
//     if (num == result) {
//         console.log("Vous avez gagné");
//     } else {
//         console.log("Vous avez perdu");
//     }
// }

// guessingGame()

//Ex2
let tableau = ["audeiJDBJks", 17, true, "JJkkwijJDnwk", 19, false];

let opposites = (tab) => {
    tab.forEach((e,i) => {
        if (typeof e == "string") {
            tab[i] = e.charAt(0).toUpperCase()+e.substr(1).toLowerCase();
        } else if (typeof e == "number") {
            tab[i] = Math.pow(e, 2);
        } else if (typeof e == "boolean") {
            if (e == true) {
                tab[i] = false;
            } else {
                tab[i] = true;
            }
        } else {

            tab[i] = "weird value"
        }
    });
    console.log(tab);
}

opposites(tableau);

//Ex3
let moinMoyenne = [];
let moyenne = [];
let plusMoyenne = [];

let classement = (prenom, salaire) => {
    if (salaire > 1800) {
        plusMoyenne.push(prenom);
    } else if (salaire < 1800) {
        moinMoyenne.push(prenom);
    } else {
        moyenne.push(prenom);
    }
}

//Ex4
let concert = [];
function concertEnter(prenom, age) {
    if (age >= 18 && concert.length < 7) {
        concert.push(prenom.charAt(0).toUpperCase()+prenom.substr(1).toLowerCase());
    }
}

concertEnter("Sam", 27);
console.log(concert);