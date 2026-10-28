/* =================================
   MAGIC ROSE — PART 1
   Create magical stars
================================= */

"use strict";

const starsContainer = document.getElementById("stars");

function createStars() {
  if (!starsContainer) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 35; i++) {
    const star = document.createElement("span");

    star.className = "spark";

    star.style.setProperty(
      "--x",
      Math.random() * 100 + "%"
    );

    star.style.setProperty(
      "--y",
      Math.random() * 100 + "%"
    );

    star.style.setProperty(
      "--size",
      (2 + Math.random() * 4) + "px"
    );

    star.style.setProperty(
      "--duration",
      (2 + Math.random() * 3) + "s"
    );

    star.style.setProperty(
      "--delay",
      (Math.random() * 4) + "s"
    );

    fragment.appendChild(star);
  }

  starsContainer.appendChild(fragment);
}

createStars();/* =================================
   MAGIC ROSE — PART 2
   Floating magical particles
================================= */

function createParticles() {
  if (!starsContainer) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 24; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.setProperty(
      "--x",
      Math.random() * 100 + "%"
    );

    particle.style.setProperty(
      "--size",
      (2 + Math.random() * 4) + "px"
    );

    particle.style.setProperty(
      "--duration",
      (5 + Math.random() * 6) + "s"
    );

    particle.style.setProperty(
      "--delay",
      (Math.random() * 8) + "s"
    );

    particle.style.setProperty(
      "--drift",
      (Math.random() * 100 - 50) + "px"
    );

    if (Math.random() > 0.5) {
      particle.style.background = "#ffd76b";
      particle.style.boxShadow =
        "0 0 8px #ffd76b, 0 0 18px #ff9d00";
    }

    fragment.appendChild(particle);
  }

  starsContainer.appendChild(fragment);
}

createParticles();/* =================================
   MAGIC ROSE — PART 3
   Touch interaction and message
================================= */

const rose = document.getElementById("rose");
const scene = document.getElementById("scene");

let messageShown = false;

function openRose() {
  if (!rose || !scene) return;

  rose.classList.remove("rose-open");
  void rose.offsetWidth;
  rose.classList.add("rose-open");

  if (!messageShown) {
    const message = document.createElement("p");

    message.id = "rose-message";
    message.textContent = "إلى شخص يستحق كل الجمال";

    message.style.cssText = `
      position: relative;
      z-index: 5;
      margin-top: 12px;
      padding: 14px 18px;
      color: #ffe6ec;
      font-size: 18px;
      text-align: center;
      line-height: 1.8;
      text-shadow:
        0 0 8px #ff1744,
        0 0 20px #ff1744;
      animation: messageReveal 1.2s ease both;
    `;

    rose.parentElement.appendChild(message);
    messageShown = true;
  }

  createTouchSparks();
}

function createTouchSparks() {
  if (!starsContainer) return;

  const rect = rose.getBoundingClientRect();

  for (let i = 0; i < 12; i++) {
    const spark = document.createElement("span");

    spark.className = "spark";

    spark.style.setProperty(
      "--x",
      (rect.left + Math.random() * rect.width) + "px"
    );

    spark.style.setProperty(
      "--y",
      (rect.top + Math.random() * rect.height) + "px"
    );

    spark.style.setProperty("--size", "5px");
    spark.style.setProperty("--duration", "1.5s");
    spark.style.animationDelay = "0s";

    starsContainer.appendChild(spark);

    setTimeout(() => spark.remove(), 1600);
  }
}

if (rose) {
  rose.addEventListener("click", openRose);

  rose.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openRose();
    }
  });
}