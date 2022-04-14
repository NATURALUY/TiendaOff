function menu() {

  alert("####### QUE DESEA REALIZAR #### \n - 1) Listar Articulos disponibles \n - 2) Comprar Producto \n - 3) Resumen Venta \n - 4) Buscar producto \n - 5) Modificar Compra \n Otra tecla para salir del sistema")

}

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

let venta =[];

verStock= ("Desea ver el listado de productos disponibles : SI / NO ")

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
    
    return (articulo1);
}
let contador =0;
let precioTotal=0;

function listarCompras(){
if (venta.length == 0){
  alert("Usted aun no realizo ninguna compra  cantidad de items. " + venta.length);
}else {
  console.log("Resumen de venta -- TIENDA OFF !!!");
  for (i = 0; i < venta.length; i ++){
    console.log("Item " + i + " - " + " Articulo " + venta[i].nombre + " Talle - " + venta[i].talle + " Precio $U " + venta[i].precio);
  }
  alert("Precio total $ " + precioTotal + " de un total de " + contador + " compras realizadas");      
}
}

// Programa ....
menu()
opcion = parseInt(prompt("Ingrese la opcion que desea realizar : "));
while ((opcion < 6 ) && (opcion > 0)){   
  switch (opcion){
    case 1: 
      stock.sort();
      console.log("Listado de productos ordenados alfabeticamente")
      for (let i =0 ; i < stock.length ; i++){
        console.log("item -> " + i + " - " + stock[i]);
      }
      break;
    case 2:    
      let art = venderArticulo();
      let precio = art.calcularPrecio();
      alert("Se vendió el/la " + art.nombre + " al costo : $" + precio); 
      venta.push(art);
      contador = contador +1;
      precioTotal= precioTotal + precio;
      let continuar = prompt("Desea continuar realizando compras ?  SI para continuar / Otra tecla para Finalizar");
      continuar=continuar.toUpperCase();
      
      while (continuar == "SI"){
        art = venderArticulo();
        precio = art.calcularPrecio();  
        alert("Se vendió el/la " + art.nombre + " al costo : $" + precio); 
        venta.push(art);
        contador = contador +1;
        precioTotal= precioTotal + precio;
        continuar = prompt("Desea continuar realizando compras ?  SI para continuar / Otra tecla para Finalizar "); 
        continuar= continuar.toUpperCase(); 
      }
      break;  
    case 3:
      listarCompras();
      break;
    case 4: 
      let buscar = prompt("Ingrese el producto que desea buscar en stock:");
      const buscarProducto = stock.find(el => el == buscar);
      console.log(buscarProducto);
      if (buscarProducto == buscar){
        alert(`el siguiente producto ${buscarProducto} se encuentra en stock`);

      }else{
        alert(`el siguiente producto NO se encuentra en stock`);
      }
      break;  
      case 5: 
      let cantidadArticulos = venta.length;
      let eliminar = prompt("Ingrese el producto que desea buscar para eliminar del carrito: ?");
      const eliminarProducto = venta.findIndex(element => element.nombre === eliminar);
      if (eliminarProducto !== -1 ){
        seguir = confirm("Realmente desea borrar el producto seleccionado ? ");
        precioTotal = precioTotal - venta[eliminarProducto].precio;
        venta.splice(eliminarProducto, 1);
        if (venta.length < cantidadArticulos){
          alert(`Producto ${eliminar} eliminado con exito.....`);
          contador = contador -1;
          listarCompras();
        }  
      }else {
        alert("No existe el producto en el carrito")
      }
      break;  
  }      
  menu()
  opcion = parseInt(prompt("Ingrese la opción :"))
}
alert("Usted finalizó sus compras");
      