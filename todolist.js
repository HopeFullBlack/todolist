// Creer un bouton
//  let tache =document.querySelector("#tache")
// let btnEnr = document.createElement("button")
// tache.appendChild(btnEnr)

let tache = document.querySelector("#tache")
let info = document.querySelector("#info")
let date = document.querySelector("#date")
let time = document.querySelector("#heure") 
function oblig(){
    if(info.value !=""){
        btnEnr.disabled = ""
    } else { 
        btnEnr.disabled="disabled"
    }
}

btnEnr.addEventListener("click", function (e) { //creer la fonction click de mon bouton
    e.preventDefault()
    console.log(e.target.id)
    
    let newT = document.createElement("li")
    tache.appendChild(newT)
    
    let secDiv = document.createElement('div') // Ajout de la date
    secDiv.classList.add("secdivdate")
    secDiv.textContent = date.value + " "+ "à" + " " + time.value
    
    newT.appendChild(secDiv)

    let firstDiv = document.createElement('div') // Ajout du texte ecrit dans la nouvelle tache
    firstDiv.classList.add("decor")
    firstDiv.textContent = info.value
    newT.appendChild(firstDiv)

    info.value = ''
    date.value = ''
    

    //bouton modifier
    let modif = document.createElement("button")
    modif.textContent = "Modifier"
    modif.classList.add("modif")
    newT.appendChild(modif)
    modif.addEventListener("click", (e) => {
        
let textmodif = document.createElement("input")
textmodif.classList.add("inputmodif")
textmodif.textContent = "Modifier le texte"
newT.appendChild(textmodif)
let butEnr2 = document.createElement("button")
butEnr2.textContent = "Enregistrer"
newT.appendChild(butEnr2)


butEnr2.addEventListener("click", (e) => {
    firstDiv.textContent = textmodif.value;
    butEnr2.remove();
    textmodif.remove();
})

        
    })
    //Bouton supprimer
    //On crée le bouton :
    let btnSup = document.createElement("button")
    //on ajoute sa fonction :
    btnSup.addEventListener("click", (e) => {
        e.target.parentNode.remove() //on cible le parent qu'il doit effacer
    })
    btnSup.textContent = "Supprimer"
    btnSup.classList.add("btnSup")
    newT.appendChild(btnSup)
})

