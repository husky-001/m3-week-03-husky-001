const song = document.getElementById('song');
const middle = document.querySelector('.middle');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const i = middle.querySelector('i');
const musicImg = document.querySelector('.music-img');
const img = document.getElementById('img');
let songIndex = 1;
const body = document.querySelector('body');
const songname = document.querySelector('.songname');
const j = ['space', 'energy', 'inspire', 'smallguitar'];
const time = document.getElementById('time');

//循環
song.addEventListener('ended', function () {
  right.click();
});

//進度條
song.addEventListener('timeupdate' , function(){
  const duration = this.duration;
  const currentTime = this.currentTime;
  const y = (currentTime/duration)*100;
   document.getElementById('playtime').style.width = y + '%';
})

//指定段落播放
time.addEventListener('click', function (e) {
  let x;
   x = (e.offsetX/200)*song.duration;
   song.currentTime = x;
})


//撥放 暫停
function play() {
  middle.addEventListener('click', function () {
    if (song.paused) {
      icon();
    } else {
      song.pause();
      i.classList.remove('fa-pause');
      i.classList.add('fa-play');
      musicImg.style.animationPlayState = 'paused';
      body.classList.remove('play');
    }
  })
}

function icon() {
  i.classList.remove('fa-play');
  i.classList.add('fa-pause');
  musicImg.style.animationPlayState = 'running';
  body.classList.add('play');
  song.play();
}
//下一首
right.addEventListener('click', function () {
  if (songIndex === 1) {
    img.src = "/m3-week-03-husky-001/music_player/images/inspire.jpg";
    song.src = "/m3-week-03-husky-001/music_player/music/inspire.mp3";
    songIndex++;
    icon();
  }
  else if (songIndex === 2) {
    img.src = "/m3-week-03-husky-001/music_player/images/smallguitar.jpg";
    song.src = "/m3-week-03-husky-001/music_player/music/smallguitar.mp3";
    songIndex++;
    icon();
  }
  else if (songIndex === 3) {
    img.src = "/m3-week-03-husky-001/music_player/images/energy.jpg";
    song.src = "/m3-week-03-husky-001/music_player/music/energy.mp3";
    songIndex = 1;
    icon();
  }
  songname.innerText = (j[songIndex]);
})

//上一首
left.addEventListener('click', function () {
  if (songIndex === 2) {
    img.src = "/m3-week-03-husky-001/music_player/images/energy.jpg";
    song.src = "/m3-week-03-husky-001/music_player/music/energy.mp3";
    songIndex--;
    icon();
  }
  else if (songIndex === 3) {
    img.src = "/m3-week-03-husky-001/music_player/images/inspire.jpg";
    song.src = "/m3-week-03-husky-001/music_player/music/inspire.mp3";
    songIndex--;
    icon();
  }
  else if (songIndex === 1) {
    img.src = "/m3-week-03-husky-001/music_player/images/smallguitar.jpg";
    song.src = "/m3-week-03-husky-001/music_player/music/smallguitar.mp3";
    songIndex = 3;
    icon();
  }
  songname.innerText = (j[songIndex]);
})

play();
