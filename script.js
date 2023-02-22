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
  var navde=document.getElementById("nav-detail");
  navde.scrollIntoView({ behavior: 'smooth' });
  document.getElementById("side-nav").style.display="none";
});

document.getElementById("tips").addEventListener("click", function(){
 
  var navde=document.getElementById("nav-tip");
  navde.scrollIntoView({ behavior: 'smooth' });
  document.getElementById("side-nav").style.display="none";
});

document.getElementById("benifits").addEventListener("click", function(){
  var navde=document.getElementById("nav-benifit");
  navde.scrollIntoView({ behavior: 'smooth' });
  document.getElementById("side-nav").style.display="none";
});

document.getElementById("FAQs").addEventListener("click", function(){
  var navdet=document.getElementById("faq-section");
  navdet.scrollIntoView({ behavior: 'smooth' });
  
  document.getElementById("side-nav").style.display="none";
});

document.getElementById("helReg").addEventListener("click", function(){
const formOverlay5 = document.getElementById("form-overlay5");
const backButton5 = document.getElementById("back-button5");


  formOverlay5.style.display = "block";
  document.body.style.overflow = "hidden";


backButton5.addEventListener("click", function() {
  formOverlay5.style.display = "none";
  document.body.style.filter = "none";
  document.body.style.overflow = "auto";
});
  
  document.getElementById("side-nav").style.display="none";
});

window.addEventListener("load", function() {
  const submitBtn = document.getElementById("submitBtn");
  const nameInput = document.getElementById("nameInput");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const enterNameText = document.getElementById("enterNameText");

  submitBtn.addEventListener("click", function() {
    const name = nameInput.value;
    if (!name) {
      alert("Please enter your name");
      return;
    }
    sessionStorage.setItem("name", name);
    welcomeMessage.innerHTML = `Welcome ${name}`;
    nameInput.style.display = "none";
    submitBtn.style.display = "none";
    enterNameText.style.display = "none";
  });

  const name = sessionStorage.getItem("name");

  if (name) {
    welcomeMessage.innerHTML = `Welcome ${name}`;
    nameInput.style.display = "none";
    submitBtn.style.display = "none";
    enterNameText.style.display = "none";
  }
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

document.getElementById("goto50+").addEventListener("click", function(){
  var rightRectangle=document.getElementById("home");
  rightRectangle.scrollIntoView({ behavior: 'smooth' });
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