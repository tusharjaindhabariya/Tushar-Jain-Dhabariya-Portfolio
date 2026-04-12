// typing animation

const text = [
"AI / ML Student",
"Data Science Enthusiast",
"Python Developer",
"Machine Learning Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".hero-text h2").textContent = letter;

if(letter.length === currentText.length){

setTimeout(()=>{
index = 0;
count++;
type();
},1500);

}else{

setTimeout(type,80);

}

}

type();


// smooth scroll for navbar links

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


// reveal animation on scroll

const revealElements = document.querySelectorAll(".glass");

function reveal(){

revealElements.forEach(element =>{

const windowHeight = window.innerHeight;
const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

element.style.opacity = "1";
element.style.transform = "translateY(0)";

}

});

}

window.addEventListener("scroll", reveal);


// initial state

revealElements.forEach(el=>{
el.style.opacity = "0";
el.style.transform = "translateY(40px)";
el.style.transition = "all 0.6s ease";
});

reveal();


// navbar active section highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section =>{

const sectionTop = section.offsetTop;
const sectionHeight = section.clientHeight;

if(scrollY >= sectionTop - 200){
current = section.getAttribute("id");
}

});

navLinks.forEach(link =>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){
link.classList.add("active");
}

});

});