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
const buttonPrev = document.getElementById ("prev");
const containerThumbnail = document.getElementById ("thumb");
const containerMiniture = document.getElementById ("miniature");
//per ogni elemento stampo una miniature e un immagine thumb che lascio in display none 
images.forEach((element,i) => {
    //creo il testo da mettere in absute e gli appendo la classe 
    const titoloJumbo = document.createElement("h2")
    const descrizioneJumbo = document.createElement("h3")
    titoloJumbo.innerText =element.title
    descrizioneJumbo.innerText =element.text
     titoloJumbo.classList.add("thumb-title")
     titoloJumbo.classList.add("text-end")
     descrizioneJumbo.classList.add("thumb-description")
     descrizioneJumbo.classList.add("text-end")
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
    containerImg.classList.add ("container-img-thumb");                      
    containerImg.classList.add ("position-relative");                      
    thumbImg.classList.add ("thumb");                      
    miniatureImg.src = element.image;
    thumbImg.src = element.image
    containerImg.append(titoloJumbo, descrizioneJumbo)
    //do il display none al contenitore img thumbnail

    containerImg.classList.add("d-none")
    containerImg.append(thumbImg);
    containerThumbnail.append(containerImg)
    colElement.append(miniatureImg);
    containerMiniture.append(colElement);
    
    
    
});
//pulsante next
let activeImgNumber = 1 ;
(containerThumbnail.childNodes[activeImgNumber]).classList.remove("d-none");
(document.querySelectorAll(".miniature")[activeImgNumber-1]).classList.add("active-miniature");
buttonNext.addEventListener("click", function (){
    (document.querySelectorAll(".miniature")[activeImgNumber-1]).classList.remove("active-miniature");
    containerThumbnail.childNodes[activeImgNumber].classList.add("d-none")
    activeImgNumber++
    if(activeImgNumber > 5){
        activeImgNumber = 1
    }
    (document.querySelectorAll(".miniature")[activeImgNumber-1]).classList.add("active-miniature");
    (containerThumbnail.childNodes[activeImgNumber]).classList.remove("d-none");
})
//pulsante prev
buttonPrev.addEventListener("click", function (){
    (document.querySelectorAll(".miniature")[activeImgNumber-1]).classList.remove("active-miniature");
    containerThumbnail.childNodes[activeImgNumber].classList.add("d-none")
    activeImgNumber--
    if(activeImgNumber < 1){
        activeImgNumber = 5
    }
    (document.querySelectorAll(".miniature")[activeImgNumber-1]).classList.add("active-miniature");
    (containerThumbnail.childNodes[activeImgNumber]).classList.remove("d-none");
})
setInterval(() => {
(document.querySelectorAll(".miniature")[activeImgNumber-1]).classList.remove("active-miniature");
containerThumbnail.childNodes[activeImgNumber].classList.add("d-none")
activeImgNumber++
if(activeImgNumber > 5){
    activeImgNumber = 1
}
(document.querySelectorAll(".miniature")[activeImgNumber-1]).classList.add("active-miniature");
(containerThumbnail.childNodes[activeImgNumber]).classList.remove("d-none");

    
}, 3000);