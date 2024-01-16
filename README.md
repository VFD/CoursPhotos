
# <div style="text-align: center;">Cours Photos, Vidéos</div>

<div style="text-align: center;">&#128679; Mise à jour au fil de l'eau et des demandes &#128679;</div>

## Introduction

L'ensemble des fichiers sert de support pour des cours de photos et de vidéos. Ceux-ci sont dispensés actuellement au sein d'une entreprise via son CSE.
L'ensemble est en perpetuel évolution, les mises à jour se font en fonction des besoins.

L'idée a germée de tout mettre en oeuvre sur clé USB, au même principe qu'il y a des applications portables.

<hr>

## Fonctionnement

Il s'agit d'une proposition d'un cours photo au format HTML sur une clé USB ou un disque dur.
L'idée est d'avoir un sytème autonome capable de fonctionner sans connexion internet, sans sytème compliqué à ajouter (un serveur web par exemple).

Ce pourquoi l'ensempble des css et JavaScript sont intégrés au package.

Il y a bien sûr des liens vers des ressources sur le web car ce n'est pas intégrable ([Wikipédia](https://fr.wikipedia.org/), [YouTube](https://www.youtube.com/), etc.). Ces liens ne fonctionneront pas si il n'y a pas de connexion internet. Sur ce point on ne peut pas faire grand chose.

<hr>

## Les cours

### Comme enseignant
Il est possible soit de donner un cours en parcourant les différents sujets abordés et en ajoutant vos propre commentaires de façon orale.

<hr style="width: 33%">

### En autonomie

Il vous suffit de simplement lire les documents fournis.

<hr>

## Sujestions

La mise à jour est fonction des demandes de cours.
Quand une formation est demandé sur un sujet, alors il y a un cours créé sur le sujet.
Encore faut-il trouver le temps et les compétences pour la rédaction.

RAPPEL : Le système est donc en perpétuelle évolution. Merci de nous faire des retours pour tout ajout transformations, corrections, etc.

<hr>

## Installation

### Package

Télécharger l'ensemble du pakage et le mettre sur une clé USB.
Rien n'empêche de tout mettre sur un disque dur.

<hr style="width: 33%">

### via un serveur

Ce n'est pas la vocation première du projet mais c'est envisageable et cela devrait fonctionner correctement.

<hr style="width: 33%">

### En application

Packager le tout en application devrait être possible.

Nous n'avons pour le moment pas étudié plus avant cette possibilité, surtout du fait d'un manque de compétences dans ce modèle de production.

<hr style="width: 33%">

### Structure

L'ensemble est structuré de la manière suivante :

```
📂 Répertoire source
│
├── 📂 ateliers
│   ├── 📂 xxx
│   │   ├── 📄 xxx.html
│   │   └── 📄 README.md
│   │
│   ├── 📄 ateliers.html
│   └── 📄 README.md
│
├── 📂 cours
│   ├── 📂 astrophotographie
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 bases
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 editique
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 filtres
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 harcourt
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 hdr
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 macro
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 maths
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   ├── 📂 pauselongue
│   │   ├── 📄 fichiers html pour le cours
│   │   └── 📄 README.md
│   │
│   └── 📂 projet
│       ├── 📄 fichiers html pour le cours
│       └── 📄 README.md
│
├── 📂 css
│   ├── 📄 defaut.css
│   ├── 📄 w3.css
│   └── 📄 README.md
│
├── 📂 docs
│   ├── 📄 fichiers documents non html
│   └── 📄 README.md
│
├── 📂 images
│   ├── 📄 fichiers images utilisés dans l'ensemble du site
│   └── 📄 README.md
│
├── 📂 js
│   ├── 📄 fichiers JavaScript
│   └── 📄 README.md
│
├── 📄 index.html <- cliquer sur ce fichier
├── 📄 indexphoto.html
├── 📄 indexvideo.html
├── 📄 ressources.html
├── 📄 glossaire.html
└── 📄 README.md

```

Les fichiers Markdown README.md serve d'explications et sont directement interprétés par GITHUB.
Cela permet aux contributeurs de faire avancer le projet correctement.

Il est possible de les convertir au format HTML, ce n'est pas encore fait.

<hr style="width: 33%">

### Exécution

Simplement double cliquer sur le fichier index.html.

<hr>

## Version

Le système est en version alpha pour évaluation de la faisabilité.

En attente de retour d'utilisateurs pour améliorer et continuer le projet le cas échéant.

## Licence

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

Ce travail est sous licence 
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg