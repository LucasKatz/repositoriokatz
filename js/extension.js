function saludar() {
    alert("¡Bienvenidos a la cocina de AliFer!");
}

saludar ();

let producto = prompt ("Ingresa el producto y te diré su precio. \n brownies con dulce de leche \n brownies con nuez \n magdalenas \n cookies de chocolate \n cookies con chips \n cookies surtidas \n pan de salvado \n trenza de pan sin semillas \n trenza de pan con semillas \n cañoncitos \n vigilantes \n medialunas \n calamares rellenos \n locro \n matambre \n torta personalizada \n huevo de pascua \n rosca de pascua \n pan dulce \n  (fin para ver el total).");
console.log(producto.toLowerCase());
let precio=0;

function calcular(){

while(productO!="fin"){
    switch(producto){
        case "brownies con dulce de leche":
            console.log("El brownie con dulce de leche sale $180");
            precio=precio+180;
            break;
        case "brownies con nuez":
            console.log("El brownie con nuez sale $200");
            precio=precio+200;
            break;
        case "magdalenas":
            console.log("La docena de magdalenas sale $400");
            precio=precio+400;
            break;
        case "cookies de chocolate":
            console.log("La docena de cookies de chocolate sale $220");
            precio=precio+220;
            break;
        case "cookies con chips":
            console.log("La docena de cookies con chips sale $250");
            precio=precio+250;
            break;
        case "cookies surtidas":
            console.log("La docena de cookies surtidas sale $200");
            precio=precio+200;
            break;
        case "pan de salvado":
            console.log("La barra de pan de salvado sale $350");
            precio=precio+350;
            break;
        case "trenza de pan sin semillas":
            console.log("La trenza de pan sin semillas sale $350");
            precio=precio+350;
            break;
        case "trenza de pan con semillas":
            console.log("La trenza de pan con semillas sale $400");
            precio=precio+400;
            break;
        case "cañoncitos":
            console.log("La docena de cañoncitos sale $550");
            precio=precio+550;
            break;
        case "vigilantes":
            console.log("La docena de vigilantes sale $500");
            precio=precio+500;
            break;
        case "medialunas":
            console.log("La docena de medialunas sale $480");
            precio=precio+480;
            break;
        case "calamares rellenos":
            console.log("La porción de calamares rellenos sale $600");
            precio=precio+480;
            break;
        case "locro":
            console.log("La porción de locro sale $900");
            precio=precio+900;
            break;
        case "matambre":
            console.log("El kilo de matambre sale $650");
            precio=precio+480;
            break;
        case "torta personalizada":
            console.log("El valor de la torta personalizada es de $3500");
            precio=precio+3500;
            break;
        case "huevo de pascua":
            console.log("El huevo de pascua sale $450");
            precio=precio+450;
            break;
        case "rosca de pascua":
            console.log("La rosca de pascua sale $700");
            precio=precio+480;
            break;
        case "pan dulce":
            console.log("el pan dulce sale $1200");
            precio=precio+1200;
            break;
        default:
            console.log("Ese producto no está en stock");
            break;
    }
    producto=prompt("Ingresa el producto y te diré su precio (fin para ver el total).");
}


console.log("Total a pagar $"+precio);
}

calcular();