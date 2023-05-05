window.onload = init;



//tableau static pour test
/*let tabJeu = [
    [1,2,3,4],
    [5,6,1,2],
    [3,4,5,6]
];*/


//j'initialise un tableau de 3 sur 4 avec des 0  qui correspond aux emplacements des cartes 
let tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];




let nb_click = 0;
let click1;
let click2;
let Idimage;
let ligne1;
let colonne1;
let ligne2;
let colonne2;
//permet d'empecher le click lors de la comparaison entre deux images
let verrou = false;
let win =0 ;

//afficher le tableau dans la console pour test
/*function afficherplateau(){
    let enligne = "";
    for(let i=0; i<=2;i++){
        for(let j = 0; j<=3;j++){
           enligne += tabJeu[i][j];
        }console.log(enligne);
        enligne ="";
    }
}*/



//initialisation du plateau aleatoirement
function initialisePlateau(){
    for (let i = 1; i<=6; i++){
        do{ 
            //je tire deux positions pour chaque images
        ligne1 = Math.floor(Math.random()* 3);
        colonne1 = Math.floor(Math.random()* 4);
        ligne2 = Math.floor(Math.random()* 3);
        colonne2 = Math.floor(Math.random()* 4);
        //console.log(ligne1, colonne1);
        //console.log(ligne2, colonne2);
            
        //les images sont placées dans des endroits dispo (valeur à 0) et quand les les deux emplecements sont différents
        }while((tabJeu[ligne1][colonne1]!=0 || tabJeu[ligne2][colonne2]!=0) || ((ligne1===ligne2)&&(colonne1===colonne2)));
        //je place les images dans les deux emplacements
        tabJeu[ligne1][colonne1]=i;
        tabJeu[ligne2][colonne2]=i;
      }  
       
}


//fonction d'animation 3d des cartes 
function flipImage(image) {

    image.classList.add('flip');
    setTimeout(() => {
    image.classList.remove('flip');   
    }, 500);
    
}




//
initialisePlateau();
//utilisation d'un tableau unidimentionnel pour faciliter le pointage des emplacements des cartes
let tabjeu2 = [tabJeu[0][0],tabJeu[0][1],tabJeu[0][2],tabJeu[0][3],tabJeu[1][0],tabJeu[1][1],tabJeu[1][2],
tabJeu[1][3],tabJeu[2][0],tabJeu[2][1],tabJeu[2][2],tabJeu[2][3]];

afficherplateau();



function init() {

    document.addEventListener('keydown', recommencerPartie)
    const images = document.querySelectorAll('.images');
    //on applique l'event sur chaque images
    images.forEach(images => (
        images.addEventListener('click',clickImage)
        ));

     };

//fonction qui permet de recommencer la partie avec espace
     function recommencerPartie (event){
        if (event.code === 'Space') {
            location.reload();
          }


     }

     function clickImage(event) {//écoute le click sur les images

        //console.log(nb_click);
        //const clickImage = this;                                                         
       // console.log(this.id, this.src); //this représente toutes les infos de l'image
        let valeurImg = this.src;

        if(verrou)return;

        //comparaison pour savoir si la carte est déjà retournée ou pas
        if(valeurImg === 'http://127.0.0.1:5500/Projet-1-Memory/Jeu/images/0.jpg'){
            flipImage(this);
            let Idimage = this.id;
            //je chope le num présent sur l'id de l'image
            Idimage.substr(3,4);
            //console.log( Idimage.substr(3,4));                            
            //je remplace le nom de l'image dans la source par celui selectionné
            this.setAttribute('src', "http://127.0.0.1:5500/Projet-1-Memory/Jeu/images/"+ tabjeu2[parseInt(Idimage.substr(3))-1] +".jpg");


          
            
            if(nb_click === 0){
                //je save l'image cliqué dans click1
                click1 = this;
                //console.log(click1.src);
                nb_click = 1;
            }else {
                //si c'est le deuxieme click je compare this (le nouveau click) avec click1
                if (click1.src === this.src){
                    nb_click = 0;
                    click1 = 0; //je reset pour plus de précautions 
                    win ++;
                    console.log(win);
                    if(win === 6 && this !== 0){
                        setTimeout(() => {
                            alert('GG, appuyez sur espace pour recommencer');
                        return
                        }, 5000);
                        
                    }
                    //console.log('gagné');
                }else{ //si l'égalité n'est pas constaté
                    //j'active le verrou car deux cartes sont déjà retournées
                    
                    verrou = true;
                    setTimeout(()=>{
                        flipImage(click1);
                        //on remet les images d'origine
                        click1.setAttribute('src', 'http://127.0.0.1:5500/Projet-1-Memory/Jeu/images/0.jpg');
                        flipImage(this);
                        this.setAttribute('src', 'http://127.0.0.1:5500/Projet-1-Memory/Jeu/images/0.jpg' );  
                        nb_click = 0;
                        click1 =0;
                        //console.log('perdu'); 
                        //je reset tout et je desactive le verrou
                        verrou = false;
                    },1500); 
                    }
                }

            }
        }

        

        
     


