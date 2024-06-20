/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
console.log("1--------");

function konverteris_eur_dol(eurai) {
  let kursas = 1.07;
  return (eurai * kursas).toFixed(2);
}

let skaicius = [];
for (let i = 1; i <= 1; i++) {
  let atsitiktinis = Math.floor(Math.random() * 1000) + 1;
  skaicius.push(atsitiktinis);
}
console.log("Atsitiktinis skaičius 1 - 1000:  " + skaicius + "eurų.");
console.log(
  "Sukonvertavus kursu 1.07:  " + konverteris_eur_dol(skaicius) + "dolerių."
);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log("2--------");

function konverteris_dol_eur(doleriai) {
  santykis = 0.93;
  return (doleriai * santykis).toFixed(2);
}

let skaicius2 = [];
for (let i = 1; i <= 1; i++) {
  let atsitiktinis = Math.floor(Math.random() * 1000) + 1;
  skaicius2.push(atsitiktinis);
}
console.log("Atsitiktinis skaičius 1 - 1000:  " + skaicius2 + "dolerių.");
console.log(
  "Sukonvertavus kursu 0.93:  " + konverteris_eur_dol(skaicius) + "eurų."
);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log("3--------");

function BMI(ūgis, svoris) {
  let bmi = (svoris / ūgis ** 2).toFixed(2);
  if (bmi > 25) {
    return `jūsų ${bmi}, jūs turite viršsvorio`;
  } else if (bmi < 25 && bmi >= 18.5) {
    return `jūsų ${bmi}, o tai yra normalu `;
  } else {
    return `jūsų ${bmi}. Jūs turite per mažą svorį.`;
  }
}

console.log(BMI(1.8, 80));

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log("4--------");

function amzius(metai) {
  return `Jūsų amžius smulkiau: ${31536000 * metai} sekundžių, ${
    525600 * metai
  } minučių, ${8760 * metai} valanų, ${365 * metai}dienų.`;
}
console.log(amzius(2));

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log("5--------");

function konverteris_far_cels(farenheitas) {
  return (((farenheitas - 32) * 5) / 9).toFixed(2);
}
console.log(konverteris_far_cels(1) + " laipsnių pagal celsijų");

function konverteris_cels_far(celsijus) {
  return ((celsijus * 9) / 5 + 32).toFixed(2);
}
console.log(konverteris_cels_far(0) + " laipsnių pagal farenheitą");

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log("6--------");

let skaiciai = [];
for (i = 1; i <= 10; i++) {
  skaiciai.push(i);
}
console.log(skaiciai.join("-"));

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log("7--------");

let eilutes = 5;
for (let i = 1; i <= eilutes; i++) {
  let simbolis = "";
  for (let a = 1; a <= i; a++) {
    simbolis += "*";
  }
  console.log(simbolis);
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

console.log("8----nesugalvojau----");
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log("9--------");
let vardai = ["Tomas", "Dainius", "Paulius", "Jonas"];
console.log(vardai.join(","));
console.log(vardai.join("+"));

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log("10----nesugalvojau----");
let dRaides = ["A", "B", "C", "D", "E", "F", "G", "H", "M", "N", "O", "P"];
let mRaides = ["a", "b", "c", "d", "e", "f", "g", "h", "m", "n", "o", "p"];
let visiSkaiciai = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let simboliai = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
function passwordas() {
  
}
