# fit-coach

Osobný "fitness coach" projekt. Existuje v dvoch podobách:

1. **Claude Code zručnosti** (`.claude/skills/`) — Claude počas rozhovoru odhadne kalorický príjem za deň a odporučí, čo ešte zjesť, podľa inštrukcií v `SKILL.md` súboroch (žiadny Python/PowerShell skript, len text, ktorý interpretuje Claude).
2. **Statická webová aplikácia** (`index.html`, `cennik.html`, `style.css`, `script.js`) — tá istá logika (odhad kalórií + odporúčanie jedálnička), ale bežiaca priamo v prehliadači cez JavaScript. Nemá backend ani server — všetky výpočty prebiehajú client-side v `script.js`.

Repozitár: [github.com/adambodnar14/fit-coach](https://github.com/adambodnar14/fit-coach)

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

## Typický tok použitia (chat so zručnosťami)

1. Používateľ napíše, čo dnes zjedol/vypil → Claude použije `odhad-kalorii` a vráti odhad kcal.
2. Používateľ povie cieľ (udržať/schudnúť) → Claude použije `doporuceny-jedalnicek`, dopočíta cieľ a zostávajúci rozpočet a navrhne, čo ešte zjesť.

## Webová aplikácia

- [index.html](index.html) — profil, zadávanie zjedeného jedla (databáza potravín + ručný kcal vstup pre neznáme položky), výpočet BMR/TDEE/cieľa a odporúčanie receptov na zvyšok dňa.
- [cennik.html](cennik.html) — porovnanie plánov **Free** (3 odporúčania týždenne zdarma) a **Premium** (5 €/mesiac, neobmedzené odporúčania). Bez reálnej platobnej brány — obsahuje len demo prepínač, ktorý cez `localStorage` simuluje aktívne predplatné v danom prehliadači.
- Free limit (3× týždenne) sa počíta v `script.js` podľa ISO týždňa a ukladá do `localStorage` (`fitcoach_usage`, `fitcoach_premium`). Nejde o skutočné vynucovanie na serveri — dá sa obísť vymazaním `localStorage`, čo je pri statickej appke bez backendu očakávané obmedzenie.
- Spustenie: stačí otvoriť `index.html` dvojklikom v prehliadači, žiadny server sa nevyžaduje. `.claude/launch.json` slúži len na lokálny náhľad počas vývoja (Claude Code preview), nie je súčasťou samotnej appky.

## Zásady projektu

- Bez `.py`/`.ps1` skriptov — logika je buď v `SKILL.md` (pre chat so zručnosťami), alebo v `script.js` (pre webovú appku, keďže interaktívna webstránka vyžaduje JavaScript — iná cesta v prehliadači neexistuje).
- Odhady kalórií a odporúčania sú orientačné, nie lekárske/nutričné poradenstvo.
- Komunikácia prebieha v slovenčine (predvolene).
