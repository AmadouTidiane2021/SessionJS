// Math : contient des methodes permettant de realiser des opérarions sur les nombres
// Date : permet de manipuler des dates
// ...

console.log(Math.round(2.1)); // affiche 2
console.log(Math.round(2,3)); // affiche 8
console.log(Math.min(2, -1, 3, -5)); // affiche -5
console.log(Math.max(2, -1, 3, -5)); // affiche 3
console.log(Math.random()); // Affiche un nombre aléatoire
console.log(Math.floor(Math.random()* 10)); // affiche un entier entre 0 et 9
console.log(Math.sqrt(4)); // Affiche 2
console.log(Math.abs(4)); // Affiche 4

// Quelques operateurs

// typeof : pour obtenir le type de variable
// new : pour creer un objet en utilisant un constructeur
// this : pour designer l'objet courant 

// in : pour tester si un indice est dans le tableau, si une methode appartient à un objet

var tab = [2, 3, 5];
if (2 in tab) {
    console.log("oui"); //Affiche oui 
}

var perso = {nom : 'Wick', prenom : 'John'};

// Controle si Wick existe dans perso
Object.keys(perso).forEach(
    function(key){
    if (perso.nom == "Wick"){
        console.log('exists'); 
     }
});

var keys = Object.keys(perso);

for(key of keys){
    console.log (key + ' ' + perso[key]);
    
}

perso.nom === "Wick" ? console.log("Yes") : console.log("No");

// instanceof : retourne true si l'objet donné est specifié, false sinon 

var jour = new Date(2021, 04, 02);
if(jour instanceof Date)
console.log("oui");

// Une constante est un element qui ne peut pas changer de valeur

const PI = 3.1415;

//PascleCase : MonProjet 
//CameleCase : maMetode()

// Genere une erreur, impossibles de modifier les valeurs d'une constante
//PI= 5; 
//Affiche une erreur
//obj = {};

const obj ={
    nom:'Wick',
     prenom :'John'
};


// Cependant, l'instance suivant est correcte et ne leve pas d'exeption 
obj.nom = "Doe";
obj["prenom"] = "Denzel"
obj.age = 50;

console.log(obj);

const tab2 = [2, 3, 8];

// Genere une erreur, impossibles de modifier les valeurs d'une constante
//tab = [];

// Cependant, l'instance suivante est correcte et ne leve pas d'exeption 
tab[2] =1;
tab[9] = 9;

console.log(tab);

// On peut lancer une exception si un des parametres n’est pas de type number
function produit(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw "Les parametres doivent etre de type number";
    }
    return a * b;
}
 
// L’appel de la fonction doit etre entoure par un bloc try ... catch pour
// capturer et traiter l’eventuelle exception lancee
try {
    console.log(produit(2, "a")); // Affiche un Nan (Not a Number)
} catch (e) {
    console.error(e);
}
// Gerer la division par 0 en lancant une exception si le parametre n'est pas divisible par 0 
 function division(a, b) {
     if(b == 0)
     throw "la division par 0 n'est pas autorisée"
     return a / b;
 }
 try {
    console.log(division(2, 0)); // Affiche un Nan (Not a Number)
} catch (e) {
    console.error(e);
}



// Expressions Reguliers = REGX 

// permettre de verifier si des chaines de caractères respectent certaines formats
// email, mot de passe, numero de telephone,

// recherche d'une sous-chaine dans une chaine de caractères
// avec une Regex insensible à la casse

var str = "Bonjour tout le monde";
var pos = str.search(/Tout/i);

console.log(pos);


// Retourne -1 si la sous chaine n'exite pas
var pos = str.search(/c/i);

console.log(pos); // Affiche -1

// Cherche et retourne true si chaine 2 dans chaine 1 , false sinon 
var str = /AB/i;

var result = str.test("ababaabbaaab");

console.log(result);


// remplace la premiere occurence d'une sous-chaine
var chaine ="ababaabbaaab";

var txt = chaine.replace(/ab/, "c");
console.log(txt);

// remplace toutes occurence d'une sous-chaine
var chaine ="ababaabbaaab";
var txt = chaine.replace(/ab/g, "c");
console.log(txt);

// permet d'avoir un resultat sous forme d'objet
var str = /AA/i;
var resultat = str.exec(chaine);

console.log("chaine trouvée :" + resultat[0]);

console.log("Indice de la premiere occurence :" + resultat.index);

console.log("texte complet :" + resultat.input);

// Retourne un tableau contenant toutes les occurences
var str = /AA/gi;
var resultat = chaine.match(str);
console.log(resultat);

// a? : 0 ou 1 a 
// a* : 0 ou plusieurs
var str = /ba?c/;
console.log(str.test("bac")); // Affiche true pas

console.log(str.test("baac")); // Affiche false 

// La valeur doit contenir 4 chiffres obligatoirement
var p = "2345";
var str = /^([0-9]){4}$/;
if(p.match(str)){
    console.log("yes")
}else{
    console.log("no");
}


// Le pseudo doit contenir des lettres, des chiffres, de tirets du bas doit faire min 6 caractères
// et maximun 20
var p = "Jean_Bapton06";
var str = /^([0-9a-zA-Z_]){6,20}$/;
if(p.match(str)){
    console.log("yes")
}else{
    console.log("no");
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}

var res = ValidateEmail("mysite@test.com");
console.log(res);








 