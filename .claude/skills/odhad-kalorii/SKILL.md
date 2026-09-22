---
name: odhad-kalorii
description: Odhadne cca. koľko kalórií (a makronutrientov) používateľ zjedol/vypil za daný deň na základe jeho slovného popisu jedla a nápojov. Použi, keď používateľ opíše čo jedol/pil a chce vedieť celkový kalorický príjem za deň.
---

# Odhad kalórií za deň

Táto zručnosť odhaduje kalorický príjem **len na základe vlastných znalostí o výžive** — bez akéhokoľvek skriptu, kalkulačky ani externého API. Ide vždy o **odhad (cca)**, nie o presné laboratórne meranie.

## Postup

1. **Získaj zoznam jedla a nápojov za deň.**
   Ak používateľ napíše len zoznam (napr. "raňajky: 2 rožky s maslom a šunkou, káva s mliekom; obed: kuracie prsia so ryžou; večer: 2 pivá a chipsy"), pracuj s tým. Ak chýba množstvo/porcia, **odhadni bežnú porciu** (napr. "rožok" = 50 g, "pivo 0,5 l") a v odpovedi to jasne označ ako predpoklad. Nepýtaj sa na každý detail — len ak je popis natoľko neurčitý, že odhad by bol zavádzajúci (napr. "jedol som niečo mäsité"), polož jednu spresňujúcu otázku.

2. **Priraď ku každej položke kalorickú hodnotu.**
   Vychádzaj zo všeobecne známych priemerných nutričných hodnôt (kcal na 100 g alebo na bežnú porciu/jednotku). Zohľadni spôsob prípravy (vyprážané vs. varené/grilované, s olejom/maslom navyše a pod.), keďže to výrazne mení kalorickú hodnotu.

3. **Vytvor prehľadnú tabuľku** so stĺpcami: Položka | Odhadované množstvo | Kcal (odhad).
   Na koniec pridaj súčet **"Celkovo cca X kcal"**.

4. **Uveď rozsah neistoty**, napr. "cca 2100–2400 kcal", namiesto falošne presného čísla, ak je odhad hrubý (veľa neznámych porcií).

5. **Krátko spomeň aj približný makro-rozklad** (bielkoviny / sacharidy / tuky v gramoch), ak je to z popisu jedla rozumné odhadnúť — pomôže to nadväzujúcej zručnosti `doporuceny-jedalnicek`.

6. **Na záver sa spýtaj alebo ponúkni nadväzný krok**: či si praje odporúčanie, čo dojesť/piť do konca dňa vzhľadom na svoj kalorický cieľ (na to slúži zručnosť `doporuceny-jedalnicek`).

## Dôležité zásady

- Nikdy netvár sa, že ide o presné laboratórne číslo — vždy zdôrazni slovo "cca"/"odhad".
- Nepoužívaj a nevytváraj žiadny skript, kód ani kalkulačku (.py, .ps1, .js a pod.) — odhad robíš priamo z vlastných znalostí o výžive, v texte.
- Ak používateľ uvedie alkohol, sladené nápoje či omáčky, nezabudni ich započítať — často sa na ne zabúda a výrazne menia súčet.
- Odpovedaj v jazyku, v ktorom sa pýta používateľ (predvolene slovensky).
