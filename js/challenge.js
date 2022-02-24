let running = true;

//counter
let clickCounter =0;
let counter = document.getElementById('counter');
setInterval(() => {
    setTimeout(() => {
        if(running){
        counter.innerHTML++;
        clickCounter =0;
        }
    }, 1000);
}, 1000);

// + -
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.addEventListener("click",()=>{
    if(running){
    counter.innerHTML--
}});
plus.addEventListener("click",()=>{
    if (running){
        counter.innerHTML++
    }
});


//like
const heart = document.getElementById('heart');
let likes = document.querySelector('.likes')
let currentCount;
heart.addEventListener("click",()=>{
    if(running){
    clickCounter++;
    currentCount = counter.innerHTML;
    let li = document.createElement("li");
        li.innerHTML = `liked ${currentCount}, ${clickCounter} times!`
        likes.appendChild(li);
    }
    
   })
   


//pause
const pause =document.getElementById('pause')
pause.addEventListener("click",()=>{
    running = !running;
    if(running===false){
        pause.innerHTML = "resume";
    }
    else if(running === true){
        pause.innerHTML = "pause";
    }
    

})
//comment
let submit = document.getElementById('submit');

submit.addEventListener("click",()=>{
    let div = document.getElementById('list');
    event.preventDefault()
    if(running){
     let comment = document.getElementById("comment-input").value;
      let p = document.createElement("p");
      div.appendChild(p);
      p.insertAdjacentHTML('afterend', comment);
      

    }
})
