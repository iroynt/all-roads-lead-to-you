function toggleHint(){

const hint=document.getElementById("hint");

if(hint.style.display==="block"){
hint.style.display="none";
}else{
hint.style.display="block";
}

}

function checkPassword(){

const pass=document.getElementById("password").value;

if(pass==="2603"){

document.getElementById("login").style.display="none";

document.getElementById("welcome").classList.remove("hidden");

setTimeout(function(){

document.getElementById("welcome").style.display="none";

document.getElementById("music").classList.remove("hidden");

},2500);

}else{

alert("not quite. 🤍");

}

}

document.getElementById("continueBtn").addEventListener("click",function(){

document.getElementById("music").style.display="none";

document.getElementById("letter").classList.remove("hidden");

window.scrollTo({
top:document.getElementById("letter").offsetTop,
behavior:"smooth"
});

});
/* ---------- Flip Cards ---------- */

document.querySelectorAll(".flip-card").forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("flip");

});

});
function startLoveMeter(){

let values=[
10,
25,
50,
75,
100,
1000
];

let text=[
"10%",
"25%",
"50%",
"75%",
"100%",
"1000%",
"∞"
];

let i=0;

let bar=document.getElementById("fill");

let percent=document.getElementById("percent");

let timer=setInterval(()=>{

if(i<values.length){

bar.style.width=Math.min(values[i],100)+"%";

percent.innerHTML=text[i];

i++;

}else{

clearInterval(timer);

percent.innerHTML="∞";

document.body.style.animation="shake .25s 5";

setTimeout(()=>{

document.getElementById("popup").style.display="flex";

},900);

}

},700);

}

function closePopup(){

document.getElementById("popup").style.display="none";

document.getElementById("percent").innerHTML="this keeps happening. 🤍";

}
document.getElementById("hugBtn").addEventListener("click",()=>{

document.getElementById("hugBox").classList.remove("hidden");

document.getElementById("hugBtn").innerHTML="hug sent 🤍";

});
const hug=document.getElementById("hugBtn");

hug.addEventListener("click",()=>{

setTimeout(()=>{

document.getElementById("goodbye").classList.remove("hidden");

},1800);

for(let i=0;i<20;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML=Math.random()>0.5?"🤍":"✨";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

},i*180);

}

});

document.getElementById("restartBtn").onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};