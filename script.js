const chaptersObj = {
  ObjDebut: {
    subtitle: "Seriez-vous capable d'en sortir?",
    text: "Il se réveilla dans une chambre vide sans issus et trouva une note sur un des 4 murs de la pièce 'Choisis judicieusement ou malheur à toi' Sur chaque porte se retrouve une idée de ce qu'il va devoir traverser/faire pour passer à la prochaine pièce et avoir une chance de s'en sortir.",
    img: "assets/Backdorms.jpg",
    alt: "image de Backdorms",
    options: [
      { text: "COMMENCER", action: 'goToChapter("ObjChapitreReveille")' },
    ],
  },
  ObjChapitreReveille: {
    subtitle: "RÉVEILLE",
    text: " Il se réveille, prend-t-il une arme à feu?",
    img: "assets/reveille.png",
    alt: "image de reveille",
    options: [
      { text: "Oui", action: 'goToChapter("ObjChapitreChambre")' },
      { text: "Non", action: 'goToChapter("ObjChapitreChambre")' },
    ],
  },
  ObjChapitreChambre: {
    subtitle: "1ere pièce: LA CHAMBRE",
    text: " Il doit choisir une première porte et vite, le temps presse!",
    img: "assets/chambre.jpg",
    alt: "image de chambre",
    options: [
      { text: "Porte 1", action: 'goToChapter("ObjChapitreReveille")' },
      { text: "Porte 2", action: 'goToChapter("ObjChapitreReveille")' },
      { text: "Porte 3", action: 'goToChapter("ObjChapitreCuisine")' },
    ],
  },
  ObjChapitreCuisine: {
    subtitle: "2eme pièce: LA CUISINE",
    text: "Il a su prendre la bonne déscion, ou presque, la bonne porte l'a mené à ce qui ressemble à une cuisine. cependant, il n'est toujours pas sorti du deuxième étage et il croit bien que derrière 1 de ces 4 portes ce trouve un escalier.",
    img: "assets/cuisine.png",
    alt: "image de cuisine",
    options: [
      { text: "Porte 1", action: 'goToChapter("ObjChapitreReveille")' },
      { text: "Porte 2", action: 'goToChapter("ObjChapitreReveille")' },
      { text: "Porte 3", action: 'goToChapter("ObjChapitreReveille")' },
      { text: "Porte 4", action: 'goToChapter("ObjChapitreEscalier")' },
    ],
  },
  ObjChapitreEscalier: {
    subtitle: "3eme pièce: L'ESCALIER",
    text: "Il a de nouveau réussi à survivre. Seulement 2 portes sont à sa disposition.",
    img: "assets/escalier.png",
    alt: "image d'escalier",
    options: [
      { text: "Porte 1", action: 'goToChapter("ObjChapitreGarage")' },
      { text: "Porte 2", action: 'goToChapter("ObjChapitreReveille")' },
    ],
  },
  ObjChapitreGarage: {
    subtitle: "4eme et finale pièce: LE GARAGE",
    text: "Une chance qu'il a fait de la gymnastique étant jeune, sans cela le décès aurait été imminent. Voici les dernières portes avant de pouvoir enfin sortir de cet enfer, attention de bien choisir.",
    img: "assets/garage.jpg",
    alt: "image du garage",
    options: [
      { text: "Porte 1", action: 'goToChapter("ObjChapitreFin")' },
      { text: "Porte 2", action: 'goToChapter("ObjChapitreReveille")' },
      { text: "Porte 3", action: 'goToChapter("ObjChapitreReveille")' },
    ],
  },
  ObjChapitreFin: {
    subtitle: "FIN",
    text: "Bravooo",
    img: "assets/fin.png",
    alt: "image de la fin",
    options: [{ text: "Recommencer", action: 'goToChapter("ObjDebut")' }],
  },
};

let goToChapter = function (chapterName) {
  // console.log(chaptersObj.ObjChapitre0.subtitle);
  //console.log(chaptersObj.ObjChapitre0.text);

  //console.log(chaptersObj[chapterName]["subtitle"]);
  // console.log(chaptersObj[chapterName]["text"]);

  let st0 = document.getElementsByClassName("sousTitre")[0];
  st0.innerHTML = chaptersObj[chapterName]["subtitle"];

  let sy0 = document.getElementsByClassName("synopsis")[0];
  sy0.innerHTML = chaptersObj[chapterName]["text"];

  document.getElementsByClassName("UneImage")[0].src =
    chaptersObj[chapterName]["img"];
  document.getElementsByClassName("UneImage")[0].alt =
    chaptersObj[chapterName]["alt"];

  // Enleve tous les boutons si ils existent   https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb

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

goToChapter("ObjDebut");
  
