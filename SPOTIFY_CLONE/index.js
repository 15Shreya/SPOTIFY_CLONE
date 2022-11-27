console.log("Welcome to spotify");

//Variables initialization:
let songIndex = 0
let audioElement = new Audio('song/1.mp3');
// audioElement.play();
let masterplay = document.getElementById('masterPlay')
let gif = document.getElementById('gif')
let myProgressBar = document.getElementById('myProgressBar')
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))
let previous = document.getElementById('previous')
let next = document.getElementById('next')
let masterSongName = document.getElementById('masterSongName')

// Array of Objects :- 
let songs = [
    { songName: "Let-Me-Love-You", filePath: "song/1.mp3", coverPath: "cover/cover1.jpg" },
    { songName: "Lily", filePath: "song/2.mp3", coverPath: "cover/cover2.jpg" },
    { songName: "Main-Royaa", filePath: "song/3.mp3", coverPath: "cover/cover3.jpg" },
    { songName: "Kehndi-hundi-si", filePath: "song/4.mp3", coverPath: "cover/cover4.jpg" },
    { songName: "Hasi-Bann-Gaye", filePath: "song/5.mp3", coverPath: "cover/cover5.jpg" },
    { songName: "PS5", filePath: "song/6.mp3", coverPath: "cover/cover6.jpg" },
    { songName: "Abhi-Kuch-Dino-se", filePath: "song/7.mp3", coverPath: "cover/cover7.jpg" },
    { songName: "Heat-Waves", filePath: "song/8.mp3", coverPath: "cover/cover8.png" },
    { songName: "Oo-Khuda", filePath: "song/9.mp3", coverPath: "cover/cover9.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

// Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play()
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    }
    else {
        audioElement.pause()
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {   // Event of an audio
    //Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>{
    element.classList.add('fa-play-circle') 
    element.classList.remove('fa-pause-circle')   
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `song/${songIndex}.mp3`
        masterSongName.innerText = songs[songIndex-1].songName
        audioElement.currentTime = 0
        audioElement.play()
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    })
})

previous.addEventListener('click', ()=>{
    if(songIndex == 1){
        songIndex = 9
    }
    else{
        songIndex -= 1 
    }
    audioElement.src = `song/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
    gif.style.opacity = 1
})

next.addEventListener('click', ()=>{
    if(songIndex == 9){
        songIndex = 1
    }
    else{
        songIndex += 1 
    }
    audioElement.src = `song/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterplay.classList.remove('fa-play-circle')
    masterplay.classList.add('fa-pause-circle')
    gif.style.opacity = 1
})