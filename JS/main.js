const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const buttonNext = document.getElementById ("next");
const buttonPerv = document.getElementById ("perv");
const containerThumbnail = document.getElementById ("thumb");
const containerMiniture = document.getElementById ("miniature");
let activeImgNumber= 1
//per ogni elemento stampo una miniature e un immagine thumb che lascio in display none 
//images.forEach((element,i) => {

    // creo contenitore da mettere in display none o active
    const containerImg =document.createElement("div");
    //creo limmagine thumbnail
    const thumbImg = document.createElement("img");
    //creo la colonna nella quale mettere le miniature
    const colElement = document.createElement("div");
    //creo limmagine delle miniature
    const miniatureImg = document.createElement("img");
    //assegno le classi
    colElement.classList.add ("col");
    miniatureImg.classList.add ("miniature");                      
    miniatureImg.src = element.image;
    thumbImg.src = element.image
    //do il display none al contenitore img thumbnail
    //thumbImg.classList
    containerImg.append(thumbImg);
    containerThumbnail.append(containerImg)
    colElement.append(miniatureImg)
    containerMiniture.append(colElement);


    
});

