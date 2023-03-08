// Importation des packages à utiliser
const express = require("express");
const bodyParser = require("body-parser");

// Importation de notre contrôleur
const controller = require("./controller");

/*
Importation de la fonction Router() du module express pour gérer les routes.
La méthode Router() permet de créer une instance de routeur pour gérer les
requêtes HTTP.
*/
const router = express.Router();

// Route pour accéder au contrôleur signUp
// Cette route permet de créer un nouvel utilisateur via la méthode HTTP POST
router.post("/", controller.signUp);

// Route pour accéder au contrôleur getAllUser
// Cette route permet de récupérer la liste de tous les utilisateurs via la méthode HTTP GET
router.get("/get-all-users", controller.getAllUser);

// Exportation du routeur
module.exports = router;