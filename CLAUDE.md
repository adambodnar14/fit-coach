# fit-coach

Osobný "fitness coach" projekt v Claude Code. Používateľ počas dňa opisuje, čo zjedol/vypil, a Claude:

1. odhadne celkový kalorický príjem za daný deň,
2. na základe profilu a zvoleného cieľa (udržať váhu / schudnúť) odporučí, čo a koľko ešte zjesť/vypiť do konca dňa.

Celá logika je riešená **len ako textové zručnosti (skills) pre Claude** — žiadny Python (`.py`), PowerShell (`.ps1`) ani iný skript sa v projekte nepoužíva. Výpočty a odhady robí Claude priamo "z hlavy" podľa inštrukcií v `SKILL.md` súboroch.

## Profil používateľa (predvolený)

- Muž, 50 rokov
- Výška 190 cm, hmotnosť 105 kg
- Sedavé zamestnanie (minimálna pohybová aktivita)

Tieto hodnoty sú predvolené vo zručnosti `doporuceny-jedalnicek`. Ak používateľ zadá iné údaje, majú prednosť.

## Zručnosti (`.claude/skills/`)

### `odhad-kalorii`
Vezme slovný popis jedla/nápojov za deň a odhadne celkový kalorický príjem (+ orientačný makro-rozklad). Výsledok je vždy oznámený ako **odhad ("cca")**, s tabuľkou položiek a súčtom.

### `doporuceny-jedalnicek`
Vypočíta denný kalorický cieľ:

`BMR (Mifflin-St Jeor) → TDEE (× koeficient aktivity) → úprava podľa cieľa (udržať / schudnúť, deficit 15–20 %)`

a na základe už zjedených kalórií (napr. z `odhad-kalorii`) odporučí zostávajúci kalorický a makro rozpočet + 2–3 konkrétne návrhy jedla na zvyšok dňa. Pri nízkom kalorickom cieli alebo rýchlom chudnutí upozorňuje na konzultáciu s lekárom/nutričným terapeutom.

## Typický tok použitia

1. Používateľ napíše, čo dnes zjedol/vypil → Claude použije `odhad-kalorii` a vráti odhad kcal.
2. Používateľ povie cieľ (udržať/schudnúť) → Claude použije `doporuceny-jedalnicek`, dopočíta cieľ a zostávajúci rozpočet a navrhne, čo ešte zjesť.

## Zásady projektu

- Bez skriptov — všetka logika je v prirodzenom jazyku v `SKILL.md` súboroch, ktoré interpretuje samotný Claude.
- Odhady kalórií a odporúčania sú orientačné, nie lekárske/nutričné poradenstvo.
- Komunikácia prebieha v slovenčine (predvolene).
