const express = require("express");
const mysql = require("mysql2");
let dbutils = require("./src/dbutils");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

let connection = dbutils.createConnection("root", "Quercinus", "projetlignes");

connection.query("SELECT * FROM LIGNES", (err, data) => {
  console.log(err);
  console.log(data);
  connection.end();
});

app.get("/site-info", (req, res) => {
  res.json(siteProd);
});

app.post("/new-production-line", (req, res) => {
  console.log(req.body.nom);
  let leNom = req.body.nom;
  siteProd.lignes.push({ nom: leNom, nbProduits: 0 });
  res.send("data entered");
});

// méthode /production-line/:id/update qui permet de mettre à jour
// le nombre d’unité produite par l’unité de production

app.post("/production-line/:id/update", (req, res) => {
  console.log(req.body.nom);
  let nb = req.body.nbProduits;
  let nl = req.body.nom;
  const index = siteProd.lignes.findIndex((ligne) => ligne.nom === nl);
  siteProd.lignes[index].nbProduits = nb;
  res.send("data entered");
});

/*app.post('/production-line/update', (req, res) => {
    console.log(req.body.nom);
    id = req.body.nom;
    let nb = req.body.nbProduits;
    const index = siteProd.lignes.findIndex(ligne => ligne.nom === id)
    siteProd.lignes[index].nbProduits = nb;
    res.send("data entered");
})*/ // il faudrait passer à /production-line/:li/update

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
