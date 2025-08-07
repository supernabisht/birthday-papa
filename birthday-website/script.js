// Image paths for the slideshow
const photos = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

let current = 0;
let slideshowInterval = null;

// Start the slideshow
function startSlideshow() {
  const slide = document.getElementById('slideImage');
  slideshowInterval = setInterval(() => {
    current = (current + 1) % photos.length;
    slide.src = photos[current];
  }, 3000);
}

// Start confetti animation
function startConfetti() {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Show pop-up wishes
function showPopupWishes() {
  const wishes = [
    "You're the best dad ever! ❤️",
    "Wishing you health, happiness, and lots of cake! 🎂",
    "Thanks for always being my superhero! 🦸‍♂️",
    "Have a fantastic year ahead! 🎉"
  ];

  wishes.forEach((wish, index) => {
    setTimeout(() => {
      alert(wish);
    }, (index + 1) * 2000); // 2s gap between each alert
  });
}

// Main click handler
function showMessage() {
  alert("Hello, this is a message from Sana!!");

  const audio = document.getElementById('birthdaysong');
  audio.play();

  document.getElementById('slideshow').style.display = 'block';

  startSlideshow();
  startConfetti();
  showPopupWishes();
}
