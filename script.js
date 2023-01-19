let profileIcon = document.querySelector('#profile-icon');
let name = localStorage.getItem("name");
let nameEl = document.querySelector('#name');
nameEl.innerHTML = name;
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

function GetStart(){
    window.location.href = 'formpage.html';
}



  



