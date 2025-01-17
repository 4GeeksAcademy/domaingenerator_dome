/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// creación de variables

function domainCombination() {
  let resultDomain = [];
  let pronoun = ["the", "our", "this"];
  let adj = ["amazing", "quick", "bright"];
  let noun = ["jogger", "racoon", "engineer", "designer"];
  let domain = [".com", ".it", ".es", ".mx"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let i2 = 0; i2 < adj.length; i2++) {
      for (let i3 = 0; i3 < noun.length; i3++) {
        for (let i4 = 0; i4 < domain.length; i4++) {
          let finalDomain = pronoun[i] + adj[i2] + noun[i3] + domain[i4];
          resultDomain.push(finalDomain);
        }
      }
    }
  }
  return resultDomain;
}
document.getElementById("generate").addEventListener("click", function() {
  const allDomain = domainCombination();
  const listaul = document.createElement("ul");

  for (let i = 0; i < allDomain.length; i++) {
    const elemList = document.createElement("li");
    elemList.textContent = allDomain[i];
    listaul.appendChild(elemList);
  }

  const container = document.getElementById("domaingen");
  container.innerHTML = "";
  container.appendChild(listaul);
});
