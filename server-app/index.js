const http = require("http")
const app = require("./app")

PORT = process.env.PORT || 4000
/*
    on charge en dehors de l'appli (dans un fichier .env) client les variables sensibles
    4000: port en local
*/

//création d'un serveur http et on va le relier directement à notre application
const server = http.createServer(app)

//lancement de la fonction d'ecoute
server. listen(PORT, () => {
    console.log("le serveur ets lancé en écoute sur le port :", PORT)
})