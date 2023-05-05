
window.onload = init();


function init(event) {
    let userDataNom = localStorage.getItem('nom');
    let userDataEmail = localStorage.getItem('email');

   document.getElementById('selecteurOption').addEventListener('change', AffichageImage);
    


    //console.log(userDataEmail);



   document.getElementById('userNom').textContent = userDataNom;
   document.getElementById('userMail').textContent = userDataEmail;


}


function AffichageImage(event) {
    valeurSelecteur = document.getElementById('selecteurOption').value
    console.log(valeurSelecteur);

    if(valeurSelecteur === 'Chiens'){
        document.getElementById('chiens').style.opacity = '100%';
    }else{
        document.getElementById('chiens').style.opacity = '0%';
    }

    if(valeurSelecteur === 'Alphabet-scrabble'){
        document.getElementById('imagesScrabble').style.opacity = '100%';
    }else{
        document.getElementById('imagesScrabble').style.opacity = '0%';
    }

    if(valeurSelecteur === 'Animaux'){
        document.getElementById('imagesAnimaux').style.opacity = '100%';
    }else{
        document.getElementById('imagesAnimaux').style.opacity = '0%';
    }

    if(valeurSelecteur === 'Animaux animés'){
        document.getElementById('imagesAnimauxAnimes').style.opacity = '100%';
    }else{
        document.getElementById('imagesAnimauxAnimes').style.opacity = '0%';
    }

    if(valeurSelecteur === 'Animaux domestiques'){
        document.getElementById('imagesAnimauxDomestiques').style.opacity = '100%';
    }else{
        document.getElementById('imagesAnimauxDomestiques').style.opacity = '0%';
    }    
    
    if(valeurSelecteur === 'Dinosaures'){
        document.getElementById('imagesDinosaures').style.opacity = '100%';
    }else{
        document.getElementById('imagesDinosaures').style.opacity = '0%';
    }   

    if(valeurSelecteur === 'Dinosaures Avec Nom'){
        document.getElementById('imagesDinosauresAvecNom').style.opacity = '100%';
    }else{
        document.getElementById('imagesDinosauresAvecNom').style.opacity = '0%';
    } 

    if(valeurSelecteur === 'Memory-legume'){
        document.getElementById('imagesLegume').style.opacity = '100%';
    }else{
        document.getElementById('imagesLegume').style.opacity = '0%';
    } 
}

/*function AffichageImage1(event){
   document.getElementById('chiens').style.display = false;
}*/


/*function AffichageImage5(event){
    document.getElementById('chiens').style.opacity = '100%' ;
}*/

