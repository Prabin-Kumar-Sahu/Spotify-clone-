console.log("Welcome to Spotify")

// initialize the variable
let songINdex=0;
let audioElement=new Audio("./Audio/Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt.mp3")
let masterplay=document.getElementById('masterplay')
let progressbar=document.getElementById('progressBar')
let gif=document.getElementById('gifbar')
// let songsidegif=document.getElementById('songsidegif')

// let songs=[
//     {songName:"Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt" , filePath:"./audio/Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt.mp3" , coverPath:"./img/jannat.jpg"},
//     {songName:"Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt" , filePath:"./audio/Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt.mp3" , coverPath:"./img/jannat.jpg"},
//     {songName:"Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt" , filePath:"./audio/Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt.mp3" , coverPath:"./img/jannat.jpg"},
//     {songName:"Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt" , filePath:"./audio/Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt.mp3" , coverPath:"./img/jannat.jpg"},
//     {songName:"Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt" , filePath:"./audio/Zara Sa Audio Song - Jannat Emraan Hashmi, Sonal KK Pritam Sayeed Quadri Mahesh Bhatt.mp3" , coverPath:"./img/jannat.jpg"},
// ]


// audioElement.play();

// handel play pause click 

masterplay.addEventListener('click' ,()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play()
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
        songsidegif.style.opacity=1;
     

    }
    else
    {
        audioElement.pause()
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity=0;
        songsidegif.style.opacity=0;
    }
})



// lisen to event
audioElement.addEventListener('timeupdate',()=>
{
    // update seekbar 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    progressbar.value=progress;

})

progressbar.addEventListener('change', ()=>
{
    audioElement.currentTime=progressbar.value *audioElement.duration/100;
})