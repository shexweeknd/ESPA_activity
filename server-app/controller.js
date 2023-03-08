//importation  des modeles 
const db = require("./models")

/*ici on importe tous les modeles dans la constante db*/

//on crée des fonctions qui permettent de gérer les utilisateurs
//et on les exporte directement pour pouvoir l'utiliser dans app

// Fonction pour gérer l'inscription d'un nouvel utilisateur
exports.signUp = async(req, res) => {
    // Récupération des informations de l'utilisateur depuis la requête HTTP
    /*{nom: "", annee: "", mention: "", email: "", tel: "", pwd: ""}*/

    //creation d'un nouvel utilisateur
    let new_user = new db.User({
        nom: body.nom,
        annee: body.annee,
        mention: body.mention,
        email: body.email,
        tel: body.tel,
        pwd: body.pwd
    })
    // Sauvegarde du nouvel utilisateur dans la base de données
    new_user.save().then(success=>{
        // La méthode save() renvoie un booléen (true si la sauvegarde s'est bien faite, false sinon)
        if(!success) 
            return res.send({isOk: false, msg: "Une erreur s'est produite !"})
        return res.send({isOk: true})
    })
}

// Fonction pour récupérer la liste de tous les utilisateurs
exports.getAllUser = async(req, res) => {
    // Récupération de tous les utilisateurs dans la base de données
    await db.User.find().then(usersList=>{
        // La méthode find() renvoie une liste d'utilisateurs
        if(!users[0]) 
            return {isOk: false, msg: "La table Utilisateur est vide !"}
        return res.send({isOk: true, users:usersList})
    })
}
