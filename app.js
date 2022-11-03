const express = require("express");
const app = express();
const port = 3000;

const dbutils = require("./src/dbutils.js");

app.use(express.static("public"));
app.use(express.json());

/*app.get('/site_info', (req, res) => {
    
    // definir la fonction de rappel dans la fonction
    function onSiteDataReceive(err, data){ // passée en callback à get site
        if (err) {
            console.log("erreur dans onSiteDataReceive ", err)
            return
        }
        res.json(data) 
        console.log("sortie de onSiteDataReceiver, les données sont OK") // res.json termine la connection ne pas mettre de connection.end()
        //connection.end()data en sortie de onSiteDataReceive appelée par app.get', data, "après dat
    }
    let connection = dbutils.createConnection('root', 'Quercinus', 'projetlignes')
    //console.log ('connection établie')
    let siteProd = dbutils.getSite(connection, onSiteDataReceive)
})*/

app.get("/site_info", (req, res) => {
  // version courte faite avec Laurent
  let connection = dbutils.createConnection(
    "root",
    "Quercinus",
    "projetlignes"
  );

  let siteProd = dbutils.getSite(connection, (err, data) => {
    if (err) {
      console.log("err ", err);
    }
    //console.log("err ", err)
    //console.log(data)
    res.json(data);
  });
}); // version =>

/*let siteProd = {
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
  };*/

/*app.post('/new-production-line', (req, res) => {
    console.log(req.body.nom);
    let leNom = req.body.nom;
    console.log(siteProd.lignes)
    const index = siteProd.lignes.findIndex(ligne => ligne.nom === leNom)
    console.log("index = ",index)
    if (index != -1)
        res.send("Cette ligne existe déjà");
    else{
        siteProd.lignes.push({nom:leNom, nbProduits:0});
        res.send("data entered");
}})*/

app.post("/new-production-line", (req, res) => {
  console.log(req.body);
  //console.log(req.params)
  let leNom = req.body.nom;
  let id = req.params.id;
  let connection = dbutils.createConnection(
    "root",
    "Quercinus",
    "projetlignes"
  );

  let siteProd = dbutils.insertLine(connection, req.body, (err, data) => {
    if (err) {
      console.log("err ", err);
    }
    //console.log("err ", err)
    //console.log(data)
    res.json(data);
  });
  /*const index = siteProd.lignes.findIndex(ligne => ligne.nom === leNom)
    console.log("index = ",index)
    if (index != -1)
        res.send("Cette ligne existe déjà");
    else{
        siteProd.lignes.push({nom:leNom, nbProduits:0});
        res.send("data entered");*/
});

// méthode /production-line/:id/update qui permet de mettre à jour
// le nombre d’unité produite par l’unité de production

app.post("/Change_nbCp", (req, res) => {
  // /:siteId
  console.log("ligne 105", req.body);
  let nbProduits = parseInt(req.body.nbProduits); // params dans la ligne de commande
  console.log("ligne 107 nbProduits = ", nbProduits);
  let nbLine = req.body.nom;
  let siteId = parseInt(req.body.siteId);
  console.log(
    "nbProduits = ",
    nbProduits,
    " nbLine = ",
    nbLine,
    " siteId = ",
    siteId
  );
  let connection = dbutils.createConnection(
    "root",
    "Quercinus",
    "projetlignes"
  );
  modifyNbCp(connection, {
    nbProduits: nbProduits,
    siteId: siteId,
    nom: nbLine,
  });
});

function modifyNbCp(connection, lineData) {
  console.log(lineData);
  connection.query(
    `UPDATE LIGNES set nbProduits = ? WHERE siteId = ? and nom = ?;`,
    [lineData.nbProduits, lineData.siteId, lineData.nom]
  );
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
