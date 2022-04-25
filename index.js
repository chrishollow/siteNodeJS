// import du module express
const express = require('express');
// import du module path, pour manipuler les chemins
const path = require('path');

// création de l'application
const app = express();

// définition du port d'écoute
const PORT = 6969;



// définition d'un dossier public contenant les ressources (CSS, JS, images,...) utilisées par le projet
app.use(express.static(path.join(__dirname, 'public/media')));

// route pour la page d'accueil
app.get('/', function (req, res) {
    res.render("accueil.ejs", { titre: "Accueil" });
});

// nouvelle route pour la page Aventure
app.get('/aventure', function (req, res) {
    res.render("aventure.ejs", { titre: "Aventure" });
});

// nouvelle route pour la page Presentation
app.get('/presentation', function (req, res) {
    res.render("presentation.ejs", { titre: "Presentation" });
});

// nouvelle route pour la page Realisation
app.get('/realisation', function (req, res) {
    res.render("realisation.ejs", { titre: "Realisation" });
});





// se mettre à l'écoute du port 6969
app.listen(PORT);
console.log("Express est démarré sur le port " + PORT);
