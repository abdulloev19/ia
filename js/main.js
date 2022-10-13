/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

var btn = document.querySelector(".dropbtn");
btn.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


let i = 0;

let box1 = document.getElementById("image1");
let box2 = document.getElementById("image2");
let box3 = document.getElementById("image3");
let box4 = document.getElementById("image4");
let box5 = document.getElementById("image5");
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");


let rightButton = document.querySelector(".right")
let leftButton = document.querySelector(".left")


rightButton.addEventListener('click',right)
leftButton.addEventListener('click',left)

a1.onclick = function () {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    i = 0;
    a1.style.backgroundColor = "#fff";
    a2.style.backgroundColor = "#333";
    a3.style.backgroundColor = "#333";
    a4.style.backgroundColor = "#333";
    a5.style.backgroundColor = "#333";
}

a2.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    i = 1;
    a1.style.backgroundColor = "#333";
    a2.style.backgroundColor = "#fff";
    a3.style.backgroundColor = "#333";
    a4.style.backgroundColor = "#333";
    a5.style.backgroundColor = "#333";
}

a3.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    i = 2;
    a1.style.backgroundColor = "#333";
    a2.style.backgroundColor = "#333";
    a3.style.backgroundColor = "#fff";
    a4.style.backgroundColor = "#333";
    a5.style.backgroundColor = "#333";
}

a4.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    box5.style.opacity = 0;
    i = 3;
    a1.style.backgroundColor = "#333";
    a2.style.backgroundColor = "#333";
    a3.style.backgroundColor = "#333";
    a4.style.backgroundColor = "#fff";
    a5.style.backgroundColor = "#333";
}
a5.onclick = function () {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 1;
    i = 4;
    a1.style.backgroundColor = "#333";
    a2.style.backgroundColor = "#333";
    a3.style.backgroundColor = "#333";
    a4.style.backgroundColor = "#333";
    a5.style.backgroundColor = "#fff";
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        right();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 39 ) {
        right();
    }
});

function right() {
    if (i == 0) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
        a1.style.backgroundColor = "#fff";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#333";
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#fff";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#333";
    }
    else if (i == 2) {  
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#fff";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#333";
    }
    else if (i == 3) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 1;
        box5.style.opacity = 0;
        i++
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#fff";
        a5.style.backgroundColor = "#333";
    }
    else if (i == 4) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 1;
        i = 0;
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#fff";
    }
}

function left() {
    if (i == 0) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 1;
        i++
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#fff";
    }
    else if (i == 1) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 1;
        box5.style.opacity = 0;
        i++
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#fff";
        a5.style.backgroundColor = "#333";
    }
    else if (i == 2) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#fff";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#333";
    }
    else if (i == 3) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i++;
        a1.style.backgroundColor = "#333";
        a2.style.backgroundColor = "#fff";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#333";
    }
    else if (i == 4) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        i = 0;
        a1.style.backgroundColor = "#fff";
        a2.style.backgroundColor = "#333";
        a3.style.backgroundColor = "#333";
        a4.style.backgroundColor = "#333";
        a5.style.backgroundColor = "#333";
    }
}
