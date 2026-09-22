---
name: doporuceny-jedalnicek
description: Vypočíta denný kalorický cieľ používateľa (podľa veku, výšky, váhy, pohlavia, úrovne pohybu a zvoleného cieľa - udržať váhu alebo schudnúť) a na základe toho, čo už za deň zjedol, odporučí čo a koľko ešte zjesť/vypiť. Použi po zručnosti odhad-kalorii alebo keď používateľ chce jedálniček/radu, čo ešte zjesť.
---

# Odporúčaný jedálniček (zvyšok dňa)

Táto zručnosť počíta kalorický cieľ a odporúčania **výhradne vlastným výpočtom v texte** (podľa nižšie uvedených vzorcov) — žiadny skript, kód ani externý nástroj sa nepoužíva.

## Profil používateľa (predvolené hodnoty)

Pokiaľ používateľ neuvedie iné údaje, použi tento profil:

- Muž, 50 rokov
- Výška 190 cm, hmotnosť 105 kg
- Sedavé zamestnanie (minimálny pohyb)

Ak používateľ uvedie iné údaje (vek, výška, váha, pohlavie, aktivita), **použi jeho hodnoty**, nie predvolené.

## 1. Zisti cieľ

Ak používateľ nepovedal, či chce **udržať váhu** alebo **schudnúť**, spýtaj sa na to najprv (je to zásadná vetva výpočtu). Prípadne "pribrať" ak by o to niekedy išlo, ale primárne rieš udržanie/schudnutie.

## 2. Vypočítaj bazálny metabolizmus (BMR) — Mifflin-St Jeor

- Muž: `BMR = 10 × hmotnosť(kg) + 6,25 × výška(cm) − 5 × vek + 5`
- Žena: `BMR = 10 × hmotnosť(kg) + 6,25 × výška(cm) − 5 × vek − 161`

Pre predvolený profil (105 kg, 190 cm, 50 rokov, muž): `BMR ≈ 1993 kcal`.

## 3. Prepočítaj na celkový denný výdaj (TDEE) podľa aktivity

Vynásob BMR koeficientom aktivity:

| Úroveň aktivity | Koeficient |
|---|---|
| Sedavá práca, takmer žiadny pohyb | × 1,2 |
| Ľahká aktivita (1–3× týždenne) | × 1,375 |
| Stredná aktivita (3–5× týždenne) | × 1,55 |
| Vysoká aktivita (denne / fyzická práca) | × 1,725 |

Pre predvolený profil (sedavé zamestnanie): `TDEE ≈ 1993 × 1,2 ≈ 2392 kcal`.

## 4. Stanov denný kalorický cieľ podľa zvolenej vetvy

- **Udržať váhu** → cieľ = TDEE (zaokrúť na desiatky).
- **Schudnúť** → cieľ = TDEE − 15 až 20 % (deficit cca 400–500 kcal), t.j. pri predvolenom profile cca **1900–2000 kcal/deň**.
  - Nikdy neodporúčaj menej ako **1500 kcal/deň** pre muža bez toho, aby si upozornil, že nižší príjem už treba konzultovať s lekárom/nutričným terapeutom.
  - Odporúčaj tempo schudnutia max. cca 0,5–1 kg/týždeň (deficit cca 3500–7000 kcal/týždeň rozložený do dní).

## 5. Zohľadni, čo už bolo zjedené

Ak používateľ (napr. cez zručnosť `odhad-kalorii`) uviedol, koľko kcal už dnes zjedol/vypil:

`Zostávajúci rozpočet = Denný cieľ − už zjedené kcal`

Ak je zostávajúci rozpočet záporný alebo veľmi nízky, jasne to povedz (deň už prekročil cieľ) a odporuč skôr ľahšiu, nízkokalorickú večeru / viac pohybu, nie ďalšie hladovanie.

## 6. Odporuč makro-rozklad zostávajúceho rozpočtu

Orientačne rozdeľ zostávajúce kalórie:

- **Bielkoviny**: cca 1,6–2,0 g/kg telesnej hmotnosti **za celý deň** (pri schudnutí vyššie, kvôli sýtosti a udržaniu svalovej hmoty) → z toho odpočítaj, čo už zjedol, a zvyšok gramov bielkovín rozlož do zostávajúcich jedál.
- **Tuky**: cca 25–30 % z celkového denného cieľa.
- **Sacharidy**: doplnok do zostávajúcich kalórií.

## 7. Daj konkrétne, praktické návrhy jedla/nápojov

Na základe zostávajúceho kalorického aj makro rozpočtu navrhni **2–3 konkrétne varianty**, čo zjesť/vypiť do konca dňa (napr. "grilované kuracie prsia 150 g + zelenina + pol hrsti ryže", "tvaroh 250 g + ovocie", "zeleninová polievka + vajíčko"). Uprednostňuj bielkoviny, zeleninu a vlákninu pred ďalším alkoholom/sladkými nápojmi, ak si už deň vyčerpal kalorický priestor.

## 8. Formát výstupu

Zhrň prehľadne:

1. Denný kalorický cieľ (a ako vznikol: BMR → TDEE → úprava podľa cieľa).
2. Koľko už bolo zjedené (ak je známe) a zostávajúci rozpočet.
3. Odporúčaný makro-rozklad zostávajúceho rozpočtu (bielkoviny/tuky/sacharidy v gramoch).
4. 2–3 konkrétne návrhy jedla/nápojov na zvyšok dňa.

## Dôležité zásady

- Vzorce počítaj priamo v texte "z hlavy" — nepíš a nespúšťaj žiadny skript ani kód (.py, .ps1, .js a pod.).
- Ide o orientačný odhad, nie o lekárske ani nutričné poradenstvo — pri väčších zmenách stravy, rýchlom chudnutí alebo zdravotných obmedzeniach odporuč konzultáciu s lekárom/nutričným terapeutom.
- Odpovedaj v jazyku, v ktorom sa pýta používateľ (predvolene slovensky).
