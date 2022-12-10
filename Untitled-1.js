//javascript 
var perso1 = document.getElementById("Perso1img");
var perso2 = document.getElementById("Perso2img");
var perso3 = document.getElementById("Perso3img");
var perso4 = document.getElementById("Perso4img");
var pvPerso1 = document.getElementById("A_HP");
var pvPerso2 = document.getElementById("B_HP");
var pvPerso3 = document.getElementById("C_HP");
var pvPerso4 = document.getElementById("D_HP");
var dialogue = document.getElementById("Text");
var monstre1 = document.getElementById("Monstre1img");
var PvMonstre1 = document.getElementById("D_HP");
var monstre2 = document.getElementById("Monstre2img");
var PvMonstre2 =  document.getElementById("E_HP");
var monstre3 = document.getElementById("Monstre3img");
var PvMonstre3 =  document.getElementById("F_HP");
var ActionsHTML = document.getElementsByClassName("actions")[0];
var bouttonAttaque = document.getElementById("Attaque");
var bouttonDefense = document.getElementById("Defense");
var bouttonAttaqueSpe = document.getElementById("Attaque_Speciale");

var Monstre1PV = 100
var Monstre1ATK= 10
var Monstre2PV = 100
var Monstre2ATK=5
var Monstre3PV = 100
var Monstre3ATK =10
var Perso1PV = 100
var Perso1ATK = 20
var Perso2PV = 100
var Perso2ATK = 25
var Perso3PV = 100
var Perso3ATK = 15
var Perso4PV = 100
var Perso4ATK = 20
defenceperso1 = false;
defenceperso2 = false;
defenceperso3 = false;
defenceperso4 = false;

// Attaque personnage 1

perso1.onclick = function() {
    dialogue.innerHTML = "Actions de  personnage 1";
    bouttonAttaque.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV  - Perso1ATK
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML = Perso1ATK + " de dégâts  !<br> Sélectionnez un personnage";
           
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - Perso1ATK
            PvMonstre2.innerHTML =  Monstre2PV + "/100 PV ";
            dialogue.innerHTML = Perso1ATK + " de dégâts !<br> Sélectionnez un personnage";
           
        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - Perso1ATK
            PvMonstre3.innerHTML =  Monstre3PV + "/100PV ";
            dialogue.innerHTML = Perso1ATK + " de dégâts !<br> Sélectionnez un personnage";
           
        }
        perso1.onclick = "none";
        
    }
    
}

// Attaque personnage 2

perso2.onclick = function() {
    dialogue.innerHTML = "Actions du personnage 2";
    bouttonAttaque.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV - Perso2ATK
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML = Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - Perso2ATK
            PvMonstre2.innerHTML = Monstre2PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";
        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - Perso2ATK
            PvMonstre3.innerHTML = Monstre3PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";

        }
            perso2.onclick = "none";
        
    }

}

// Attaque personnage 3

perso3.onclick = function() {
    dialogue.innerHTML = "Actions du personnage 3";
    bouttonAttaque.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV - Perso3ATK
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML =  + Perso3ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - Perso3ATK
            PvMonstre2.innerHTML = Monstre2PV + "/100 PV </h2>";
            dialogue.innerHTML =  + Perso3ATK + " de dégâts !<br> Sélectionnez un personnage";
        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - Perso3ATK
            PvMonstre3.innerHTML = Monstre3PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso3ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
            perso3.onclick = "none";
        
    }

}


// Attaque personnage 4

perso4.onclick = function() {
    dialogue.innerHTML = "Actions du personnage 2";
    bouttonAttaque.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV - Perso4ATK
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML =  + Perso4ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - Perso4ATK
            PvMonstre2.innerHTML = Monstre2PV + "/100 PV </h2>";
            dialogue.innerHTML =  + Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";
        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - Perso4ATK
            PvMonstre3.innerHTML = Monstre3PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso4ATK + " de dégâts !<br> Sélectionnez un personnage";

        }
            perso4.onclick = "none";
        
    }

}

//bouton défendre
function boutonDefendre() {
    afficheAction.innerHTML = "Vous déployez votre bouclier et ne vous pernneez pas de degat ." ;
    //activation de la défense
    defencePerso1=true;
    defencePerso2=true;
    defenceperso3=true;
    defencePerso4=true;
  }
  

//Attaque speciale personnage 1


perso1.onclick = function() {
    console.log("le perso a bien ete selectionner ")
    
    dialogue.innerHTML = "Actions de  personnage 1";
    ActionsHTML.style.visibility = "visible";
    bouttonAttaqueSpe.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV  - (Perso1ATK + 15)
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML = Perso1ATK + " de dégâts  !<br> Sélectionnez un personnage";
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - (Perso1ATK + 15)
            PvMonstre2.innerHTML =  Monstre2PV + "/100 PV ";
            dialogue.innerHTML = Perso1ATK + " de dégâts !<br> Sélectionnez un personnage";
        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - (Perso1ATK + 15)
            PvMonstre3.innerHTML =  Monstre3PV + "/100PV ";
            dialogue.innerHTML = Perso1ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
        perso1.onclick = "none";
        
    }
    
}



// Attaque speciale personnage 2

perso2.onclick = function() {
    dialogue.innerHTML = "attaque speciale du personnage 2";
    bouttonAttaqueSpe.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV - (Perso2ATK + 5)
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML = Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - (Perso2ATK + 5)
            PvMonstre2.innerHTML = Monstre2PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";

        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - (Perso2ATK + 5)
            PvMonstre3.innerHTML = Monstre3PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
            perso2.onclick = "none";
        
    }

}

// Attaque speciale personnage 3

perso3.onclick = function() {
    dialogue.innerHTML = "Actions du personnage 3";
    bouttonAttaqueSpe.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV - (Perso3ATK + 10)
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML =  + Perso3ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - (Perso3ATK + 10)
            PvMonstre2.innerHTML = Monstre2PV + "/100 PV </h2>";
            dialogue.innerHTML =  + Perso3ATK + " de dégâts !<br> Sélectionnez un personnage";
        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - (Perso3ATK + 10)
            PvMonstre3.innerHTML = Monstre3PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso3ATK + " de dégâts !<br> Sélectionnez un personnage";
        }

            perso3.onclick = "none";
        
    }

}


// Attaque speciale personnage 4

perso4.onclick = function() {
    dialogue.innerHTML = "Actions du personnage 2";
    bouttonAttaqueSpe.onclick = function() {
        
        dialogue.innerHTML = "Quelle ennemi veut tu attaquer";
        monstre1.onclick = function() {
            Monstre1PV = Monstre1PV - (Perso4ATK + 20 )
            PvMonstre1.innerHTML = Monstre1PV + "/100 PV";
            dialogue.innerHTML =  + Perso4ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
           
        monstre2.onclick = function() {
            Monstre2PV = Monstre2PV - (Perso4ATK + 20 )
            PvMonstre2.innerHTML = Monstre2PV + "/100 PV </h2>";
            dialogue.innerHTML =  + Perso2ATK + " de dégâts !<br> Sélectionnez un personnage";
        }

        monstre3.onclick = function() {
            Monstre3PV = Monstre3PV - (Perso4ATK + 20 )
            PvMonstre3.innerHTML = Monstre3PV + "/100 PV </h2>";
            dialogue.innerHTML = Perso4ATK + " de dégâts !<br> Sélectionnez un personnage";
        }
            perso4.onclick = "none";
        
    }

}

// Riposte ennemie 1

monstre1 = function(){ 
    
    dialogue.innerHTML = "Attaque du monstre 1";
    ActionsHTML.style.visibility = "visible";
    
        
        dialogue.innerHTML = "Attaque";
        
            Perso1PV = Perso1PV - Monstre1ATK
            pvPerso1.innerHTML = Perso1PV + "/100 PV";
            dialogue.innerHTML = Monstre1ATK + " de dégâts"
           
        
        

            Perso2PV = Perso2PV - Monstre1ATK
            pvPerso2.innerHTML = Perso2PV + "/100 PV";
            dialogue.innerHTML = Monstre1ATK + " de dégâts"
           
        

    
            Perso3PV = Perso3PV - Monstre1ATK
            pvPerso3.innerHTML = Perso3PV + "/100 PV";
            dialogue.innerHTML = Monstre1ATK + " de dégâts"

        

    
            Perso4PV = Perso4PV - Monstre1ATK
            pvPerso1.innerHTML = Perso4PV + "/100 PV";
            dialogue.innerHTML = Monstre1ATK + " de dégâts"
    
            
           
    

        ActionsHTML.style.visibility = "hidden";
        perso1.onclick = "none";
}

// Riposte ennemie 2
monstre2 = function(){ 
    
    dialogue.innerHTML = "Attaque du monstre 2";
    ActionsHTML.style.visibility = "visible";
    
        
        dialogue.innerHTML = "Attaque";
        
            Perso1PV = Perso1PV - Monstre2ATK
            pvPerso1.innerHTML = Perso1PV + "/100 PV";
            dialogue.innerHTML = Monstre2ATK + " de dégâts"
           
        
        

            Perso2PV = Perso2PV - Monstre2ATK
            pvPerso2.innerHTML = Perso2PV + "/100 PV";
            dialogue.innerHTML = Monstre2ATK + " de dégâts"
           
        

    
            Perso3PV = Perso3PV - Monstre2ATK
            pvPerso3.innerHTML = Perso3PV + "/100 PV";
            dialogue.innerHTML = Monstre1ATK + " de dégâts"

        

    
            Perso4PV = Perso4PV - Monstre2ATK
            pvPerso1.innerHTML = Perso4PV + "/100 PV";
            dialogue.innerHTML = Monstre2ATK + " de dégâts"
    
            
           
    

        ActionsHTML.style.visibility = "hidden";
        perso1.onclick = "none";
}

// Riposte ennemie 3
monstre3 = function(){ 
    
    dialogue.innerHTML = "Attaque du monstre 1";
    ActionsHTML.style.visibility = "visible";
    
        
        dialogue.innerHTML = "Attaque";
        
            Perso1PV = Perso1PV - Monstre3ATK
            pvPerso1.innerHTML = Perso1PV + "/100 PV";
            dialogue.innerHTML = Monstre3ATK + " de dégâts"
           
        
        

            Perso2PV = Perso2PV - Monstre3ATK
            pvPerso2.innerHTML = Perso2PV + "/100 PV";
            dialogue.innerHTML = Monstre1ATK + " de dégâts"
           
        

    
            Perso3PV = Perso3PV - Monstre3ATK
            pvPerso3.innerHTML = Perso3PV + "/100 PV";
            dialogue.innerHTML = Monstre1ATK + " de dégâts"

        

    
            Perso4PV = Perso4PV - Monstre3ATK
            pvPerso1.innerHTML = Perso4PV + "/100 PV";
            dialogue.innerHTML = Monstre3ATK + " de dégâts"
    
            
           
    

        ActionsHTML.style.visibility = "hidden";
        perso1.onclick = "none";
}


// victoire ou defaite 


// Victoire 

if (PvMonstre1.innerHTML == 0 && PvMonstre2.innerHTML == 0 && PvMonstre3.innerHTML == 0){
    alert("BRAVO tu as gagner")
}

//défaite

if (pvPerso1.innerHTML == 0 && pvPerso2.innerHTML == 0 && pvPerso3.innerHTML == 0 && pvPerso4.innerHTML == 0){
    alert("Tu as perdu")
}

