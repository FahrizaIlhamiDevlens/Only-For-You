const text1 = "Hey… I’ve been wanting to tell you something 🤔";
const text2 = "Will you be my girlfriend?";

let i = 0;
let j = 0;

function typeTitle() {
  if (i < text1.length) {
    document.getElementById("title").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeTitle, 80);
  } else {
    setTimeout(typeSubtitle, 500); // lanjut ke h2
  }
}

function typeSubtitle() {
  if (j < text2.length) {
    document.getElementById("subtitle").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeSubtitle, 80);
  }
}

// mulai saat halaman dibuka
typeTitle();

















function yesThanks() {
  const music = document.getElementById("music");
  music.play(); // ini WAJIB dari klik user

  fetch("https://webhook.site/d54f6a5c-f70c-4920-89a7-804e99623a0a", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "Someone clicked YES 💖",
      time: new Date().toLocaleString()
    })
  });

  document.getElementById("tengkyu").innerText = "I Love You 💘";
}
