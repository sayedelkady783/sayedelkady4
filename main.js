// Navbar

let lis = document.getElementById("list");
let bars = document.querySelector(".bar");
let close = document.querySelector(".close");

bars.addEventListener("click", () => {
  lis.classList.toggle("active");
});

close.addEventListener("click", () => {
  lis.classList.remove("active");
});

// Scroll Header

window.addEventListener("scroll", () => {
  let head = document.querySelector("header");
  head.classList.toggle("sticky", window.scrollY > 0);
});

// New Tabs

let tablinks = document.querySelectorAll(".resume-link .box");
let tablinkArray = Array.from(tablinks);
let tabDivs = document.querySelectorAll(".container > .resume-cards");
let tabArray = Array.from(tabDivs);

tablinkArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tablinkArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    tabArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "grid";
  });
});

// Slider

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    item: 3,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// Counter

let nums = document.querySelectorAll(".re .num");
let section = document.querySelector(".discuss");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => count(num));
    }
    started = true;
  }
};

function count(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Question Accordion

let questions = document.getElementsByClassName("bt");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Scroll To Top

let scroll = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
});

scroll.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
