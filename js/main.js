var carteCache = ["lundi", "lundi1", "mardi", "mardi1", "mercredi", "mercredi1", "jeudi", "jeudi1", "vendredi", "vendredi1", "samedi", "samedi1", "dimanche", "dimanche1"];

function shuffle(carteCache) {
    var j, x, i, k;
    for (i = carteCache.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = carteCache[i - 1];
        carteCache[i - 1] = carteCache[j];
        carteCache[j] = x;
    }

    for (k = 0 ; k < carteCache.length; k++) {
        var value = carteCache[k];
        document.getElementsByClassName('carte')[k].setAttribute("id", value);
    }
}


for (i=0; i<carteCache.length; i++) {
  document.getElementsByClassName('carte')[i].addEventListener("click", function () {showImage(this);});
}

function showImage(obj) {


  switch (obj.id) {
    case "lundi":
    document.getElementById("lundi").setAttribute("src", "./img/lundi.jpg");
    break;

    case "lundi1":
    document.getElementById("lundi1").setAttribute("src", "./img/lundi.jpg");
    break;

    case "mardi":
    document.getElementById("mardi").setAttribute("src", "./img/mardi.jpg");
    break;

    case "mardi1":
    document.getElementById("mardi1").setAttribute("src", "./img/mardi.jpg");
    break;

    case "mercredi":
    document.getElementById("mercredi").setAttribute("src", "./img/mercredi.jpg");
    break;

    case "mercredi1":
    document.getElementById("mercredi1").setAttribute("src", "./img/mercredi.jpg");
    break;

    case "jeudi":
    document.getElementById("jeudi").setAttribute("src", "./img/jeudi.jpg");
    break;

    case "jeudi1":
    document.getElementById("jeudi1").setAttribute("src", "./img/jeudi.jpg");
    break;

    case "vendredi":
    document.getElementById("vendredi").setAttribute("src", "./img/vendredi.jpg");
    break;

    case "vendredi1":
    document.getElementById("vendredi1").setAttribute("src", "./img/vendredi.jpg");
    break;

    case "samedi":
    document.getElementById("samedi").setAttribute("src", "./img/samedi.jpg");
    break;

    case "samedi1":
    document.getElementById("samedi1").setAttribute("src", "./img/samedi.jpg");
    break;

    case "dimanche":
    document.getElementById("dimanche").setAttribute("src", "./img/dimanche.jpg");
    break;

    case "dimanche1":
    document.getElementById("dimanche1").setAttribute("src", "./img/dimanche.jpg");
    break;

  }
}

créer une fonction avec une valeur vide de base par exemple check = "";
la lancer à chaque click
prendre la valeur des 3 premieres lettre de lid
SI check ="";
alors la remplacer par les 3 premieres lettres de lid
sinon
comparer la nouvelle valeur et lancienne
si les deux sont idem alors
point ++
sinon remettre src default
