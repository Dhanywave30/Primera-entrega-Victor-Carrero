//Programa de Compras

let acumulador=0;
let producto = prompt('selecciona los productos que deseas comprar. \n YERBA \n AZUCAR \n FIDEOS \n  Si deseas conocer el total ingrese: TOTAL').toUpperCase();

console.log(producto);

while (producto !='TOTAL') {
    switch (producto){
        case 'YERBA': {
            acumulador+=300;
            break;
        }
        case 'AZUCAR':{
            acumulador+=80;
            break;
        }
        case 'FIDEOS':{
            acumulador+=70;
            break;
        }
        case 'ARROZ':{
            acumulador+=60;
            break;
        }
        case 'PURE':{
            acumulador+=50;
            break;
        }
        default:{
            console.log('error.producto no disponible');
        }
    }
    producto = prompt('selecciona los productos que deseas comprar.\n YERBA \n AZUCAR \n FIDEOS \n ARROZ \n PURE \n Si deseas comprar ingrse :TOTAL').toUpperCase();

    
    console.log(producto);
}




// Una vez seleccionados los productos

alert('el total es'+ acumulador);

function calcularIva(limpio){
    let precioSinIva = limpio/1.21;
    alert('subtotal sin Iva'+ precioSinIva);
}

calcularIva(acumulador);

    