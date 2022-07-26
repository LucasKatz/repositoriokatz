function calcular (){

    let articulo= prompt ("ingresa los articulos que querés agregar a tu carrito: -EXIT para salir \n Hamburguesa \n Sandwiches \n Pizzas \n Ensalada \n Alcohol - EXIT para salir");
    let precio= 0;
    
    
    while (articulo!="EXIT"){
        switch (articulo){
            case "Hamburguesa":
            case "hamburguesa":
    
        precio= precio + 5000
        
        console.log("El valor de Hamburguesa es: $5.000 pesos");
        console.log ("El articulo esta disponible para la Venta \n Hay stock");
        break;
    
        case "Sandwiches":
        case "sandwiches":
            precio= precio + 3000
            
            console.log("El valor de Sandwiches es: $3.000 pesos");
            console.log("El articulo esta disponible para la Venta \n Hay Stock");
            break;
    
        case "Pizzas":
        case "pizzas":
            precio= precio + 5000
            
            console.log("El valor de Pizzas es: $5.000 pesos")
            console.log("Este articulo se encuentra en Venta \n Hay stock");
            break;
    
        case "Ensalada":
        case "ensalada":
            console.log ("El articulo no se encuentra en Venta \n NO hay Stock");
            break;
    
        case "Alcohol":
        case "alcohol":
            precio= precio + 3.000
            ;
            console.log("El valor de Alcohol es: $3.000 pesos")
            console.log("El articulo se encuentra en Venta \n Hay stock");
            break;
    
        default:
            console.log("Este articulo no se encuentra disponible");
            break;
        }
    articulo= prompt("ingresa los articulos que querés agregar a tu carrito: -EXIT para salir \n Hamburguesa \n Sandwiches \n Pizzas \n Ensalada \n Alcohol");
    }
    let precioConIva= precio*1.21;
    console.log("Total a Pagar $" +precioConIva);
    }
    calcular()