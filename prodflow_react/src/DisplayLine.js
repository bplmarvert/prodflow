import React from "react";

export default function DisplayLine({ line }) {
  //console.log("DisplayLine line = ", line);

  return (
    <p>
      Line no {line.nom} Nombre de cp fabriqués : {line.nbProduits}
    </p>
  );
}
