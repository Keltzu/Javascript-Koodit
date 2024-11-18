
const names = ["John", "Paul", "Jones"];


const targetElement = document.getElementById("target");


let listItemsHTML = "";


for (let i = 0; i < names.length; i++) {
    listItemsHTML += `<li>${names[i]}</li>`;
}


targetElement.innerHTML = listItemsHTML;
