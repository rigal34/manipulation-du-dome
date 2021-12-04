//j'ai 2 façon différente de selectionner

const btn = document.querySelector("#btn");

const img = document.getElementById("img");


//création d'un événement
//je prends mon bouton,pour un événement,avec un paramétre clic,qui fera une fonction
// pas besoin de {}quand il y a une seule ligne
//à mon img j'ai ajouté un classe show et un toggle
//toggle principe de fonctionnement '' si il a une classe show tu enléves mais s'il a pas de class show tu la mets
btn.addEventListener("click", () => img.classList.toggle("show")
  
);

//************************************************************************************************************************* *
 //on va identifier nos éléments que l'on a créer!!!!!

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

//on va créer un évènement
//e ===> (event) aide va me chercher des infos importantes(e)
mouseEvent.addEventListener("mousemove", (e) => {
    horizontal.innerHTML = e.x; //récupére la valeur de x de mon evenement
    vertical.innerHTML = e.y; //récupére la valeur de x de mon evenement
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";//le style suit ma souris

    if (e.x > 500) {// si l'axe x  au déplacement de la souris et sup à 500px j 'injecte du flou 
        document.body.style.filter = "blur(3px)";
    }else{//sinon tu enleves tout cela

        document.body.style.filter = "none";
    }
});

//******************************************************************************************************************************************* */
//je peux aussi ne pas déclarer une variable et de se lancer comme cela

document.getElementById("input").addEventListener("input",(e) => {
    //console.log(e.target.value);//je vais cibler une valeur permet de récupérer ce qui est tapé par l'utilisateur
    vertical.innerHTML = e.target.value
})

//******************************************************************************************************************************************************** */
//permet de changer les couleur de mon body
//je  récupére tout ce qui à, la classe theme pour le mettre dans ma const

const theme = document.querySelectorAll(".theme");


//pour chacun des elements on te pass item
//evite de faire des if else en quantité
theme.forEach((item) => {
    item.addEventListener("click", (e) => {
        //console.log(e.target.id);je recherche id au clic
        //le switch permet de determiner un comportement
        document.body.classList.remove("darkTheme","yellowTheme","salmonTheme");
        switch (e.target.id) {
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
                case "yellow":
                    document.body.classList.add("yellowTheme");
                 break;
             default:
                 null;        
                
        }
    })
})