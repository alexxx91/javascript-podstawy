'use strict';

function iloczyn(parametr1, parametr2, parametr3) {
    
    var wynik = parametr1 * parametr2 * parametr3;
    
    return wynik;
}

var wynikGlobalny = iloczyn(3, 4, 5);

console.log(wynikGlobalny);