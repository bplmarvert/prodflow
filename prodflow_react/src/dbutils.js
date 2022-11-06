const mysql = require("mySQL2");

function dataSiteDB(err, data) {
  // function to call back

  console.log("data = ", data);
  if (err) {
    console.log("err dans datasiteDB: ", err);
  }
  //console.log("Dans DataSiteDB");
  //console.log("err = ", err);
  return data;
}

// permet de declencher des fonctions avant l'execution de la requete
// next appelle le middleware suivant
function loggeMiddleware(req, res, next) {
  console.log("a new req was done");
  next();
}

/*app.post("/new-user",(request, response) =>{
    console.log("request.body", request.body)
    response.send("request receive !")
})*/

function createConnection(username, password, database) {
  let dbConfig = {
    user: username,
    password: password,
    database: database,
  };
  let connection = mysql.createConnection(dbConfig);
  return connection;
}
/*
function getUsers(connection){
    connection.query("SELECT * from USERS", (erreur, data) =>{
        console.log(erreur);
        console.log(data);
    });
}*/
function lineInserted(err, data) {
  console.log(err);
  console.log(data[0]);
}

function insertLine(connection, lineData, lineInserted) {
  // lineInserted est un callback
  console.log(lineData);
  connection.query(
    "INSERT INTO LIGNES (nom, nbProduits, siteId) VALUES (?, ?, ?);",
    [lineData.nom, lineData.nbProduits, lineData.siteId],
    lineInserted
  );
}

function modifyNbCp(connection, lineData) {
  console.log(lineData);
  connection.query(
    `UPDATE LIGNES set nbProduits = ? WHERE siteId = ? and nom = ?;`,
    [lineData.nbProduits, lineData.siteId, lineData.nom]
  );
}

function getSite(connection, onSiteDataReceive) {
  // fonction to callback en arg sans ()

  connection.query(
    "SELECT s.siteId, s.siteNom, s.adresse, s.ville, l.nom, l.nbProduits FROM SITE s join LIGNES l where s.siteId = l.siteId order by s.siteId, l.nom;",
    onSiteDataReceive
  ); // onSiteDataReceive recoit un tableau d'objets
}

function endConnection(connection) {
  connection.end(); // a faire
}

module.exports = {
  createConnection: createConnection,
  getSite: getSite,
  endConnection: endConnection,
  insertLine: insertLine,
  modifyNbCp: modifyNbCp,
};
