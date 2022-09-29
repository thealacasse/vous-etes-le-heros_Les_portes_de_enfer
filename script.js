/*const ObjChapitre1 = {
  subtitle: "seriez-vous capable d'en sortir?",
  text: "Il se réveilla dans une chambre vide sans issus et trouva une note sur un des 4 murs de la pièce. Sur chaque porte se retrouve une idée de ce qu'il va devoir traverser/faire pour passer à la prochaine pièce et avoir une chance de s'en sortir.",
  img: "Backdorms",
};*/

const chaptersObj = {
  ObjChapitre0: {
    subtitle: "RÉVEILLE",
    text: " Il se réveille, prend-t-il une arme à feu?",
    img: "chambre0",
    options: [
      (choix1 = { text: "option 1", action: 'goToChapter("CHAMBRE")' }),
      (choix2 = { text: "option 2", action: 'goToChapter("CHAMBRE")' }),
    ],
  },
  ObjChapitre1: {
    subtitle: "1ere pièce: LA CHAMBRE",
    text: " Il doit choisir une première porte et vite, le temps presse!",
    img: "chambre",
    options: [
      (choix1 = { text: "option 1", action: 'goToChapter("RÉVEILLE")' }),
      (choix2 = { text: "option 2", action: 'goToChapter("RÉVEILLE")' }),
      (choix3 = { text: "option 3", action: 'goToChapter("CUISINE")' }),
    ],
  },
  ObjChapitre2: {
    subtitle: "2eme pièce: LA CUISINE",
    text: "Il a su prendre la bonne déscion, ou presque, la bonne porte l'a mené à ce qui ressemble à une cuisine. Seulement 2 portes sont à sa disposition.",
    img: "cuisine",
    options: [
      (choix1 = { text: "option 1", action: 'goToChapter("ESCAlIER") ' }),
      (choix2 = { text: "option 2", action: 'goToChapter("RÉVEILLE")' }),
    ],
  },
  ObjChapitre3: {
    subtitle: "3eme pièce: L'ESCALIER",
    text: "Il a de nouveau réussi à survivre, cependant, il n'est toujours pas sortie du deuxième étage et il croit bien que derrière 1 de ces 4 portes ce trouve un escalier.",
    img: "escalier",
    options: [
      (choix1 = { text: "option 1", action: 'goToChapter("RÉVEILLE")' }),
      (choix2 = { text: "option 2", action: 'goToChapter("RÉVEILLE")' }),
      (choix3 = { text: "option 3", action: 'goToChapter("RÉVEILLE")' }),
      (choix3 = { text: "option 4", action: 'goToChapter("GARAGE")' }),
    ],
  },
  ObjChapitre4: {
    subtitle: "4eme et finale pièce: LE GARAGE",
    text: "Une chance qu'il a fait de la gymnastique étant jeune, sans cela le décès aurait été imminent. Voici les dernières portes avant de pouvoir enfin sortir de cet enfer, attention de bien choisir.",
    img: "garage",
    options: [
      (choix1 = { text: "option 1", action: 'goToChapter("FIN")' }),
      (choix2 = { text: "option 2", action: 'goToChapter("RÉVEILLE")' }),
      (choix3 = { text: "option 3", action: 'goToChapter("RÉVEILLE")' }),
    ],
  },
  ObjChapitreFin: {
    subtitle: "FIN",
    text: "Bravooo",
    img: "escalier",
  },
};

goToChapter = function (chapterName) {
  switch (chapterName) {
    case "RÉVEILLE":
      console.log(chaptersObj.ObjChapitre4.subtitle);
      console.log(chaptersObj.ObjChapitre4.text);
      break;
    case "CHAMBRE":
      console.log(chaptersObj.ObjChapitre1.subtitle);
      console.log(chaptersObj.ObjChapitre1.text);
      /*console.log(chaptersObj.ObjChapitre1.options[0].text);*/
      break;
    case "CUISINE":
      console.log(chaptersObj.ObjChapitre2.subtitle);
      console.log(chaptersObj.ObjChapitre2.text);
      break;
    case "ESCALIER":
      console.log(chaptersObj.ObjChapitre3.subtitle);
      console.log(chaptersObj.ObjChapitre3.text);
      break;
    case "GARAGE":
      console.log(chaptersObj.ObjChapitre4.subtitle);
      console.log(chaptersObj.ObjChapitre4.text);
      break;
    case "FIN":
      console.log(chaptersObj.ObjChapitre4.subtitle);
      console.log(chaptersObj.ObjChapitre4.text);
      break;
    default:
    // code block
  }
};
