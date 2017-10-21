'usestrict'

var imiona = [ "Wojtek", "Krystian", "Łukasz"];

console.log(imiona/*[2]*/);

imiona[3] = "Piotrek";
console.log(imiona);

var ileElementow = imiona.push('Gerald');

console.log(imiona);

console.log(ileElementow);


var ostatniElement = imiona.pop();

console.log(imiona);

console.log (ostatniElement);

console.log('Ile elementow w tablicy:' + imiona.lenght);

console.log(imiona.join("-"));

imiona.reverse();
console.log(imiona);

imiona.sort();
console.log(imiona);