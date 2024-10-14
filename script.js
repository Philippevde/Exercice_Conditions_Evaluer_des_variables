// Declare and define three variables using a numerical value

const a = 1;
const b = 2;
const c = 1;

// * If the three variables are equal, display "The three variables are the same" in the console

if (a === b && b === c) {
    console.log("Les trois variables sont identiques");
}

// * If only two of the variables are equal, display "Two of the variables are the same" in the console

else if (a === b || a === c || b === c) {
    console.log("Deux des variables sont identiques");
}

// * If the variables are all different display "all variables are different" in the console

else {
    console.log("Toutes les variables sont différentes");
}
