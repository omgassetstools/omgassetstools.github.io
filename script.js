// Edit these lists to add, remove or update portfolio projects.
// Use a normal image URL for image. For an itch.io embed, set itchEmbed to its widget URL.
const games = [
  {
    title: "Hexon Rush",
    description: "Hexon Rush is a time limited puzzle game with a little bit of sci-fi look.",
    type: "WebGL",
    image: "assets/games/hexon.png",
    url: "https://owlmagames.itch.io/hexon-rush",
  },
  {
    title: "Bubble Escape",
    description: "Navigate the bubbles to the exit without getting popped by the spikes.",
    type: "WebGL",
    image: "assets/games/bubble escape.jpg",
    url: "https://owlmagames.itch.io/bubble-escape",
  },
  {
    title: "Shish Fruit",
    description: "Aim and shoot the falling juicy fruits of many types.",
    type: "WebGL",
    image: "assets/games/shish fruit.jpg",
    url: "https://owlmagames.itch.io/shish-fruit",
    // Optional: paste an itch.io embed URL here to show the widget instead of the image.
    // itchEmbed: "https://itch.io/embed/123456"
  },
];

const assets = [
  {
    title: "Play Mode State Scrubber",
    description: "Record state changes for selected properties in Play Mode. (NOT AVAILABLE YET)",
    type: "UNITY TOOL",
    image: "assets/assetstools/not released placeholder - dark.png",
    url: "",
  },
  // {
    // title: "Stylized Asset Pack",
    // description: "Describe the models, materials or other content included in this asset pack.",
    // type: "3D ASSETS",
    // image: "assets/project-placeholder-3.svg",
    // url: "https://itch.io/game-assets",
  // },
  // {
    // title: "Development Utility",
    // description: "A short description of a useful script, system or workflow improvement.",
    // type: "SCRIPT",
    // image: "assets/project-placeholder-1.svg",
    // url: "https://github.com/",
  // },
];

function createCard(item) {
  const article = document.createElement("article");
  article.className = "project-card";

  if (item.itchEmbed) {
    const frame = document.createElement("iframe");
    frame.src = item.itchEmbed;
    frame.title = `${item.title} itch.io widget`;
    frame.loading = "lazy";
    frame.allow = "fullscreen";
    frame.style.cssText = "width:100%;height:167px;border:0;display:block;background:transparent;";
    article.appendChild(frame);
  } else {
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", `Open ${item.title} in a new tab`);

    const imageWrap = document.createElement("div");
    imageWrap.className = "card-image-wrap";
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = `${item.title} preview`;
    image.loading = "lazy";
    imageWrap.appendChild(image);
    link.appendChild(imageWrap);
    article.appendChild(link);
  }

  const title = document.createElement("h2");
  title.className = "card-title";
  if (item.itchEmbed) {
    const titleLink = document.createElement("a");
    titleLink.href = item.url;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.style.cssText = "color:inherit;text-decoration:none;";
    titleLink.textContent = item.title;
    title.appendChild(titleLink);
  } else {
    // The title links to the same destination as the preview image.
    const titleLink = document.createElement("a");
    titleLink.href = item.url;
    titleLink.target = "_blank";
    titleLink.rel = "noopener noreferrer";
    titleLink.style.cssText = "color:inherit;text-decoration:none;";
    titleLink.textContent = item.title;
    title.appendChild(titleLink);
  }

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = item.description;
  const type = document.createElement("span");
  type.className = "card-type";
  type.textContent = item.type;

  article.append(title, description, type);
  return article;
}

function renderCards(items, targetId) {
  const target = document.getElementById(targetId);
  items.forEach(item => target.appendChild(createCard(item)));
}

renderCards(games, "gamesGrid");
renderCards(assets, "assetsGrid");

const body = document.body;
const homeUI = document.getElementById("homeUI");

function closePanels() {
  body.classList.remove("games-open", "assets-open");
}

document.getElementById("openGames").addEventListener("click", () => {
  body.classList.remove("assets-open");
  body.classList.add("games-open");
});
document.getElementById("openAssets").addEventListener("click", () => {
  body.classList.remove("games-open");
  body.classList.add("assets-open");
});
document.getElementById("returnFromGames").addEventListener("click", closePanels);
document.getElementById("returnFromAssets").addEventListener("click", closePanels);
document.getElementById("homeLogo").addEventListener("click", closePanels);
document.querySelector(".developer-name").addEventListener("click", event => {
  event.preventDefault();
  closePanels();
});
document.getElementById("year").textContent = new Date().getFullYear();

// Escape key is a convenient way to return to the split-screen home view.
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closePanels();
});
