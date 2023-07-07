console.log("Welcome To Spotify");

//initialize varaible

let songindex = 0;
let audioElement = new Audio("song/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitems'));
let mastersingname = Array.from(document.getElementsByClassName("mastersongname"));


let song = [
    {songname: "KESARIYA" , filepath: "song/1.mp3" , coverpath:"cover/1.jpg"},
    {songname: "O BEDARDEYA" , filepath: "song/2.mp3" , coverpath:"cover/2.jpg"},
    {songname: "JAADUI" , filepath: "song/3.mp3" , coverpath:"cover/3.jpg"},
    {songname: "SHOW ME THUMKA" , filepath: "song/4.mp3" , coverpath:"cover/4.jpg"},
    {songname: "MERI MAA" , filepath: "song/5.mp3" , coverpath:"cover/1.jpg"},
    {songname: "MAAN MERI JAAN" , filepath: "song/6.mp3" , coverpath:"cover/2.jpg"},
    {songname: "TERE HAWALE" , filepath: "song/8.mp3" , coverpath:"cover/3.jpg"}
]

songitems.forEach((element, i )=>{
    console.log(element ,i);
    element.getElementsByTagName("img" )[0].src = song[i].coverpath;
    element.getElementsByClassName("songname" )[0].innerHTML = song[i].songname;

})



//audioelement.play();
//handle play/pause
  masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;


    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//listen to evnets

audioElement.addEventListener('timeupdate' , ()=>{
//console.log('timeupdate');
//update seekbar

progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
//console.log(progress);
myprogressbar.value = progress;


})
myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeallplays = ()=>{
    
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");

    
    })


}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        //console.log(e.target);
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `song/${songindex+1}.mp3`;
        mastersongname.innerText = song[songindex].songname ;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        
    


    })
})
document.getElementById("next").addEventListener('click', ()=>{
    if(songindex>= 8){
        songindex = 0;
    }
    else{
        songindex +=1;
    }
    audioElement.src = `song/${songindex+1}.mp3`;
        mastersongname.innerText = song[songindex].songname;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
})
document.getElementById("previous").addEventListener('click', ()=>{
    if(songindex<= 0){
        songindex = 0;
    }
    else{
        songindex -=1;
    }
    audioElement.src = `song/${songindex+1}.mp3`;
        mastersongname.innerText = song[songindex].songname;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
})