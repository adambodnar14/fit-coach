// ---------- Databáza potravín (hodnoty na 100 g / 100 ml) ----------
const FOOD_DB = [
  { key: "zemiaky", display: "Zemiaky varené", kcal: 86, protein: 1.9, carbs: 20, fat: 0.1, aliases: ["zemiaky", "zemiak", "varene zemiaky"] },
  { key: "hranolky", display: "Hranolky", kcal: 312, protein: 3.4, carbs: 41, fat: 15, aliases: ["hranolky", "vyprazane zemiaky"] },
  { key: "ryza", display: "Ryža varená (biela)", kcal: 130, protein: 2.7, carbs: 28, fat: 0.3, aliases: ["ryza", "biela ryza", "varena ryza"] },
  { key: "ryza_hneda", display: "Ryža varená (hnedá)", kcal: 123, protein: 2.7, carbs: 26, fat: 1, aliases: ["hneda ryza"] },
  { key: "cestoviny", display: "Cestoviny varené", kcal: 131, protein: 5, carbs: 25, fat: 1.1, aliases: ["cestoviny", "testoviny"] },
  { key: "chlieb_celozrnny", display: "Chlieb celozrnný", kcal: 247, protein: 9, carbs: 41, fat: 3.4, aliases: ["celozrnny chlieb", "chlieb celozrnny"] },
  { key: "chlieb", display: "Chlieb biely", kcal: 265, protein: 9, carbs: 49, fat: 3.2, aliases: ["chlieb", "biely chlieb"] },
  { key: "kuracie_prsia", display: "Kuracie prsia (varené/grilované)", kcal: 165, protein: 31, carbs: 0, fat: 3.6, aliases: ["kuracie prsia", "kuracie maso", "kuracie", "kura"] },
  { key: "kuracie_stehno", display: "Kuracie stehno pečené", kcal: 209, protein: 26, carbs: 0, fat: 10.9, aliases: ["kuracie stehno"] },
  { key: "hovedzie", display: "Hovädzie chudé varené", kcal: 217, protein: 26, carbs: 0, fat: 12, aliases: ["hovedzie", "hovadzie maso", "hovadzie"] },
  { key: "bravcove", display: "Bravčové karé pečené", kcal: 242, protein: 27, carbs: 0, fat: 14, aliases: ["bravcove", "bravcove karé", "brakove maso", "kare"] },
  { key: "losos", display: "Losos pečený", kcal: 206, protein: 22, carbs: 0, fat: 13, aliases: ["losos"] },
  { key: "tunak", display: "Tuniak vo vlastnej šťave", kcal: 116, protein: 26, carbs: 0, fat: 1, aliases: ["tunak", "tuniak"] },
  { key: "vajce", display: "Vajce", kcal: 155, protein: 13, carbs: 1.1, fat: 11, avgWeightG: 50, aliases: ["vajce", "vajcia", "vajicko"] },
  { key: "mlieko", display: "Mlieko polotučné", kcal: 47, protein: 3.4, carbs: 4.8, fat: 1.5, aliases: ["mlieko", "mlieko polotucne", "polotucne mlieko"] },
  { key: "mlieko_plnotucne", display: "Mlieko plnotučné", kcal: 64, protein: 3.2, carbs: 4.8, fat: 3.6, aliases: ["mlieko plnotucne", "plnotucne mlieko"] },
  { key: "jogurt", display: "Biely jogurt (light)", kcal: 55, protein: 4.5, carbs: 6, fat: 1.5, aliases: ["jogurt", "biely jogurt"] },
  { key: "tvaroh", display: "Tvaroh chudý", kcal: 98, protein: 18, carbs: 3.4, fat: 1, aliases: ["tvaroh"] },
  { key: "syr", display: "Syr eidam 30%", kcal: 306, protein: 27, carbs: 0, fat: 22, aliases: ["syr", "eidam"] },
  { key: "vlocky", display: "Ovsené vločky (suché)", kcal: 372, protein: 13, carbs: 60, fat: 7, aliases: ["vlocky", "ovsene vlocky", "ovos"] },
  { key: "banan", display: "Banán", kcal: 89, protein: 1.1, carbs: 23, fat: 0.3, avgWeightG: 120, aliases: ["banan"] },
  { key: "jablko", display: "Jablko", kcal: 52, protein: 0.3, carbs: 14, fat: 0.2, avgWeightG: 150, aliases: ["jablko"] },
  { key: "pomaranc", display: "Pomaranč", kcal: 47, protein: 0.9, carbs: 12, fat: 0.1, avgWeightG: 150, aliases: ["pomaranc"] },
  { key: "brokolica", display: "Brokolica varená", kcal: 35, protein: 2.4, carbs: 7, fat: 0.4, aliases: ["brokolica"] },
  { key: "zelenina", display: "Zelenina / šalát (mix)", kcal: 20, protein: 1.5, carbs: 3.5, fat: 0.2, aliases: ["zelenina", "salat", "mix salat"] },
  { key: "paradajka", display: "Paradajka", kcal: 18, protein: 0.9, carbs: 3.9, fat: 0.2, aliases: ["paradajka", "paradajky"] },
  { key: "uhorka", display: "Uhorka", kcal: 15, protein: 0.7, carbs: 3.6, fat: 0.1, aliases: ["uhorka"] },
  { key: "orechy", display: "Vlašské orechy", kcal: 654, protein: 15, carbs: 14, fat: 65, aliases: ["orechy", "vlasske orechy"] },
  { key: "mandle", display: "Mandle", kcal: 579, protein: 21, carbs: 22, fat: 50, aliases: ["mandle"] },
  { key: "olej", display: "Olivový olej", kcal: 884, protein: 0, carbs: 0, fat: 100, aliases: ["olej", "olivovy olej"] },
  { key: "maslo", display: "Maslo", kcal: 717, protein: 0.9, carbs: 0.1, fat: 81, aliases: ["maslo"] },
  { key: "med", display: "Med", kcal: 304, protein: 0.3, carbs: 82, fat: 0, aliases: ["med"] },
  { key: "cukor", display: "Cukor", kcal: 400, protein: 0, carbs: 100, fat: 0, aliases: ["cukor"] },
  { key: "pivo", display: "Pivo", kcal: 45, protein: 0.5, carbs: 3.6, fat: 0, aliases: ["pivo"] },
  { key: "vino", display: "Červené víno", kcal: 85, protein: 0.1, carbs: 2.6, fat: 0, aliases: ["vino", "cervene vino"] },
  { key: "sosovica", display: "Šošovica varená", kcal: 116, protein: 9, carbs: 20, fat: 0.4, aliases: ["sosovica"] },
  { key: "fazula", display: "Fazuľa varená", kcal: 127, protein: 8.7, carbs: 23, fat: 0.5, aliases: ["fazula"] },
  { key: "quinoa", display: "Quinoa varená", kcal: 120, protein: 4.4, carbs: 21, fat: 1.9, aliases: ["quinoa"] },
  { key: "avokado", display: "Avokádo", kcal: 160, protein: 2, carbs: 9, fat: 15, aliases: ["avokado"] },
  { key: "cuketa", display: "Cuketa", kcal: 17, protein: 1.2, carbs: 3.1, fat: 0.3, aliases: ["cuketa"] },
];

// ---------- Databáza receptov ----------
const RECIPES = [
  { name: "Grilované kuracie prsia s ryžou a zeleninou", kcal: 450, protein: 35, carbs: 40, fat: 12,
    text: "150 g kuracích pŕs, 50 g suchej ryže, 200 g zeleniny (paprika, cuketa), 1 lyžica olivového oleja. Ryžu uvarte, kura a zeleninu opečte na panvici s olejom, okoreňte." },
  { name: "Tvarohovo-ovocný pohár", kcal: 350, protein: 30, carbs: 30, fat: 8,
    text: "250 g chudého tvarohu, 1 banán alebo hrsť bobuľového ovocia, lyžička medu, škorica. Všetko premiešajte." },
  { name: "Šalát s tuniakom a vajcom", kcal: 380, protein: 30, carbs: 15, fat: 20,
    text: "1 plechovka tuniaka vo vlastnej šťave, mix šalátu, paradajky, uhorka, 1 vajce natvrdo, lyžica olivového oleja." },
  { name: "Omeleta so zeleninou a syrom", kcal: 400, protein: 24, carbs: 10, fat: 28,
    text: "3 vajcia, paprika, cibuľa, 20 g syra. Zeleninu opražte, zalejte rozšľahanými vajcami, dodajte syr." },
  { name: "Pečený losos so šalátom a avokádom", kcal: 500, protein: 35, carbs: 20, fat: 28,
    text: "150 g lososa upečte, podávajte so zeleninovým šalátom a polovicou avokáda." },
  { name: "Šošovicové kari s ryžou (vegetariánske)", kcal: 480, protein: 20, carbs: 75, fat: 8,
    text: "150 g varenej šošovice, 50 g ryže, cibuľa, kari korenie, trocha kokosového mlieka." },
  { name: "Grécky jogurt s vločkami a orechmi", kcal: 350, protein: 20, carbs: 35, fat: 12,
    text: "200 g bieleho jogurtu, 40 g ovsených vločiek, 15 g orechov, trocha ovocia." },
  { name: "Morčacie fašírky so zeleninou", kcal: 420, protein: 35, carbs: 15, fat: 20,
    text: "200 g mletého morčacieho mäsa upečte ako fašírky, podávajte s dusenou zeleninou." },
  { name: "Ľahká zeleninová polievka s kuracím mäsom", kcal: 250, protein: 20, carbs: 20, fat: 8,
    text: "Zeleninový vývar, 100 g kuracieho mäsa, koreňová zelenina. Vhodné ako ľahšia večera." },
  { name: "Proteínový smoothie", kcal: 350, protein: 20, carbs: 40, fat: 10,
    text: "200 ml mlieka, 1 banán, lyžica arašidového masla, prípadne proteín/jogurt. Rozmixujte." },
];

// ---------- Stav aplikácie ----------
const state = { items: [] };

function normalize(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

function findFood(name) {
  const n = normalize(name);
  if (!n) return null;
  for (const item of FOOD_DB) {
    if (item.aliases.some((a) => normalize(a) === n)) return item;
  }
  let best = null, bestLen = 0;
  for (const item of FOOD_DB) {
    for (const a of item.aliases) {
      const na = normalize(a);
      if (n.includes(na) || na.includes(n)) {
        if (na.length > bestLen) { best = item; bestLen = na.length; }
      }
    }
  }
  return best;
}

function fillDatalist() {
  const dl = document.getElementById("food-list");
  dl.innerHTML = FOOD_DB.map((f) => `<option value="${f.display}">`).join("");
}

function computeItemValues(item) {
  const grams = item.unit === "ks" ? item.amount * (item.food?.avgWeightG || 100) : item.amount;
  const per100 = item.food
    ? item.food
    : { kcal: item.manualKcal || 0, protein: item.manualProtein || 0, carbs: item.manualCarbs || 0, fat: item.manualFat || 0 };
  const factor = grams / 100;
  return {
    grams,
    kcal: per100.kcal * factor,
    protein: per100.protein * factor,
    carbs: per100.carbs * factor,
    fat: per100.fat * factor,
  };
}

function renderItems() {
  const tbody = document.getElementById("food-tbody");
  tbody.innerHTML = "";
  let totalKcal = 0;

  state.items.forEach((item, idx) => {
    const vals = computeItemValues(item);
    totalKcal += vals.kcal;

    const tr = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.food ? item.food.display : item.name;
    if (!item.food) {
      const note = document.createElement("div");
      note.className = "unmatched-note";
      note.textContent = "Neznáma položka — zadaj kcal/100 g:";
      const input = document.createElement("input");
      input.type = "number";
      input.className = "manual-kcal";
      input.min = 0;
      input.value = item.manualKcal || "";
      input.placeholder = "kcal/100g";
      input.addEventListener("input", (e) => {
        item.manualKcal = parseFloat(e.target.value) || 0;
        renderItems();
      });
      nameCell.appendChild(note);
      nameCell.appendChild(input);
    }

    const amountCell = document.createElement("td");
    amountCell.textContent = `${item.amount} ${item.unit}`;

    const kcalCell = document.createElement("td");
    kcalCell.textContent = `${Math.round(vals.kcal)} kcal`;

    const removeCell = document.createElement("td");
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "✕";
    removeBtn.title = "Odstrániť";
    removeBtn.addEventListener("click", () => {
      state.items.splice(idx, 1);
      renderItems();
    });
    removeCell.appendChild(removeBtn);

    tr.append(nameCell, amountCell, kcalCell, removeCell);
    tbody.appendChild(tr);
  });

  document.getElementById("total-kcal").innerHTML = `<strong>${Math.round(totalKcal)} kcal</strong>`;
}

function getEatenTotals() {
  return state.items.reduce(
    (acc, item) => {
      const v = computeItemValues(item);
      acc.kcal += v.kcal;
      acc.protein += v.protein;
      acc.carbs += v.carbs;
      acc.fat += v.fat;
      return acc;
    },
    { kcal: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

// ---------- Výpočet cieľa a odporúčania ----------
function calculateTarget() {
  const gender = document.getElementById("gender").value;
  const age = parseFloat(document.getElementById("age").value) || 0;
  const height = parseFloat(document.getElementById("height").value) || 0;
  const weight = parseFloat(document.getElementById("weight").value) || 0;
  const activity = parseFloat(document.getElementById("activity").value) || 1.2;
  const goal = document.getElementById("goal").value;

  const bmr = gender === "zena"
    ? 10 * weight + 6.25 * height - 5 * age - 161
    : 10 * weight + 6.25 * height - 5 * age + 5;
  const tdee = bmr * activity;

  let targetKcal = goal === "schudnut" ? tdee * 0.825 : tdee;
  const floor = gender === "zena" ? 1200 : 1500;
  let lowWarning = false;
  if (targetKcal < floor) { targetKcal = floor; lowWarning = true; }

  const proteinPerKg = goal === "schudnut" ? 2.0 : 1.6;
  const proteinTarget = weight * proteinPerKg;
  const fatTarget = (targetKcal * 0.28) / 9;
  const carbTarget = Math.max(0, (targetKcal - proteinTarget * 4 - fatTarget * 9) / 4);

  return { bmr, tdee, targetKcal, proteinTarget, fatTarget, carbTarget, lowWarning, goal };
}

function recommendRecipes(remainingKcal) {
  if (remainingKcal < 100) return [];
  return RECIPES
    .filter((r) => r.kcal <= remainingKcal + 120)
    .sort((a, b) => Math.abs(a.kcal - remainingKcal) - Math.abs(b.kcal - remainingKcal) || b.protein - a.protein)
    .slice(0, 3);
}

function renderResults() {
  const target = calculateTarget();
  const eaten = getEatenTotals();
  const remainingKcal = target.targetKcal - eaten.kcal;
  const remainingProtein = target.proteinTarget - eaten.protein;
  const remainingFat = target.fatTarget - eaten.fat;
  const remainingCarb = target.carbTarget - eaten.carbs;

  const summary = document.getElementById("result-summary");
  summary.innerHTML = "";

  if (target.lowWarning) {
    const warn = document.createElement("div");
    warn.className = "warning-box";
    warn.textContent = "Vypočítaný cieľ bol pod bezpečnou hranicou, preto bol navýšený na minimum. Pri výraznom obmedzení príjmu odporúčame konzultáciu s lekárom/nutričným terapeutom.";
    summary.appendChild(warn);
  }

  const lines = [
    ["BMR (bazálny metabolizmus)", `${Math.round(target.bmr)} kcal`],
    ["Celkový denný výdaj (TDEE)", `${Math.round(target.tdee)} kcal`],
    ["Denný kalorický cieľ", `${Math.round(target.targetKcal)} kcal`],
    ["Zjedené doteraz", `${Math.round(eaten.kcal)} kcal`],
    ["Zostávajúci rozpočet", `${Math.round(remainingKcal)} kcal`],
  ];
  lines.forEach(([label, value]) => {
    const div = document.createElement("div");
    div.className = "summary-line";
    div.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    summary.appendChild(div);
  });

  if (remainingKcal <= 0) {
    const warn = document.createElement("div");
    warn.className = "warning-box";
    warn.textContent = "Dnešný kalorický cieľ je už naplnený alebo prekročený. Odporúčame už len ľahkú, nízkokalorickú zeleninu alebo bylinkový čaj, prípadne krátku prechádzku.";
    summary.appendChild(warn);
  }

  const macrosDiv = document.getElementById("result-macros");
  macrosDiv.innerHTML = "";
  const macroGrid = document.createElement("div");
  macroGrid.className = "macro-grid";
  const macros = [
    ["Bielkoviny", Math.max(0, Math.round(remainingProtein)), "g"],
    ["Tuky", Math.max(0, Math.round(remainingFat)), "g"],
    ["Sacharidy", Math.max(0, Math.round(remainingCarb)), "g"],
  ];
  macros.forEach(([label, value, unit]) => {
    const box = document.createElement("div");
    box.className = "macro-box";
    box.innerHTML = `<div class="value">${value} ${unit}</div><div class="label">${label}</div>`;
    macroGrid.appendChild(box);
  });
  macrosDiv.appendChild(macroGrid);

  const recipesDiv = document.getElementById("result-recipes");
  recipesDiv.innerHTML = "";
  const recipes = recommendRecipes(remainingKcal);
  if (recipes.length === 0) {
    const p = document.createElement("p");
    p.textContent = remainingKcal <= 0
      ? "Pre zvyšok dňa nenavrhujeme plnohodnotné jedlo — priestor je už vyčerpaný."
      : "Zostávajúci rozpočet je malý — vhodná je len ľahká desiata (napr. zelenina, jogurt bez cukru) namiesto celého jedla.";
    recipesDiv.appendChild(p);
  } else {
    recipes.forEach((r) => {
      const div = document.createElement("div");
      div.className = "recipe";
      div.innerHTML = `
        <h4>${r.name}</h4>
        <div class="macros">~${r.kcal} kcal · B ${r.protein} g · S ${r.carbs} g · T ${r.fat} g</div>
        <p>${r.text}</p>
      `;
      recipesDiv.appendChild(div);
    });
  }

  document.getElementById("result-card").hidden = false;
  document.getElementById("result-card").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ---------- Event listeners ----------
document.addEventListener("DOMContentLoaded", () => {
  fillDatalist();

  document.getElementById("add-food-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("food-name");
    const amountInput = document.getElementById("food-amount");
    const unitSelect = document.getElementById("food-unit");

    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const unit = unitSelect.value;
    if (!name || !amount) return;

    const food = findFood(name);
    state.items.push({ name, amount, unit, food, manualKcal: 0, manualProtein: 0, manualCarbs: 0, manualFat: 0 });
    renderItems();

    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
  });

  document.getElementById("calc-btn").addEventListener("click", renderResults);
});
