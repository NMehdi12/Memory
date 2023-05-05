window.onload = init();


function init(event) {
    document.getElementById('button1').addEventListener('click', verifCo)
    //document.getElementById('button1').addEventListener('click', verifCo)
    
}



function verifCo () {
    let saisieEmail = document.getElementById('email').value;
    let saisieMdp = document.getElementById('mdp').value;
    //on verif les conditions de connexion pour stocker
    if(localStorage.getItem('mdp')=== saisieMdp && localStorage.getItem('email')=== saisieEmail){
        window.location.href = "http://127.0.0.1:5500/Projet-1-Memory/Profil/profil.html";
        
    }else{
        alert("Mail ou mot de passe incorrect")
        
    }

}