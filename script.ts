function osszesOszto(szam: number): number[] {
    const osztok: number[] = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) osztok.push(i);
    }
    return osztok;
}

function parosDarab(szamok: number[]): number {
    return szamok.filter(szam => szam % 2 === 0).length;
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    const szoveg = fuggveny().replace(/ /g, '').toLowerCase();
    return szoveg === szoveg.split('').reverse().join('');
}