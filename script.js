// ======================================
// PERSONALIZE YOUR FIVE GIFTS HERE
// ======================================

const gifts = [
  {
    name: "Peachy",
    password: "mistletoe",
    title: "A little reminder ♡",
    date: "December 25, 2026",
    message: `Dear you,

Write your first personal letter here.

You can make this as long as you like.
Every word will appear inside this little present.

With love.`,
    signature: "Always yours ♡"
  },

  {
    name: "Light",
    password: "spirit",
    title: "Remember when...",
    date: "December 25, 2026",
    message: `Dear you,

Write your second letter here.

Maybe a favorite memory, a story, or
something you want them to remember.

I hope this makes you smile.`,
    signature: "With love ♡"
  },

  {
    name: "Yadira",
    password: "serenity",
    title: "Something I want you to know",
    date: "December 25, 2026",
    message: `Dear you,

Write your third letter here.

This space is yours to fill with anything
you want to say.`,
    signature: "Forever ♡"
  },

  {
    name: "Inky",
    password: "wonder",
    title: "Just because...",
    date: "December 25, 2026",
    message: `Dear you,

Your fourth letter goes here.`,
    signature: "Yours ♡"
  },

  {
    name: "Ale",
    password: "carolz",
    title: "One last little surprise",
    date: "December 25, 2026",
    message: `Dear you,

Your final letter goes here.`,
    signature: "Merry Christmas ♡"
  }
];

let selectedGift = null;


// ======================================
// CREATE THE FIVE PRESENTS
// ======================================

const giftContainer = document.getElementById("gifts");

gifts.forEach((gift, index) => {
  const button = document.createElement("button");

  button.className = "gift";
  button.type = "button";

  button.innerHTML = `
    <span class="bow">🎀</span>
    <span class="lid"></span>
    <span class="gift-box"></span>
    <span class="gift-label">${gift.name}</span>
  `;

  button.onclick = () => openGift(index);

  giftContainer.appendChild(button);
});


// ======================================
// OPEN A GIFT
// ======================================

function openGift(index) {
  selectedGift = gifts[index];

  document.getElementById("password").value = "";
  document.getElementById("error").textContent = "";

  document.getElementById("passwordModal")
    .classList.add("active");

  setTimeout(() => {
    document.getElementById("password").focus();
  }, 100);
}


// ======================================
// CHECK THE PASSWORD
// ======================================

function unlockGift() {
  if (!selectedGift) return;

  const entered = document.getElementById("password").value;

  if (entered === selectedGift.password) {

    document.getElementById("passwordModal")
      .classList.remove("active");

    document.getElementById("letterTitle").textContent =
      selectedGift.title;

    document.getElementById("letterDate").textContent =
      selectedGift.date;

    document.getElementById("letterContent").textContent =
      selectedGift.message;

    document.getElementById("letterSignature").textContent =
      selectedGift.signature;

    setTimeout(() => {
      document.getElementById("letterModal")
        .classList.add("active");
    }, 350);

  } else {

    document.getElementById("error").textContent =
      "Oops! That's not quite right. Try again ♡";

  }
}


// ======================================
// CLOSE THE PASSWORD WINDOW
// ======================================

function closeModal() {
  document.getElementById("passwordModal")
    .classList.remove("active");

  selectedGift = null;
}


// ======================================
// CLOSE THE LETTER
// ======================================

function closeLetter() {
  document.getElementById("letterModal")
    .classList.remove("active");
}


// ======================================
// PRESS ENTER TO UNLOCK A GIFT
// ======================================

document.getElementById("password").addEventListener(
  "keydown",
  event => {
    if (event.key === "Enter") {
      unlockGift();
    }
  }
);


// ======================================
// CLICK OUTSIDE TO CLOSE MODALS
// ======================================

document.getElementById("passwordModal")
  .addEventListener("click", event => {
    if (event.target.id === "passwordModal") {
      closeModal();
    }
  });

document.getElementById("letterModal")
  .addEventListener("click", event => {
    if (event.target.id === "letterModal") {
      closeLetter();
    }
  });
