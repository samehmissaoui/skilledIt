Installation

Clonez le dépôt :

git clone <URL_DE_VOTRE_REPO>


Accédez au répertoire du projet :

cd skilled-it-react


Installez les dépendances :

npm install

Exécution en développement

Pour lancer le serveur en mode développement :

npm run dev


Le projet sera accessible sur :

http://localhost:5173


Le projet se recharge automatiquement lors des modifications du code.

Structure du projet
src/
├─ assets/
│  └─ images/          # Images pour le carrousel et les cours
├─ components/
│  ├─ Hero.jsx         # Section principale avec carrousel et infos du programme
│  ├─ CourseCard.jsx   # Carte d’un cours
│  └─ Footer.jsx       # Pied de page avec contacts et copyright
├─ contexts/
│  └─ LanguageContext.jsx # Gestion de la langue (EN/AR)
├─ data/
│  └─ coursesData.js   # Informations des cours et programme
├─ pages/
│  ├─ Home.jsx
│  ├─ Courses.jsx
│  └─ Contact.jsx
└─ App.jsx

Fonctionnalités

Multi-langues : Anglais / Arabe, avec bascule via bouton.

Page Courses :

Recherche par titre

Cartes de cours avec niveau, durée, objectifs et description

Page Contact :

Formulaire avec nom, email, sujet et message

Support RTL pour l’arabe

Hero :

Carrousel automatique avec flèches

Texte centré, multi-langues

Header & Footer :

Header sticky, navigation centrée

Footer avec informations de contact et droits d’auteur

Design :

Carte Program Info avec icônes bleues

Responsive et agréable visuellement

Commandes utiles
Commande	Description
npm install	Installer les dépendances
npm run dev	Lancer le serveur de développement
npm run build	Compiler pour la production
npm run lint	Vérifier le code avec ESLint
Notes importantes

Les images doivent être placées dans src/assets/images/.

Les icônes sont importées depuis react-icons.

La langue par défaut est l’anglais.

Le texte arabe est correctement aligné à droite dans toutes les sections concernées.