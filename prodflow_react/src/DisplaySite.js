import React from "react";

export default function DisplaySite(props) {
  let line = props.siteInfo;
  //console.log("DisplaySite line = ", line);
  //console.log("props.selectedRadio = ", props.selectedRadio);

  for (let i = 0; i < line.length; i += 1)
    if (props.selectedRadio === line[i].siteNom)
      return (
        <div>
          <h3>
            {" "}
            {line[i].siteId} Site de: {line[i].siteNom}{" "}
          </h3>{" "}
          <p>
            <em>Adresse : {line[i].adresse}</em>
          </p>
        </div>
      );
}
