function fun(){

    // Tableau (array)
    // Une variable pourvant avoir simultanément un ensemble de valeurs
    // La première valeur du tableau est d'indice 0

    var tab = [2, 3, 5];

    // Recupère la taille du tableau
    console.log(tab.length);

    //Affiche le 1er élément du tableau 
    console.log(tab[0]);

    //Ajoute un élement
    tab.push(7);
    // ou
    tab[tab.length]=8;

    //Affiche le tableau
    console.log(tab);


    for(var i= 0; i< tab.length; i++);
            console.log(tab[i]);


    // 
    for (var elt of tab){
        console.log(elt);
    }

    /*
        Opérations sur les tableaux

        - push() : ajoute un élément passé en paramètre du tableau 

        - pop() : supprime le dernier élément du tableau 
        
        - shift() : supprime le premier élément du tableau
        
        - reverse() : inverse l'ordre des éléments du tableau
        
        - sort() : trie le tableau

        - splice() : permet d'extraire , ajouter ou supprimer  un ou plusieurs elements (selon les parametres)
        
        - slice() : permet d'extraire un sous tableau a partir d'un tableau d'origine

        - include() : retourne true si la valeur passée en parametre existe dans le tableau

        - index() : retourne la position de l'élément passé en parametre, -1 sinon

        - fill() : permet d'initialiser, ou modifier des valeurs d'un tableau ou une partie

        - unshift() : permet d'ajouter un ou plusieurs éléments au début d'un tableau
    
    */

        var sports = ["foot", "tennis","rugby","basket", "volley"];

        // var tab = sports.splice(2, 1, "basket", "petanque");

        // 
    for (var elt of sports){
        console.log(elt);
    }


        console.log(tab);

        var tab = sports.slice(1,3);

        console.log(tab);

        var tab = new Array(3).fill(0);

        console.log(tab);

        var tab = [0, 1, 2, 3, 4, 5, 6, 7,8];

        tab.fill(9, 2,5);

        console.log(tab);

    tab.unshift(9);

    console.log(tab);

    // Ecrire un programme JavaScript pour calculer la somme et le produit d'un tableau d'entiers
    // var tot = 0;
    // for (var i=0; i < tab_cout.length;i++) {
    //  tot += Number(tab_cout[i]);
    // // // }

    // var array = [1, 2, 3, 4, 5, 6];

    // s = 0;

    // P = 1;



    // for (var i = 0; i < array.length; i++) {

    //     s += array[i];

    //     p *= array[i];

    // }
    // console.log('Sum : '+ s + ' Product :' + p);

    // .forEach() : Parcourir un tableaux
    // .map() : appliquer une fonction a un tableaux
    // .filter() : filtrer les elements d'un tableau selon un critere sous la forme d'une fontion anonyme ou flechée
    // .reduce() : reduire tous les elements d'un tableau en un seul selon un regle definie sous la forme d'une fontion anonyme 
    // ou flechée

    var tab = [2, 3, 5];
    tab.map(x => x + 3) 
       .filter(x => x > 5)
       .forEach(
           function(a){
               console.log(a - 3);
           }
       );

    // Affiche 3, 5

    var somme = tab.map(x => x + 3) 
        .filter(x => x > 5)
        .reduce(
            function(sum, elem){
                return sum + elem;
        });

    // Affiche 14
    console.log(somme);
}

    
fun();

// Functions 


// ES5 -ESMASCRAPT V5
function somme(a, b){
    return console.log(a + b);
}

somme(1, 3);

// ES6 

const addition = (a, b)  => a + b;

var res = addition(1, 3);

console.log(res);

x = 10;
{
    var x = 2;
}

//x = 2;
// on va pouvoir se servir de x

{
    let x = 2
}
//console.log(x);
//x = 10;
// pas possible de se servir de x

let somme2 = new Function("a","b","return a + b");

let resultat = somme2(1, 5);

console.log(resultat);

function somme3(){
    result = 0;
    for(var i =0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(somme3(2, 4,8));
console.log(somme3(2,3));

// Créez une fonction qui prend un tableau en parametre contenant uniquement des nombres et
// renvoie le premier élément.

let array = [1, 2, 3, 4, 5, 6];

function f2(arr) {
    return arr[0];
}

//const f2 = (arr) => arr[0];

var r = f2(array);
console.log(r);

// Créez une fonction qui prend l'âge et retourne l'âge en jours.
// Ecrivez une fonction qui prend un nombre entier de minutes et retourne la conversion
// en secondes.
