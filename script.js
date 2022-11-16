"use strict";


const chaptersObj = {
  ObjDebut: {
    subtitle: "Seriez-vous capable d'en sortir?",
    text: "Il se réveilla dans une chambre vide sans issus et trouva une note sur un des 4 murs de la pièce 'Choisis judicieusement ou malheur à toi' Sur chaque porte se retrouve une idée de ce qu'il va devoir traverser/faire pour passer à la prochaine pièce et avoir une chance de s'en sortir.",
    img: "assets/Backdorms.jpg",
    video:"assets/Video_Debut.mp4",
    alt: "image de Backdorms",
    options: [
      { text: "COMMENCER", action: 'aVotreGuiseHaHa("ObjChapitreReveille")' },
    ],
  },
  ObjChapitreReveille: {
    subtitle: "RÉVEILLE",
    text: " Il se réveille, prend-t-il une arme à feu?",
    img: "assets/reveille.png",
    alt: "image de reveille",
    options: [
      { text: "Oui", action: 'ChangeVarAndGoToNextChapter("ObjChapitreChambre")' },
      { text: "Non", action: 'aVotreGuiseHaHa("ObjChapitreChambre")' },
    ],
  },
  ObjChapitreChambre: {
    subtitle: "1ere pièce: LA CHAMBRE",
    text: " Il doit choisir une première porte et vite, le temps presse!",
    img: "assets/chambre.jpg",
    alt: "image de chambre",
    options: [
      {
        text: "Boire le contenu d'une bouteille",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
      {
        text: "Traverser un corridor rempli de serpents venimeux",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
      {
        text: "Il y a peut-être un ours derrière",
        action: 'aVotreGuiseHaHa("ObjChapitreCuisine")',
      },
    ],
  },
  ObjChapitreCuisine: {
    subtitle: "2eme pièce: LA CUISINE",
    text: "Il a su prendre la bonne déscion, ou presque, la bonne porte l'a mené à ce qui ressemble à une cuisine. cependant, il n'est toujours pas sorti du deuxième étage et il croit bien que derrière 1 de ces 2 portes ce trouve un escalier.",
    img: "assets/cuisine.png",
    alt: "image de cuisine",
    options: [
      {
        text: "N'est pas peur, prend cette porte...",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
      {
        text: "Traverser un corridor rempli de gaz mortels",
        action: 'aVotreGuiseHaHa("ObjChapitreEscalier")',
      },
    ],
  },
  ObjChapitreEscalier: {
    subtitle: "3eme pièce: L'ESCALIER",
    text: "Il a de nouveau réussi à survivre! En bas de l'escalier se trouve 4 portes, choisi bien.",
    img: "assets/escalier.png",
    alt: "image d'escalier",
    options: [
      {
        text: "Fait un pacte de sang avec le diable",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
      {
        text: "J'espère que tu n'as pas peur du noir",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
      {
        text: "Couloir contaminé d'une nouvelle variante de Covid-19",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
      {
        text: "Corridor rempli de rayons laser",
        action: 'aVotreGuiseHaHa("ObjChapitreGarage")',
      },
    ],
  },
  ObjChapitreGarage: {
    subtitle: "4eme et finale pièce: LE GARAGE",
    text: "Une chance qu'il a fait de la gymnastique étant jeune, sans cela le décès aurait été imminent. Il se retrouve dans un parking de garage, voici les dernières portes avant de pouvoir enfin sortir de cet enfer, attention de bien choisir.",
    img: "assets/garage.jpg",
    alt: "image du garage",
    options: [
      {
        text: "Dit au revoir à ta vie",
        action: 'aVotreGuiseHaHa("ObjChapitreFin")',
      },
      {
        text: "Rien de plus facile que de sortir par la porte de garage;)",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
      {
        text: "Prend une cuiellère de cannelle",
        action: 'aVotreGuiseHaHa("ObjChapitreOups")',
      },
    ],
  },
  ObjChapitreFin: {
    subtitle: "FIN",
    text: "Bravooo",
    img: "assets/fin.png",
    alt: "image de la fin",
    options: [{ text: "RECOMMENCER NOUVELLE PARTIE", action: 'aVotreGuiseHaHa("ObjDebut")' }],
  },
  
  ObjChapitreOups: {
    subtitle: "MAUVAISE PORTE!",
    text: " VEUILLEZ RÉESSAYER",
    img: "assets/oups.png",
    video:"assets/Video_Dead.mp4",
    alt: "image de salle",
    options: [
      { text: "RECOMMENCER", action: 'aVotreGuiseHaHa("ObjDebut")' },
    ],
  },
};


let goToChapter = function (chapterName) {

   localStorage.setItem("chapitre_a_afficher",chapterName);
   console.log('localStorage changé à: ' + localStorage.getItem("chapitre_a_afficher",chapterName));

  if (chapterName == "ObjDebut"){

    TakeTheGun = "Non";
    localStorage.setItem("TakeTheGun","Non");
    console.log('goToChapter: TakeTheGun est changée a ' + TakeTheGun);
  }else{
    
    document.getElementById("AudioChangeChapitre").load(); 

  }


  //console.log(chaptersObj.ObjChapitre0.subtitle);
  //console.log(chaptersObj.ObjChapitre0.text);

  //console.log(chaptersObj[chapterName]["subtitle"]);
  //console.log(chaptersObj[chapterName]["text"]);
  //console.log("A0");
  let st0 = document.getElementsByClassName("sousTitre")[0];
  st0.innerHTML = chaptersObj[chapterName]["subtitle"];
  //console.log("A1");
  let sy0 = document.getElementsByClassName("synopsis")[0];
  sy0.innerHTML = chaptersObj[chapterName]["text"];
  //console.log("A2");


   // let result = 'video' in chaptersObj[chapterName];
   // result = chaptersObj[chapterName].hasOwnProperty('video');
   // result = chaptersObj[chapterName].video !== undefined;

   const Myelement = document.getElementById("ImageOuVideo");
  if ('video' in chaptersObj[chapterName]){
    //const MyImage = document.getElementById("ImageOuVideo");
    Myelement.remove();


    let videoSource ="<video id=\"ImageOuVideo\" class=\"UnVideo\" src=\""  + chaptersObj[chapterName].video +  "\" loop muted autoplay style=\"width:90%;height:50%;\"></video>"
    console.log(videoSource);

    const MyVideo = document.getElementsByClassName("image")[0];
    MyVideo.insertAdjacentHTML("afterbegin", videoSource);


  }else {
 
    const MyVideo = document.getElementById("ImageOuVideo");
    MyVideo.remove();

    let imageSource ="<img id=\"ImageOuVideo\" class=\"UneImage\" src=\"" + chaptersObj[chapterName]["img"]+"\" alt=\"\" style=\"width:90%;height:50%;\"></img>"
    console.log(imageSource);

    const MyImage = document.getElementsByClassName("image")[0];
    MyImage.insertAdjacentHTML("afterbegin", imageSource);

  //  document.getElementsByClassName("UneImage")[0].src =
  //  chaptersObj[chapterName]["img"];
  // document.getElementsByClassName("UneImage")[0].alt =
  //  chaptersObj[chapterName]["alt"];
  }



  // Enleve tous les boutons si ils existent  source: https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
  var node = document.getElementsByClassName("boutons")[0];
  node.querySelectorAll("*").forEach((n) => n.remove());


  //Loop dans tableau f. pour créer les boutons
  const tableauOptions = chaptersObj[chapterName].options;
  let nbBoutons = tableauOptions.length;

  for (let i = 0; i < nbBoutons; i++) {
    let btn = document.getElementsByClassName("boutons")[0];
    let nouveau_btn = document.createElement("button");
    nouveau_btn.innerText = tableauOptions[i].text;
    nouveau_btn.type = "button";
    nouveau_btn.className = "clsbtn";
    //console.log(tableauOptions[i].action);
    nouveau_btn.setAttribute("onclick", tableauOptions[i].action);

    btn.appendChild(nouveau_btn);
  }
};




let ChangeVarAndGoToNextChapter = function () {
  console.log('ChangeVarAndGoToNextChapter: variable TakeTheGun est à ' + TakeTheGun);
  TakeTheGun = "Oui";
  localStorage.setItem("TakeTheGun","Oui");
  console.log('ChangeVarAndGoToNextChapter: variable TakeTheGun est changée à ' + TakeTheGun);
  goToChapter("ObjChapitreChambre");
  
};


let aVotreGuiseHaHa= function (prochainChapirte) {
  console.log('aVotreGuiseHaHa: TakeTheGun est ' + TakeTheGun);
  if (TakeTheGun == "Oui") {
    //goToChapter("ObjChapitreCuisine");
    goToChapter(prochainChapirte);
  }else{
   //goToChapter("ObjChapitreOups");
     goToChapter(prochainChapirte);
  }
 
};


// Début du chargement de la page

var TakeTheGun = ""; 
//localStorage.clear();

var chapitre_a_afficher = localStorage.getItem("chapitre_a_afficher");
console.log("Premiere lecture du LocalStorage: " + chapitre_a_afficher);

//console.log('Type of chapitre_a_afficher=' + typeof chapitre_a_afficher);
//console.log('chapitre_a_afficher.length=' + chapitre_a_afficher.length);


if (localStorage.getItem("TakeTheGun") !== null){
  TakeTheGun = localStorage.getItem("TakeTheGun");
} else{
  TakeTheGun = "Non"; 
}
console.log("Premiere lecture du TakeTheGun: " + TakeTheGun);

if ( chapitre_a_afficher !== null){  

  console.log("partir du " + chapitre_a_afficher);
  goToChapter(chapitre_a_afficher);
  
    
  }else{
    console.log("partir du ObjDebut");
    goToChapter("ObjDebut");

    
  }


chapitre_a_afficher = localStorage.getItem("chapitre_a_afficher");
console.log("Apres goToChapter LocalStorage = " + chapitre_a_afficher);
