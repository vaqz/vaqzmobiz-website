const services = [
  { code: "CPCT", name: "CapCut", category: "Creative" },
  { code: "DISN", name: "Disney+", category: "Entertainment" },
  { code: "PRME", name: "Prime Video", category: "Entertainment" },
  { code: "QUIL", name: "QuillBot", category: "Productivity" },
  { code: "VMAX", name: "VivaMax", category: "Entertainment" },
  { code: "VONE", name: "VivaOne", category: "Entertainment" },
  { code: "YTUP", name: "YouTube Premium", category: "Video & Music" },
  { code: "SPOT", name: "Spotify", category: "Music" },
  { code: "HBX", name: "HBO Max", category: "Entertainment" },
  { code: "IWNT", name: "iWantTFC", category: "Entertainment" },
  { code: "VIUX", name: "Viu", category: "Entertainment" },
  { code: "CNVA", name: "Canva", category: "Creative" },
  { code: "NBAP", name: "NBA", category: "Sports" },
  { code: "QUIZ", name: "Quizlet", category: "Education" },
  { code: "CHAT", name: "ChatGPT", category: "Productivity" },
  { code: "CROL", name: "Crunchyroll", category: "Entertainment" },
  { code: "PICS", name: "Picsart", category: "Creative" },
  { code: "IQYI", name: "iQIYI", category: "Entertainment" },
  { code: "WETV", name: "WeTV", category: "Entertainment" },
  { code: "DUO1", name: "Duolingo", category: "Education" },
  { code: "SCBD", name: "Scribd", category: "Reading & Education" },
  { code: "WOWP", name: "WOW Presents Plus", category: "Entertainment" },
  { code: "LOK1", name: "Loklok", category: "Entertainment" }
];

const codesEl = document.querySelector("#codes");
const searchEl = document.querySelector("#search");
const categoryEl = document.querySelector("#category");
const countEl = document.querySelector("#count");
const yearEl = document.querySelector("#year");

const categories = [...new Set(services.map(item => item.category))].sort();
for (const category of categories) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryEl.appendChild(option);
}

function render() {
  const query = searchEl.value.trim().toLowerCase();
  const category = categoryEl.value;
  const filtered = services.filter(item => {
    const matchesQuery = !query || `${item.code} ${item.name} ${item.category}`.toLowerCase().includes(query);
    const matchesCategory = category === "all" || item.category === category;
    return matchesQuery && matchesCategory;
  });

  countEl.textContent = `${filtered.length} service${filtered.length === 1 ? "" : "s"}`;
  codesEl.innerHTML = "";

  if (!filtered.length) {
    codesEl.innerHTML = `<div class="empty">No matching service code found.</div>`;
    return;
  }

  for (const item of filtered) {
    const card = document.createElement("article");
    card.className = "code-card";
    card.innerHTML = `<span class="code">${item.code}</span><h2>${item.name}</h2><div class="category">${item.category}</div>`;
    codesEl.appendChild(card);
  }
}

searchEl.addEventListener("input", render);
categoryEl.addEventListener("change", render);
yearEl.textContent = new Date().getFullYear();
render();
