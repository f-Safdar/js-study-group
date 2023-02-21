let articulo = document.getElementById("article");
let precio = document.getElementById("price");

let listArticles = document.getElementById("list");
let totalMSG = document.getElementById("total"); 

let total = 0;


function agregarAticket(){
    let articleStr = article.value;
    let priceStr = precio.value;


    let listElement = document.createElement("li");
    listElement.innerHTML = articleStr + " $" + priceStr;

    listArticles.appendChild(elementoLista);


    article.value = "";
    price.value = "";

    
    total = total + priceStr; 
    console.log(total);
}