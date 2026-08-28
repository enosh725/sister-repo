/* ================= LOADER ================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.remove();
        }, 1000);

    }, 1800);

});


/* ================= MUSIC ================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play().catch(() => {});

        musicBtn.innerHTML = "❚❚";

        musicPlaying = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "♪";

        musicPlaying = false;

    }

});


/* ================= START JOURNEY ================= */

function startJourney() {

    document.querySelector(".intro").scrollIntoView({
        behavior: "smooth"
    });

    createBurst();

}


/* ================= MESSAGE MODAL ================= */

function openMessage() {

    document
        .getElementById("messageModal")
        .classList.add("active");

    createBurst();

}

function closeMessage() {

    document
        .getElementById("messageModal")
        .classList.remove("active");

}


/* ================= PROMISE ================= */

function showPromise() {

    document
        .getElementById("promiseModal")
        .classList.add("active");

    createBurst();

}

function closePromise() {

    document
        .getElementById("promiseModal")
        .classList.remove("active");

}


/* ================= FINAL SURPRISE ================= */

function finalSurprise() {

    const message =
        document.getElementById("finalMessage");

    message.classList.add("active");

    createHeartExplosion();

}


/* ================= FLOATING PARTICLES ================= */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "•",
        "✿"
    ];

    particle.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (Math.random() * 15 + 8) + "px";

    particle.style.animationDuration =
        (Math.random() * 8 + 6) + "s";

    document
        .getElementById("particles")
        .appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 15000);

}

setInterval(createParticle, 800);


/* ================= BURST ================= */

function createBurst() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✨",
        "🌸"
    ];

    for (let i = 0; i < 20; i++) {

        const item =
            document.createElement("div");

        item.innerHTML =
            symbols[
                Math.floor(Math.random() * symbols.length)
            ];

        item.style.position = "fixed";

        item.style.left = "50%";
        item.style.top = "50%";

        item.style.zIndex = "9999";

        item.style.pointerEvents = "none";

        item.style.fontSize =
            Math.random() * 20 + 15 + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 250 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        item.animate(
            [
                {
                    transform: "translate(-50%,-50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.3)`,

                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(item);

        setTimeout(() => item.remove(), 1300);

    }

}


/* ================= HEART EXPLOSION ================= */

function createHeartExplosion() {

    for (let i = 0; i < 50; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.fontSize =
            Math.random() * 25 + 10 + "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 500 + 100;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%,-50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        rotate(${Math.random() * 720}deg)
                        scale(1)`,

                    opacity: 0
                }
            ],
            {
                duration: Math.random() * 1800 + 1200,
                easing: "cubic-bezier(.1,.8,.2,1)"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 3200);

    }

}


/* ================= CLOSE MODAL OUTSIDE ================= */

window.addEventListener("click", (event) => {

    const messageModal =
        document.getElementById("messageModal");

    const promiseModal =
        document.getElementById("promiseModal");

    if (event.target === messageModal) {
        closeMessage();
    }

    if (event.target === promiseModal) {
        closePromise();
    }

});


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMessage();
        closePromise();

    }

});