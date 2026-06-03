"use strict";

// ── INTRO ANIMATION ──────────────────────────────────────────────
(function () {
  var overlay = document.getElementById("intro-overlay");
  if (!overlay) return;

  var el1 = document.getElementById("intro-line1");
  var el2 = document.getElementById("intro-line2");
  var el3 = document.getElementById("intro-line3");
  var cancelled = false;

  // ── Audio ──
  var audioCtx = null;

  function initAudio() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {}
  }

  function unlockAudio() {
    initAudio();
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  function playKey(isBackspace) {
    if (!audioCtx || audioCtx.state !== "running") return;
    var t = audioCtx.currentTime;
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(
      isBackspace ? 260 : 380 + Math.random() * 140,
      t
    );
    osc.frequency.exponentialRampToValueAtTime(55, t + 0.028);
    gain.gain.setValueAtTime(isBackspace ? 0.14 : 0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.032);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.035);
  }

  // ── Overlay control ──
  function fadeOut() {
    overlay.style.opacity = "0";
    setTimeout(function () { overlay.remove(); }, 600);
  }

  function skip() {
    if (cancelled) return;
    unlockAudio();
    cancelled = true;
    fadeOut();
  }

  overlay.addEventListener("click", skip);
  document.addEventListener("keydown", skip);

  // ── Helpers ──
  function delay(ms, cb) {
    setTimeout(function () { if (!cancelled) cb(); }, ms);
  }

  function typeText(el, text, speed, cb) {
    el.classList.add("typing");
    var i = 0;
    function tick() {
      if (cancelled) return;
      if (i < text.length) {
        el.textContent += text[i++];
        playKey(false);
        setTimeout(tick, speed + Math.round(Math.random() * 18));
      } else {
        el.classList.remove("typing");
        cb();
      }
    }
    tick();
  }

  function typeBurst(el, text, speed, cb) {
    el.classList.add("typing");
    var i = 0;
    function tick() {
      if (cancelled) return;
      if (i < text.length) {
        el.textContent += text[i++];
        playKey(false);
        setTimeout(tick, speed);
      } else {
        el.classList.remove("typing");
        cb();
      }
    }
    tick();
  }

  function deleteChars(el, count, speed, cb) {
    el.classList.add("typing");
    var i = 0;
    function tick() {
      if (cancelled) return;
      if (i < count) {
        el.textContent = el.textContent.slice(0, -1);
        i++;
        playKey(true);
        setTimeout(tick, speed);
      } else {
        el.classList.remove("typing");
        cb();
      }
    }
    tick();
  }

  // ── Sequence ──
  delay(300, function () {
    typeText(el1, "Hello and Welcome", 42, function () {
      delay(380, function () {
        typeText(el2, "I'm Kyle", 55, function () {
          delay(320, function () {
            typeText(el3, "A Senior ServiceNow Develoer", 38, function () {
              delay(420, function () {
                deleteChars(el3, 2, 80, function () {
                  typeText(el3, "per.", 52, function () {
                    delay(850, fadeOut);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
})();

// ── NAV SECTION HIGHLIGHTING & HAMBURGER ─────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll("#nav-links a");
  var hamburger = document.getElementById("hamburger");
  var navMenu = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { rootMargin: "-40% 0px -40% 0px" }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
});
