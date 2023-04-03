let progress = document.getElementById('progress');
let cntrl = document.getElementById('cntrl');
let song = document.getElementById('song');
      song.onloadedmetadata = function(){
        progress.max = song.duration;
progress.value = song
        currentTime;
      }
      function playPause(){
    if(cntrl.classList.contains('fa-pause')){
          song.pause();
          cntrl.classList.remove('fa-pause');
          cntrl.classList.add('fa-play');
        }
        else{
          song.play();
          cntrl.classList.remove('fa-play');
          cntrl.classList.add('fa-pause');
        }
      }
      if(song.play()){
        setInterval(()=>{
          progress.value=song.currentTime;
        },100);
      }
      progress.onchange=function(){
        song.play();
        song.currentTime=progress.value;
        cntrl.classList.remove('fa-play');
          cntrl.classList.add('fa-pause');
      }  
      
  let progress2 = document.getElementById('progress2');
let cntrl2 =document.getElementById('cntrl2');
let song2 = document.getElementById('song2');
      song2.onloadedmetadata = function(){
        progress2.max = song2.duration;
progress2.value = song2
        currentTime;
      }
      function play(){
    if(cntrl2.classList.contains('fa-pause')){
          song2.pause();
          cntrl2.classList.remove("fa-pause");
          cntrl2.classList.add("fa-play");
        }
        else{
          song2.play();
          cntrl2.classList.remove("fa-play");
          cntrl2.classList.add("fa-pause");
        }
      }
      if(song2.play()){
        setInterval(()=>{
          progress2.value=song2.currentTime;
        },100);
      }
      progress2.onchange=function(){
        song2.play();
        song2.currentTime=progress2.value;
        cntrl2.classList.remove('fa-play');
          cntrl2.classList.add('fa-pause');
      } 
      
      let progress3 = document.getElementById('progress3');
let cntrl3 =document.getElementById('cntrl3');
let song3 = document.getElementById('song3');
      song3.onloadedmetadata = function(){
        progress3.max = song3.duration;
progress3.value = song3
        currentTime;
      }
      function play3(){
    if(cntrl3.classList.contains('fa-pause')){
          song3.pause();
          cntrl3.classList.remove("fa-pause");
          cntrl3.classList.add("fa-play");
        }
        else{
          song3.play();
          cntrl3.classList.remove("fa-play");
          cntrl3.classList.add("fa-pause");
        }
      }
      if(song3.play()){
        setInterval(()=>{
          progress3.value=song3.currentTime;
        },100);
      }
      progress3.onchange=function(){
        song3.play();
        song3.currentTime=progress3.value;
        cntrl3.classList.remove('fa-play');
        cntrl3.classList.add('fa-pause');
      } 
      
      let progress4 = document.getElementById('progress4');
let cntrl4 =document.getElementById('cntrl4');
let song4 = document.getElementById('song4');
      song4.onloadedmetadata = function(){
        progress4.max = song4.duration;
progress4.value = song4
        currentTime;
      }
      function play4(){
    if(cntrl4.classList.contains('fa-pause')){
          song4.pause();
          cntrl4.classList.remove("fa-pause");
          cntrl4.classList.add("fa-play");
        }
        else{
          song4.play();
          cntrl4.classList.remove("fa-play");
          cntrl4.classList.add("fa-pause");
        }
      }
      if(song4.play()){
        setInterval(()=>{
          progress4.value=song4.currentTime;
        },100);
      }
      progress4.onchange=function(){
        song4.play();
        song4.currentTime=progress4.value;
        cntrl4.classList.remove('fa-play');
        cntrl4.classList.add('fa-pause');
      }  
      
      let progress5 = document.getElementById('progress5');
let cntrl5 =document.getElementById('cntrl5');
let song5 = document.getElementById('song5');
      song5.onloadedmetadata = function(){
        progress5.max = song5.duration;
progress5.value = song5
        currentTime;
      }
      function play5(){
    if(cntrl5.classList.contains('fa-pause')){
          song5.pause();
          cntrl5.classList.remove("fa-pause");
          cntrl5.classList.add("fa-play");
        }
        else{
          song5.play();
          cntrl5.classList.remove("fa-play");
          cntrl5.classList.add("fa-pause");
        }
      }
      if(song5.play()){
        setInterval(()=>{
          progress5.value=song5.currentTime;
        },100);
      }
      progress5.onchange=function(){
        song5.play();
        song5.currentTime=progress5.value;
        cntrl5.classList.remove('fa-play');
        cntrl5.classList.add('fa-pause');
      } 