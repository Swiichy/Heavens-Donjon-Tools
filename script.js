function random_item(firstDj) {
    return firstDj[Math.floor(Math.random() * firstDj.length)];
}

function random_items(secondDj) {
    return secondDj[Math.floor(Math.random() * secondDj.length)];
}

let firstDj = [
    "Le Goulet du Rasboul",
    "Bibliothèque du Maître Corbac​",
    "Donjon des Rats de Bonta",
    "Donjon des Rats de Brakmar",
    "Bambusaie de Damadrya",
    "Atelier du Tanukouï San",
    "Tombe du Shogun Tofugawa",
    "Fabrique de foux d'artifice",
    "Dojo du Vent",
    "Vallée de la Dame des eaux",
    "Le Miausolée du Pounicheur​",
    "Antre du Blop Multicolore Royal",
    "Le Labyrinthe du Minotoror",
    "La Serre du Royalmouth",
    "Repaire des Pandikaze",
    "Tofulailler Royal",
    "Antre du Crocabulia​",
    "Repaire de Skeunk",
    "Mégalithe de Fraktale",
    "Donjon des Kitsunes",
    "Volière de la Haute Truche",
    "Caverne d'El Piko",
    "Ring du Capitaine Ekarlatte",
    "Donjon des Firefoux",
    "Clairière du Chêne Mou",
    "Laboratoire du Tynril",
    "Excavation du Mansot Royal",
    "L'Epave du Grolandais Violent",
    "Donjon du Rats du Château d'Amakna",
    "Galerie du Phossile"
];

let secondDj = [
    "Canopée du Kimbo​",
    "Salle du Minotot",
    "Hypogée de l'Obsidiantre​",
    "Grotte de Kanigroula​",
    "Plateau de Ush",
    "Tengu Givrefoux​",
    "Le Boyau du Père Ver",
    "Horologium de XLII​",
    "Antre du Korriandre",
    "La Grotte du Bworker",
    "Temple du Grand Ougah",
    "Cave du Toxoliath​",
    "Fuji Givrefoux",
    "Donjon de La Mine de Sakaï",
    "Cavernes du Kolosso",
    "Antichambre des Gloursons",
    "Pyramide d'Ombre",
    "Le Camp du Comte Razof​",
];

const item = document.getElementById('item');
const oneItem = document.querySelector('.one-item');
const secondItem = document.querySelector('.second-item');
const lowDj = document.querySelectorAll('.lowdj');
const listLowDj = document.querySelectorAll('.list-lowdj');
const hightdj = document.querySelectorAll('.hightdj')
const listHightDj = document.querySelectorAll('.list-hightdj');



const oneAleatoire = () => {
    oneItem.innerHTML = random_item(firstDj);
}

const secondAleatoire = () => {
    secondItem.innerHTML = random_items(secondDj);
}

const aleatoire = () => {
    for (let i = 0; i < lowDj.length; i++) {
        lowDj[i].innerHTML = random_item(firstDj);
        for (let i = 0; i < listLowDj.length; i++) {
            listLowDj[i].innerHTML = lowDj[i].textContent;
        }
    }
}

const aleatoireTwo = () => {
    for (let i = 0; i < hightdj.length; i++) {
        hightdj[i].innerHTML = random_items(secondDj);
        for (let i = 0; i < listHightDj.length; i++) {
            listHightDj[i].innerHTML = hightdj[i].textContent;
        }
    }
}

