/* cursor glow */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});


/* rain background */

const canvas=document.getElementById("rain");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let rain=[];

for(let i=0;i<400;i++){

rain.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
l:Math.random()*1,
ys:Math.random()*10+10

});

}

function drawRain(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.strokeStyle="rgba(174,194,224,0.5)";

rain.forEach(r=>{

ctx.beginPath();
ctx.moveTo(r.x,r.y);
ctx.lineTo(r.x,r.y+r.l*r.ys);
ctx.stroke();

r.y+=r.ys;

if(r.y>canvas.height){
r.y=0;
}

});

}

setInterval(drawRain,30);


/* image viewer */

const images=document.querySelectorAll(".portfolio-grid img");
const viewer=document.getElementById("viewer");
const viewerImg=document.getElementById("viewerImg");

images.forEach(img=>{

img.onclick=()=>{

viewer.style.display="flex";
viewerImg.src=img.src;

};

});

viewer.onclick=()=>{

viewer.style.display="none";

};
// view counter
fetch("https://api.countapi.xyz/hit/metrodesign-portfolio/views")

.then(res => res.json())

.then(data => {

document.getElementById("viewCount").innerText = data.value;

});