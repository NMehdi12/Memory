window.onload = init;

let stockOk = false;

function init(){
    document.getElementById('mdp').addEventListener('input',conditionMdp);
    document.getElementById('mdpVerif').addEventListener('input', conditionVerifMdp);
    document.getElementById('name').addEventListener('input', conditionNom);
    document.getElementById('email').addEventListener('input', conditionMail);
    document.getElementById('button1').addEventListener('click', validationBouton)
    document.getElementById('button2').addEventListener('click', clear);
    //document.getElementById('button1').addEventListener('click', stockage)
}  

//fonction verif condition nom
function conditionNom(event){
    let saisieNom = document.getElementById('name').value;
    let patternNom = /.{3,}/;
    

    if(patternNom.test(saisieNom)){
        document.getElementById('textealertnom').style.color = '#07ff14';
        document.getElementById('checkIconeNom').style.opacity = '100%'
        document.getElementById('errorIconeNom').style.opacity = '0%'
    }else if(!patternNom.test(saisieNom)){
        document.getElementById('textealertnom').style.color = '#fa0303';
        document.getElementById('checkIconeNom').style.opacity = '0%'
        document.getElementById('errorIconeNom').style.opacity = '100%'
    }

}

//fonction verif condition email
function conditionMail(event) {
    let saisieEmail = document.getElementById('email').value;
    let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(patternEmail.test(saisieEmail)){
        document.getElementById('textealertemail').style.color = '#07ff14';
        document.getElementById('checkIconeEmail').style.opacity = '100%'
        document.getElementById('errorIconeEmail').style.opacity = '0%'
    }else if(!patternEmail.test(saisieEmail)){
        document.getElementById('textealertemail').style.color = '#fa0303';
        document.getElementById('checkIconeEmail').style.opacity = '0%'
        document.getElementById('errorIconeEmail').style.opacity = '100%'
    }
    
}


//fonction verif condition mdp
function conditionMdp(event) {
    let saisieMdp = document.getElementById('mdp').value;
    let patternMdpFaible = /.{6,}/;
    let patternMdpMoyen = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9])(?=.*[a-zA-Z]).{7,}$/
    let patternMdpFort = /^(?=.*\d)(?=.*[!@#$%^&*()-+_='{}-])(?=.*[a-zA-Z]).{9,}$/;

    //let saisieValide = false;

    if(patternMdpFaible.test(saisieMdp)){
        document.getElementById('mdpFaible').style.color = '#f50909';
        document.getElementById('mdpFaible').style.opacity = '100%';
        document.getElementById('checkIconeMdp').style.opacity = '100%'
        document.getElementById('errorIconeMdp').style.opacity = '0%'

    }else{
        document.getElementById('mdpFaible').style.color = '#f0f8ff';
        document.getElementById('mdpFaible').style.opacity = '15%';
        document.getElementById('checkIconeMdp').style.opacity = '0%'
        document.getElementById('errorIconeMdp').style.opacity = '100%'
    }
    if(patternMdpMoyen.test(saisieMdp)){
        document.getElementById('mdpMoyen').style.color = '#ef8607';
        document.getElementById('mdpMoyen').style.opacity = '100%';
    }else{
        document.getElementById('mdpMoyen').style.color = '#f0f8ff';
        document.getElementById('mdpMoyen').style.opacity = '15%';
    }
    if(patternMdpFort.test(saisieMdp)){
        document.getElementById('mdpFort').style.color = '#0fef07';
        document.getElementById('mdpFort').style.opacity = '100%';
    }else{
        document.getElementById('mdpFort').style.color = '#f0f8ff';
        document.getElementById('mdpFort').style.opacity = '15%';
    }
} 


//fonction verif condition resaisie de mdp  
function conditionVerifMdp(event) {
    let saisieMdp = document.getElementById('mdp').value;
    let confirmMdp = document.getElementById('mdpVerif').value;
    valide = false;

    if(saisieMdp === confirmMdp){
        document.getElementById('checkIconeVerifMdp').style.opacity = '100%';
        document.getElementById('errorIconeVerifMdp').style.opacity = '0%'
        valide = true;
    }else{
        document.getElementById('checkIconeVerifMdp').style.opacity = '0%';
        document.getElementById('errorIconeVerifMdp').style.opacity = '100%';
        valide = false;
    }
    
}


//fonction qui active le bouton création de compte
function validationBouton (event){
    let confirmMdp = document.getElementById('mdpVerif').value;
    let saisieMdp = document.getElementById('mdp').value;
    let patternMdpFaible = /.{6,}/;
    let patternMdpMoyen = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9])(?=.*[a-zA-Z]).{7,}$/;
    let patternMdpFort = /^(?=.*\d)(?=.*[!@#$%^&*()-+_='{}-])(?=.*[a-zA-Z]).{9,}$/;

    let saisieEmail = document.getElementById('email').value;
    let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let saisieNom = document.getElementById('name').value;
    let patternNom = /.{3,}/;





    if((patternMdpFaible.test(saisieMdp) || patternMdpMoyen.test(saisieMdp) || patternMdpFort.test(saisieMdp)) && saisieMdp === confirmMdp &&
    patternEmail.test(saisieEmail) && patternNom.test(saisieNom) ){
       if(stockage()){
        
        //document.getElementById('button1').disabled = false;
        window.location.href = "http://127.0.0.1:5500/Projet-1-Memory/Se%20connecter/connexion.html";
        console.log('button1');
        }
        //document.getElementById('button1').style.backgroundColor = 'green'
        }else{

            alert("Erreur, veuillez saisir les informaitions correctement")
            
        }
}
    
//fonction fonctionnalité bouton annuler
function clear(event) {
    document.getElementById('formulaire').reset();
}


//stockage des données saisies dans le local storage
function stockage(event) {
    let saisieNom = document.getElementById('name').value;
    let saisieEmail = document.getElementById('email').value;
    let saisieMdp = document.getElementById('mdp').value;

    let patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let patternNom = /.{3,}/;
    let patternMdpFaible = /.{6,}/;
    let patternMdpMoyen = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9])(?=.*[a-zA-Z]).{7,}$/;
    let patternMdpFort = /^(?=.*\d)(?=.*[!@#$%^&*()-+_='{}-])(?=.*[a-zA-Z]).{9,}$/;
    //si la saisie de nom et email n'existent pas dans le local storage et que les saisies ne sont pas vides et que les patterns sont respectés
    //alors on enregistre les données dans le local storage
    if(localStorage.getItem('nom')!== saisieNom || localStorage.getItem('email')!== saisieEmail && saisieNom !=="" && saisieEmail!=="" && 
    patternEmail.test(saisieEmail) && patternNom.test(saisieNom) && (patternMdpFaible.test(saisieMdp) || patternMdpMoyen(saisieMdp) ||
    patternMdpFort(saisieMdp))){

        console.log(localStorage.getItem('nom'))
        localStorage.setItem('nom',saisieNom, );
        localStorage.setItem('email',saisieEmail);
        localStorage.setItem('mdp',saisieMdp);
        return true
    }else{
        alert("l'adresse email "+ saisieEmail +" ou le nom d'utilisateur " + saisieNom +" déjà pris")
        return false
    }
   
}








