// COUNTER ANIMATION
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;

    if(count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// SCROLL REVEAL
function reveal() {
  const reveals = document.querySelectorAll('.service, .work-item');

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if(elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", reveal);

// MODAL
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

document.querySelectorAll(".work-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

// DARK MODE TOGGLE
document.getElementById("darkToggle").onclick = function() {
  document.body.classList.toggle("darker");
};

// LOADER
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.transition = "10s ease";
    setTimeout(() => {
        loader.style.display = "none";
    }, 600);
});

// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// TYPING EFFECT
const text = "You Imagine It, We Design It";
let index = 0;

function typeEffect() {
    if(index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// HOVER SOUND
const hoverSound = document.getElementById("hoverSound");

document.querySelectorAll("button, a").forEach(item => {
    item.addEventListener("mouseenter", () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});