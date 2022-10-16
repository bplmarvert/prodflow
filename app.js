
const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use(express.json())

// const path = require(); // no need a priori

app.get('/site-info', (req, res) => {
    res.json(siteProd)
})

let siteProd = {
    nom: 'Amilly',
    adresse: {rue: "Rue de la big pharma", ville:"Amilly"},
    lignes: [
        {nom: 'l1', nbProduits: 100},
        {nom: 'l2', nbProduits: 1000},
        {nom: 'l3', nbProduits: 50},
        {nom: 'l4', nbProduits: 200},
        {nom: 'l5', nbProduits: 250},
        {nom: 'l6', nbProduits: 500},
        {nom: 'l7', nbProduits: 780} 
    ]
  };

app.post('/new-production-line', (req, res) => {
    console.log(req.body.nom);
    let leNom = req.body.nom;
    siteProd.lignes.push({nom:leNom, nbProduits:0});
    res.send("data entered");
})

// méthode /production-line/:id/update qui permet de mettre à jour 
// le nombre d’unité produite par l’unité de production

app.post('/production-line/:id/update', (req, res) => {
    console.log(req.body.nom);
    let nb = req.body.nbProduits;
    let nl = req.body.nom;
    const index = siteProd.lignes.findIndex(ligne => ligne.nom === nl)
    siteProd.lignes[index].nbProduits = nb;
    res.send("data entered");
})

/*app.post('/production-line/update', (req, res) => {
    console.log(req.body.nom);
    id = req.body.nom;
    let nb = req.body.nbProduits;
    const index = siteProd.lignes.findIndex(ligne => ligne.nom === id)
    siteProd.lignes[index].nbProduits = nb;
    res.send("data entered");
})*/  // il faudrait passer à /production-line/:li/update
    // supposition: en créant un middleware

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})