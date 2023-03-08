//importation des paquets à utiliser
const mongoose = require("mongoose") //gestion de la base de données
const uniqueValidator = require('mongoose-unique-validator')

//uniqueValidator : utilisé pour rendre un attribut unique

//préparation d'un modèle (table de données)
const UserSchema = mongoose.Schema({
    nom: {type: String},
    annee: {type: String},
    mention: {type: String},
    email: {type: String, unique: true}, //rendre l'email unique
    tel: {type: String},
    pwd: {type: String},
})

//Application pour rendre l'attribut email unique
UserSchema.plugin(uniqueValidator)

//exportation du modèle User et application dans la base de données
exports.User = mongoose.model("User", UserSchema)

/*
    Vous pouvez ajouter autant de modèles que vous voulez ici ...
*/
