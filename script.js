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
    localStorage.setItem("name", name);
    welcomeMessage.innerHTML = `Welcome ${name}`;
    nameInput.style.display = "none";
    submitBtn.style.display = "none";
    enterNameText.style.display = "none";
  });

  const name = localStorage.getItem("name");

  if (name) {
    welcomeMessage.innerHTML = `Welcome ${name}`;
    nameInput.style.display = "none";
    submitBtn.style.display = "none";
    enterNameText.style.display = "none";
  }
});

// Delay the execution of the code for 10 seconds (10,000 milliseconds)
setTimeout(function() {
  // Check if a name has been stored in local storage
  var name = localStorage.getItem("name");
  if (!name) {
    // Display an alert if a name has not been stored
    alert("Please input your name.");
  }
}, 10000);



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

const submitButton = document.getElementById("submitButton");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const formSubmitted = urlParams.get("formSubmitted");

if (formSubmitted === "true") {
  submitButton.innerHTML = "Registration completed.";
  submitButton.disabled = true;
}

submitButton.addEventListener("click", function() {
  if (formSubmitted !== "true") {
    window.location.href = "https://docs.google.com/forms/..." + "?formSubmitted=true";
  }
});
