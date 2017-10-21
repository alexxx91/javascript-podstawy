'use script'

/*Pętla for*/

for (var i = 10; i > 0; i--) {
    console.log(i);
}

/*Pętla fo each*/

var imiona = ['Wojtek', 'Krystian', 'Zenek'];

imiona.forEach(function (element, index) {
    console.log('Element z Indexem: ' + index + " ma wartość " +
        element);
});

/*pętla while*/

var it = 0;
while (it < 10) {
    console.log("It:" + it);
    it++;
}

/*Pętla do while*/

var j = 0;
do {
    console.log("Pętla do...while" + j);
    j++;
} while (j < 10);


/*Przerwanie break*/

var a = 0;
while (a < 10) {
    console.log('break: ' + a);
    a++;
    if (a == 5) {
        break;
    }
}

/*Przerwanie - continue*/


for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log('Continue: ' + i);
}

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        if (j == 2) {
            break;
        }
        console.log('i = ' + i + ', j= ' + j);
    }
}