"use strict";
function osszesOszto(szam) {
    const osztok = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0)
            osztok.push(i);
    }
    return osztok;
}
function parosDarab(szamok) {
    return szamok.filter(szam => szam % 2 === 0).length;
}
function fuggvenyhivasPalindrom(fuggveny) {
    const szoveg = fuggveny().replace(/ /g, '').toLowerCase();
    return szoveg === szoveg.split('').reverse().join('');
}
