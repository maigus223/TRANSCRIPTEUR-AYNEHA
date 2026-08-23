# Transcripteur Latin → AYNEHA

**Transcripteur Latin → AYNEHA** est un outil de transcription phonétique qui convertit un texte saisi en alphabet latin (sous sa forme phonétique songhay) vers l'**AYNEHA**, le système d'écriture dédié à la langue **songhay**.

🔗 **Démo en ligne** : [maigus223.github.io/TRANSCRIPTEUR-AYNEHA](https://maigus223.github.io/TRANSCRIPTEUR-AYNEHA/)

## Qu'est-ce qu'AYNEHA ?

AYNEHA est un alphabet original, monocaméral (sans majuscules/minuscules), qui se lit et s'écrit de droite à gauche (RTL). Il a été conçu spécifiquement pour transcrire fidèlement les sons de la langue songhay — nasalisation, gémination, consonnes muettes, digraphes — que l'alphabet latin classique ne restitue pas toujours avec précision.

## Fonctionnalités

- **Conversion automatique** du texte latin saisi vers l'alphabet AYNEHA, en temps réel
- **Application des règles phonétiques du songhay** (voir ci-dessous)
- **9 touches de saisie rapide** pour les caractères phonétiques spéciaux non présents sur un clavier standard : `ŋ ɲ ɛ ɔ` (consonnes/voyelles nasales et ouvertes) et `ã ẽ ĩ õ ũ` (voyelles nasalisées)
- **Copie en un clic** du résultat, soit sous forme de texte AYNEHA, soit sous forme de codes Unicode bruts
- **Mode débogage** affichant le détail de la tokenisation, mot par mot, pour vérifier comment chaque règle a été appliquée
- **Progressive Web App (PWA)** : installable sur téléphone ou ordinateur, et utilisable **hors-ligne** une fois installée

## Règles de transcription appliquées

| Règle | Résultat |
|---|---|
| voyelle + n (simple) | nasalisation de la voyelle |
| *Exception* : voyelle+n en fin de mot, si le mot fait **plus de 3 lettres** | pas de nasalisation — le "n" redevient une consonne finale muette |
| lettre doublée | gémination |
| consonne suivie d'une autre consonne, ou en fin de mot | muette (nue) |
| sh / š | → Σ |
| c / tch | → TΣ |
| dj / di + voyelle | → DJ |
| *Exception* : "dii" | → D + I doublé (et non DJI) |
| ng (hors contexte vocalique) / ŋ | → Ŋ |
| voyelle + ng | → voyelle nasalisée + g (séparé) |
| gn / ny / ni + voyelle | → Ɲ |
| *Exception* : "nii" | → N + I doublé (et non Ɲ) |
| v | → w |
| ɛ, ɔ | saisis directement (déjà en forme ouverte) |
| virgule et point-virgule | → glyphes AYNEHA dédiés |
| autre ponctuation | conservée telle quelle |

## Comment ça marche

1. Ouvrez la page (ou l'app installée)
2. Tapez votre texte en latin, en respectant l'orthographe phonétique du songhay
3. Utilisez les touches rapides pour insérer les caractères spéciaux (ŋ, ɲ, ɛ, ɔ, ã, ẽ, ĩ, õ, ũ) si votre clavier ne les propose pas
4. Le résultat en AYNEHA s'affiche automatiquement, à droite, en écriture droite-à-gauche
5. Copiez le texte AYNEHA ou les codes Unicode selon votre besoin

## Technique

- Application 100 % **HTML / CSS / JavaScript**, sans dépendance externe
- Fonctionne entièrement **côté client** (aucune donnée envoyée à un serveur)
- Les glyphes AYNEHA occupent la Zone d'Usage Privé Unicode (**U+E000 à U+E061**) et nécessitent la police dédiée **Ayneha-Regular.ttf** pour s'afficher correctement
- Structure PWA complète : `manifest.json` + `service worker` (`sw.js`) pour l'installation et le fonctionnement hors-ligne

## Projet AYNEHA

Ce transcripteur fait partie d'un écosystème plus large développé autour de l'alphabet AYNEHA : police numérique, clavier virtuel Android, calculatrice, et autres outils à venir, avec pour objectif de rendre l'écriture songhay pleinement utilisable au quotidien, à l'écrit comme au numérique.

---

**Concepteur et créateur : Mahamadou Issiaka MAIGA (MAIGUS)**

## Structure

- `index.html` — application principale
- `manifest.json` — configuration d'installation
- `sw.js` — service worker (fonctionnement hors-ligne)
- `icons/` — icônes de l'application

---
© Mahamadou Issiaka MAIGA (MAIGUS)
