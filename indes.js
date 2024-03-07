// les variables dont on a besoins
var sp, btn_start, btn_stop, t, ms, s, mn, h, jj;

// fonction pour initialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementsByClassName('btn_start');
    btn_stop = document.getElementsByClassName('btn_stop');
    t;
    ms = 0, s=0 , mn=0, h=0, jj=0;
    console.log("voici le sp: ",sp);
    console.log("voici le btn_start: ", btn_start);
    console.log("voici le btn_stop: ", btn_stop);
}

// initialization of the stopwatch         

function  udapte_chrono(){
    ms+=1;
    if (ms == 10) {
        ms = 1;
        s += 1;
    }
    if (s == 60) {
        s = 0;
        mn += 1;
    }
    if (mn == 60) {
        mn = 0;
        h += 1;    
    }
    if (mn == 60) {
        mn = 0;
        h += 1;
        
        
    }
    // insertions of span values&
// [0] permet de selectionneer le premier span
// [1] permet de selectionner le deuxieme span
    sp[0].innerHTML = jj + "jj";
    sp[1].innerHTML = h + "h" ;
    sp[2].innerHTML = mn + "mn"  ;
    sp[3].innerHTML =  s+ "s" ;
    sp[4].innerHTML = ms+ "ms" ;

}

// mettre en place la fonction du boutton start

function start() {
    // cette ligne de code execute la function update_chrono(
    //  toutes les 100 ms 
    t = setInterval(udapte_chrono , 100);
    btn_start.disabled  = true;
    console.log("start function");
    
}

// stoper le chronometre

function stop(){
     clearInterval(t); 
    //   suppression de l interval t que nous avions 
    btn_start.disabled = false ;
    
}

// Initailiser les valeurs du compteur
function reset() {
    clearInterval(t);
    btn_start.disabled = false;
    window.location.reload()
    
}
