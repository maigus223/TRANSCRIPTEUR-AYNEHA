# Transcripteur AYNEHA

Outil web (PWA, utilisable hors connexion) qui transcrit le songhay tapé en lettres latines (forme phonétique) vers l'écriture **AYNEHA**, affichée de droite à gauche.

*Web tool (installable, offline-capable) that transcribes phonetic Songhay typed in Latin letters into the AYNEHA script, shown right to left.*

**En ligne / Live : https://maigus223.github.io/TRANSCRIPTEUR-AYNEHA/**
Site officiel : https://ayneha.org

## Règles de transcription
- voyelle + n (simple) = nasalisation ; lettre doublée = gémination
- consonne suivie d'une autre consonne, ou en fin de mot = muette
- sh / š → Σ · c / tch → TΣ · dj → DJ · ng / ŋ → Ŋ · gn / ny → Ɲ · v → w
- ɛ, ɔ saisis directement = voyelles ouvertes ; è / ê → ɛ, ô → ɔ
- virgule et point-virgule : glyphes AYNEHA ; point d'interrogation en miroir

## Fonctions
- Touches rapides : ŋ ɲ ɛ ɔ et voyelles nasales
- Copie **pour WhatsApp / Word** (texte déjà retourné pour les applications qui ne gèrent pas le droite-à-gauche), copie **en ordre normal**, copie des codes Unicode
- Détail de la transcription mot par mot, installation sur l'écran d'accueil

## Version 3.0
- Police **Ayneha Pro**, caractères du **plan 16** (U+10FF7C-U+10FFDD), comme le clavier, les applications et le site
- Vrai affichage de droite à gauche : le texte reste dans l'ordre de lecture, chaque caractère est placé de droite à gauche
- Thème bleu nuit et orange, nouveau logo
- Mises à jour automatiques : page servie « réseau d'abord » ; changer le même numéro dans `version.txt`, `manifest.json` et `sw.js` à chaque mise en ligne

## Développement
HTML/CSS/JS sans dépendance. La police `ayneha-pro.woff2` doit rester à côté de `index.html`.

## Contribuer
Un cas de transcription incorrect ? Ouvrez une *Issue* avec le mot saisi et le résultat attendu.

## Licence / License
- **Code** : GNU GPL v3.0 ou ultérieure (voir [LICENSE](LICENSE)). / Code: GNU GPL v3.0 or later.
- **Police Ayneha Pro** : SIL Open Font License 1.1 (voir [OFL.txt](OFL.txt)). / Font: SIL OFL 1.1.
- **Nom « AYNEHA », logos et identité visuelle** : non couverts par la GPL. / The AYNEHA name, logos and visual identity are not covered by the GPL.

**Concepteur et créateur : Mahamadou Issiaka MAIGA (MAIGUS)**
Contact : gwokmt2q@duck.com · Omniglot : https://www.omniglot.com/conscripts/ayneha.htm
