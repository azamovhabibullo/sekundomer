 let hr = min = sec = ms = '0' + 0,
   startTimer;

 const startBtn = document.querySelector('.start');
 const stopBtn = document.querySelector('.stop');
 const resetBtn = document.querySelector('.reset');
      
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);


function start() {
    startBtn.classList.add('active');
    stopBtn.classList.remove('stopActive');

    startTimer = setInterval(()=>{
     ms++
     ms = ms < 10 ? '0' + ms : ms;

      if(ms == 100){
         sec++;
           ms = '0' + 0;

           sec = sec < 10 ? '0' + sec : sec;

      }
      if(sec == 60){
        min++;
          sec = '0' + 0;

          min = min < 10 ? '0' + min : min;

     }
     if(min == 60){
        hr++;
          min = '0' + 0;

          hr = hr < 10 ? '0' + hr : hr;

     }


     putValue();
    },10); // 1000ms = 1s

}

function stop() {
    startBtn.classList.remove('active');
    stopBtn.classList.add('stopActive');
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove('active');
    stopBtn.classList.remove('stopActive');
    clearInterval(startTimer);

    hr = min = sec = ms = '0' + 0;
    putValue();
}

function putValue() {
    document.querySelector('.millisecond').innerText = ms;
    document.querySelector('.second').innerText = sec;
    document.querySelector('.minute').innerText = min;
    document.querySelector('.hour').innerText = hr;


    
}




















