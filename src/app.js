/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// creación de variables

let pronoun = ["the", "our", "this", "that"];

let adj = ["amazing", "quick", "bright", "smart"];

let noun = ["jogger", "racoon", "engineer", "designer", "developer"];

let domain = [
  ".com",
  ".it",
  ".es",
  ".mx",
  ".net",
  ".org",
  ".info",
  ".biz",
  ".co",
  ".us",
  ".ca"
];

function domainCombination() {
  let resultDomain = [];

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
  let allDomain = domainCombination();
  // let generateDomain = Math.floor(Math.random() * allDomain.length);
  // let gen2 = allDomain[generateDomain];
  // let generateDomain = domainCombination();
  document.document.getElementById("domaingen").innerText = JSON.stringify(
    allDomain
  );
});

// crear variables
// cada variable debe de combinar 1 pronombre, un adj y un noun para generar un dominio.
// se trata de un string combinator
