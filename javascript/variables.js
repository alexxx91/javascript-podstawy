"use strict";

var imie="Alex";
var wzrost=181;
var wiek=29;
var nazwiskoAlexa="Korach";

console.log(imie);
console.log(wzrost);
console.log(wiek);
//console.log(wiekAlexa)

function wyswietlZmienna() {
    var imie = "Karolina";
    console.log(imie);
}

var wyswietlWiek = function () {
    console.log(wiek)
}

wyswietlZmienna();
wyswietlWiek();

function mnozenie(parametr1, parametr2) {
    var wynik = parametr1 * parametr2;
    console.log('Wynik: ' + wynik);
    
    return wynik;
//    console.log('test'); nie zadziała
}
mnozenie(5,6);
mnozenie(4,10);

var wynikMnozenia = mnozenie(3, 5);
console.log('wynik mnozenia:' + wynikMnozenia);

