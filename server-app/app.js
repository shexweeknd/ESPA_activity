// importation des paquets à utiliser
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

/*
    bodyParser: permet de formater le corps de la requête envoyée par l'utilisateur
*/

const mongoose = require("mongoose")

// préparation à la connexion à la base de données
let db_url = "" // l'URL de la base de données locale ou en ligne
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// connexion à la base de données
mongoose.connection.once("open", () => {
    console.log("Connecté à la base de données...")
}).on("error", (error) => {
    console.log("La connexion à la base de données a échoué.\nErreur:", error)
})

// importation des routes
const routes = require("./routes")

// création d'une application Express
const app = express()

// cors: permet à notre application d'accepter les requêtes venant de l'extérieur
app.use(cors({
    origin: "*", // accepte toutes les sources, mais vous pouvez spécifier une source spécifique
    credentials: true
}))
// exemple: origin: ["https://lien1", "https://lien2"]

// bodyParser.urlencoded: permet à l'application de formater les données encodées en URL
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json()) // permet de formater les données envoyées au format JSON
app.use(routes)

// exportation
module.exports = app