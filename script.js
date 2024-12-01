//Les variables dont on a besoins
let sp, btn_start, btn_stop, t, ms, s, mn, h;

//Fonction pour initialiser les variables qua,nd la pages se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s=0 , mn=0,h=0 ;
}
//Mettre en place le compteur

function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1;
        s+=1
    }
    if(s == 60){
        s=0;
        mn+=1
    }
    if(mn == 60){
        mn = 0;
        h+= 1;
    }
    //Insertion des valeurs dans les spans 
    //[0] permet de selectionner le premier span
    //[1]                        le 2eme span ect ...
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// Mettre en place la fontion du bouton start

function start(){
    // Cette ligne de code execute la funtion update_chrono()
    // Tout les 100 ms
    t = setInterval(update_chrono,100);
    btn_start.disabled = true;
}

// stoper le chronometre

function stop(){
    clearInterval(t); // Suppression de l'interval t que nous avions créer
    btn_start.disabled = false;
}

// Initialiser les valeurs du compteur
function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    // Inserer ces nouvelles caleur dans les spans
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}