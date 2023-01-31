let profileIcon = document.querySelector('#profile-icon');
profileIcon.addEventListener('click', () => {
    // code for creating side navigation
    document.querySelector("#side-nav").style.width = "60%";
    document.querySelector("#side-nav").style.height = "100%";
    document.querySelector("#side-nav").style.display = "block";
});

let sideNav = document.querySelector('#side-nav');
let sideNavClose = document.querySelector('#side-nav-close');
sideNavClose.addEventListener('click', () => {
    sideNav.style.display = "none";
});

document.getElementById("details").addEventListener("click", function(){
  var navdet=document.getElementById("nav-details");
  navdet.scrollIntoView({ behavior: 'smooth' });
  var navde=document.getElementById("nav-detail");
  navde.scrollIntoView({ behavior: 'smooth' });
  document.getElementById("side-nav").style.display="none";
});

document.getElementById("tips").addEventListener("click", function(){
  var navdet=document.getElementById("nav-tips");
  navdet.scrollIntoView({ behavior: 'smooth' });
  var navde=document.getElementById("nav-tip");
  navde.scrollIntoView({ behavior: 'smooth' });
  document.getElementById("side-nav").style.display="none";
});

document.getElementById("benifits").addEventListener("click", function(){
  var navdet=document.getElementById("nav-benifits");
  navdet.scrollIntoView({ behavior: 'smooth' });
  var navde=document.getElementById("nav-benifit");
  navde.scrollIntoView({ behavior: 'smooth' });
  document.getElementById("side-nav").style.display="none";
});

document.getElementById("FAQs").addEventListener("click", function(){
  var navdet=document.getElementById("faq-section");
  navdet.scrollIntoView({ behavior: 'smooth' });
  
  document.getElementById("side-nav").style.display="none";
});




let leftRectangle = document.querySelector('.rectangle-bar.left');
let rightRectangle = document.querySelector('.rectangle-bar.right');
const leftInfo = document.querySelector("#image-container");
const righttInfo = document.querySelector("#image-container1");

rightRectangle.addEventListener('click', function() {
    leftRectangle.style.backgroundColor = '#f5f5f5';
    leftRectangle.style.color = '#333';
    rightRectangle.style.backgroundColor = '#333';
    rightRectangle.style.color = '#f5f5f5';
    leftInfo.style.display = 'none';
    righttInfo.style.display='block';
});

leftRectangle.addEventListener('click', function() {
    leftRectangle.style.backgroundColor = '#333';
    leftRectangle.style.color = '#f5f5f5';
    rightRectangle.style.backgroundColor = '#f5f5f5';
    rightRectangle.style.color = '#333';
    leftInfo.style.display = 'block';
    righttInfo.style.display='none';
});



document.getElementById("goto50+").addEventListener("click", function(){
  rightRectangle.scrollIntoView({ behavior: 'smooth' });
  this.innerHTML="Go Top";
});


const questions = document.querySelectorAll('.question');
let currentAnswer;

questions.forEach(question => {
  question.addEventListener('click', () => {
    if (currentAnswer) {
      currentAnswer.classList.remove('show');
    }
    currentAnswer = question.nextElementSibling;
    currentAnswer.classList.toggle('show');
  });
});



const registerButton = document.getElementById("register-button");


const formOverlay = document.getElementById("form-overlay");
const backButton = document.getElementById("back-button");

registerButton.addEventListener("click", function() {
  formOverlay.style.display = "block";
  document.body.style.overflow = "hidden";
});

backButton.addEventListener("click", function() {
  formOverlay.style.display = "none";
  document.body.style.filter = "none";
  document.body.style.overflow = "auto";
});

const registerButton1 = document.getElementById("register1");
const formOverlay1 = document.getElementById("form-overlay1");
const backButton1 = document.getElementById("back-button1");

registerButton1.addEventListener("click", function() {
  formOverlay1.style.display = "block";
  document.body.style.overflow = "hidden";
});

backButton1.addEventListener("click", function() {
  formOverlay1.style.display = "none";
  document.body.style.filter = "none";
  document.body.style.overflow = "auto";
});

const registerButton2 = document.getElementById("register2");
const formOverlay2 = document.getElementById("form-overlay2");
const backButton2 = document.getElementById("back-button2");

registerButton2.addEventListener("click", function() {
  formOverlay2.style.display = "block";
  document.body.style.overflow = "hidden";
});

backButton2.addEventListener("click", function() {
  formOverlay2.style.display = "none";
  document.body.style.filter = "none";
  document.body.style.overflow = "auto";
});

const registerButton3 = document.getElementById("register3");
const formOverlay3 = document.getElementById("form-overlay3");
const backButton3 = document.getElementById("back-button3");

registerButton3.addEventListener("click", function() {
  formOverlay3.style.display = "block";
  document.body.style.overflow = "hidden";
});

backButton3.addEventListener("click", function() {
  formOverlay3.style.display = "none";
  document.body.style.filter = "none";
  document.body.style.overflow = "auto";
});

const registerButton4 = document.getElementById("register4");
const formOverlay4 = document.getElementById("form-overlay4");
const backButton4 = document.getElementById("back-button4");

registerButton4.addEventListener("click", function() {
  formOverlay4.style.display = "block";
  document.body.style.overflow = "hidden";
});

backButton4.addEventListener("click", function() {
  formOverlay4.style.display = "none";
  document.body.style.filter = "none";
  document.body.style.overflow = "auto";
});

const registerButton5 = document.getElementById("register5");
const formOverlay5 = document.getElementById("form-overlay5");
const backButton5 = document.getElementById("back-button5");

registerButton5.addEventListener("click", function() {
  formOverlay5.style.display = "block";
  document.body.style.overflow = "hidden";
});

backButton5.addEventListener("click", function() {
  formOverlay5.style.display = "none";
  document.body.style.filter = "none";
  document.body.style.overflow = "auto";
});