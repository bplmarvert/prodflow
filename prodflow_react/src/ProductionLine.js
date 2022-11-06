import React from "react";
import ReactDom from "react-dom/client";

export default function ProductionLine(props) {
  return (
    <li>
      Line {props.nom} comprimés fabriqués: {props.nbProduits}
    </li>
  );
}

ProductionLine({ nom: "l1", nbProduits: 45 });

/*             // Affichage de l'information d'un site
            //send a request to get Site data from the server
            fetch('site_info').then(response => { //response from server
                   return response.json()
                }).then(data =>{ 
                    let html = ShowSiteData(data)  // pour l'affichage des infos
                    addHtmlToElement(html, "#app")
                }
            )

            function forMap(obj){
                return `<li>Line ${obj.nom}       comprimés fabriqués: ${obj.nbProduits}</li>`
            }

            // ******************************************************************************* //
            function ShowSiteData(siteInfo){  
                //let lines = siteInfo.map(forMap).join("")  // tableau à transformer en texte
                console.log("consoleLog de siteInfo dans ShowSiteData", siteInfo)
                console.log(siteInfo)
                console.log('Dans ShowSiteData')
                let texteHtml = '';
                for (let i = 0; i < siteInfo.length; ++i){
                    if (i == 0) {
                        texteHtml += `<h3>                ${siteInfo[i].siteId}) Site de:   ${siteInfo[i].siteNom} </h3>
                            <p >Adresse:   ${siteInfo[i].adresse}   ${siteInfo[i].ville} </p> <ul>`;
                    } else {
                        if ((siteInfo[i].siteNom) != (siteInfo[i-1].siteNom)){
                        console.log(((i == 0) || (i>0 && ((siteInfo[i].nom) != (siteInfo[i-1].nom)))));
                        texteHtml += `</ul><h3>               ${siteInfo[i].siteId}) Site de:   ${siteInfo[i].siteNom} </h3>
                            <p >Adresse:   ${siteInfo[i].adresse}   ${siteInfo[i].ville} </p><ul>`;
                        //console.log("texteHTML = ", texteHtml);
                        }
                    }
                    texteHtml += `<li>Line ${siteInfo[i].nom}       comprimés fabriqués: ${siteInfo[i].nbProduits}</li>`;
                }
                texteHtml += `</ul>`;
                return texteHtml;
            }

            // Sélection des lignes d'un site

             function addHtmlToElement(html, elementSelector){
                let element = document.querySelector(elementSelector)
                element.innerHTML = html
            }

            // ******************************************************************************* //
            // ajout d'une ligne
            let url = 'http://localhost:3000/new-production-line'
            document.querySelector("#divajout").addEventListener("submit", event => { 
                    event.preventDefault()
                    let nom = document.getElementById("nom").value;
                    let siteId = Number(document.getElementById("siteId").value);
                    let nbProduits = 0;
                    console.log('************************')
                    console.log ("nom de la ligne: ", nom)
                    console.log ("siteId: ", siteId)
                    const response = fetch(url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'nom': nom, 'nbProduits': nbProduits, 'siteId': siteId}) // body data type must match "Content-Type" header
                });
                return response.JSON;
            })

            //send a request to get Site data from the server
               /*function selectTheLine(siteInfo){
                //let nb = siteInfo.lignes.length;
                //let obj = siteInfo.lignes
                let lines = siteInfo.map(forMap).join("")  // tableau à transformer en texte
                console.log(lines)
                return `<p> Choix de la ligne sur laquelle modifier le nombre de comprimés: </p>
                    <SELECT id='nbli' NAME="listline">
                        ${lines}
                    </SELECT>`
            }*/

/*           // Code pour utilisation de map - choix de la ligne pour mise a jour des comprimés
             function forCp(obj){
                return `<option value="line"> ${obj.nom} </option>`
            }

            // creation du code html: affiche la liste des lignes pour choix 
            function selectTheLine(siteInfo){
                //let nb = siteInfo.lignes.length;
                let obj = siteInfo; //.lignes;
                let lines = obj.map(forCp).join("")  // tableau à transformer en texte
                console.log(lines)
                return `<p> Choix de la ligne sur laquelle modifier le nombre de comprimés: </p>
                    <select id='nbli' NAME="listline">
                        ${lines}
                    </SELECT>`
            }

            // ******************************************************************************* //
            // modification du nombre de cp  Changement de route avec :id         
            document.querySelector("#modif").addEventListener("submit", event => {
                event.preventDefault()
                let idSite = document.getElementById("forSite").value
                console.log("idSite = ", idSite, "typeof(idSite) = ", typeof(idSite));
                let id = document.getElementById("nomli").value
                let nbcp = document.getElementById("nbcp").value 
                console.log ("nom ligne update : ", id)
                let url1 = `http://localhost:3000/production-line/${id}/update`
                console.log ("nbcp : ", nbcp)
                console.log (url1);
                console.log ("le fetch de l'ajout de Cp")
                const response = fetch(url1, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'siteId': idSite, 'nbProduits': nbcp}) //'nom': nom, au centre
                });
                return response.JSON;
            })
        )}*/
