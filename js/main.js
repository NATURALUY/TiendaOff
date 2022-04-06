
let stock = ["campera", "buzo", "pollera", "reloj" ,"anillo","gorro","sobretodo", "short","bluza","remera", "chaleco", "botas", "camisa", "pantalon", "musculosa" ];

//clase articulo

class Articulo {
    constructor(nombre, tipo, talle, precio) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.talle = talle;
      this.precio = precio;      
    }
    calcularPrecio (){
        this.precio = this.precio * 1.21
        return this.precio
    }
    resumenVenta () {
      return console.log(`Se vendió un / a ${this.nombre}`)
    }
}  
//funcion para crear el articulo

const venderArticulo =()=> {    
    let nombreArticulo = prompt ("Ingrese el nombre del articulo que desea comprar :?");
    nombreArticulo = nombreArticulo.toLowerCase();
    while (!stock.includes(nombreArticulo)){    
    alert("No Se encuentra el producto en stock");    
    nombreArticulo = prompt ("Ingrese el nombre del articulo que desea comprar :?");
    nombreArticulo = nombreArticulo.toLowerCase();
    }
    let TipoArticulo = prompt(" Tipo DAMA / CABALLERO : ? ");    
    TipoArticulo = TipoArticulo.toUpperCase();
    while ((TipoArticulo !== "DAMA") && (TipoArticulo!== "CABALLERO")){
      TipoArticulo = prompt("Usted ingreso un tipo incorrecto!!,  solo acepta las opciones DAMA / CABALLERO : ");   
      TipoArticulo = TipoArticulo.toUpperCase();
    } 
    let talleArticulo= prompt("Ingrese el talle del articulo : ?");
    talleArticulo = talleArticulo.toLocaleUpperCase();
    while ((talleArticulo !== "S") && (talleArticulo !== "M") && (talleArticulo !=="L")) {
      talleArticulo = prompt("Usted ingreso un talle incorrecto!!,  solo acepta S-M-L Ingrese el talle del articulo : ");    
      talleArticulo = talleArticulo.toUpperCase();
    }    
    let precioArticulo= parseInt(prompt(`Ingrese el precio del /la  ${nombreArticulo}  $ :`));  
    while (!Number.isInteger(precioArticulo)){
      precioArticulo= parseInt(prompt(`El monto ingresado incorrecto !!! Ingrese el monto del producto :  ${nombreArticulo}  $ :`));  
    }
    const articulo1 = new Articulo (nombreArticulo,TipoArticulo,talleArticulo, precioArticulo); 
    return articulo1;
}
let contador =0;
let precioTotal=0;

let art = venderArticulo();
let precio = art.calcularPrecio();
alert("Se vendió el/la " + art.nombre + " al costo : $" + precio); 
contador = contador +1;
precioTotal= precioTotal + precio;
let continuar = prompt("Desea continuar realizando compras ?  SI para continuar / Otra tecla para Finalizar");
continuar=continuar.toUpperCase();

while (continuar == "SI"){
  art = venderArticulo();
  precio = art.calcularPrecio();  
  alert("Se vendió el/la " + art.nombre + " al costo : $" + precio); 
  contador = contador +1;
  precioTotal= precioTotal + precio;
  continuar = prompt("Desea continuar realizando compras ?  SI para continuar / Otra tecla para Finalizar "); 
  continuar= continuar.toUpperCase(); 
}

alert("Precio total $ " + precioTotal + " de un total de " + contador + " compras realizadas");
alert("Usted finalizó sus compras");
