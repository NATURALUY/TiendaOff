function menu() {

  alert("####### QUE DESEA REALIZAR #### \n - 1) Listar Articulos disponibles \n - 2) Comprar Producto \n - 3) Resumen Venta \n - 4) Buscar producto \n - 5) Modificar Compra \n Otra tecla para salir del sistema")

}
let stock = ["campera", "buzo", "pollera", "reloj" ,"anillo","gorro","sobretodo", "short","bluza","remera", "chaleco", "botas", "camisa", "pantalon", "musculosa","cardigan" ];

//clase articulo

class Articulo {
    
  constructor(nombre, talle, precio) {
      this.nombre = nombre;     
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

// muestra stock / crea cards con foto de los elementos

const boton = document.querySelector("#bt");
let cont = document.getElementById("listar") 
let nuevo;
contador = 1;


const mostrarStock = () =>{
for (const prod of stock.sort())  {  
    nuevo = document.createElement("div");        
    nuevo.innerHTML="<div class= card style=width: 10rem;><img src=img/"+prod+".jpg class= card-img-top alt=</img><div><p class= text-danger p-2>"+ prod +"</p></div></div>" 
    cont.append(nuevo) 
    contador =contador +1
    }
}

boton.addEventListener("click", mostrarStock);


// buscar productos

const botonBuscar = document.querySelector("#btnBuscar"); //boton
const textoBuscar = document.querySelector("#busqueda"); // input.
let contBusqueda = document.getElementById("resultadoBusqueda"); // contenedor donde se va alojar el resultado de la busqueda
let nuevoBusqueda;
let producto;
let busquedaOn =false;
//console.log(textoBuscar.value)

//formulario configurar el submit

botonBuscar.onclick =(e) => {       
    e.preventDefault();
    if (busquedaOn == false){
        const x = stock.find(el => el == textoBuscar.value);
        if (textoBuscar.value == x ) {
        producto = textoBuscar.value;    
        nuevoBusqueda = document.createElement("div");
        nuevoBusqueda.innerHTML="<div class=col-lg-4><h2 class= text-muted>"+ producto+"</h2><p>Los siguientes resultados coinciden con su busqueda.</p><img src=img/"+producto+".jpg class= imgP p-3 card-img-top alt=</img></div>"
        contBusqueda.append(nuevoBusqueda)
        busquedaOn = true;
                   
      }else {    
        producto = textoBuscar.value;
        nuevoBusqueda = document.createElement("div");
        nuevoBusqueda.innerHTML="<div> <p class= text-danger p-3 > NO EXISTEN PRODUCTOS PARA LA BUSQUEDA SELECCIONADA</p></div>" 
        contBusqueda.append(nuevoBusqueda);
        busquedaOn = true;

      }
  }else   {    
    document.getElementById("resultadoBusqueda").removeChild(nuevoBusqueda)
    busquedaOn = false; 
  }
  } 

// evento para comprar productos 

let btnComprar = document.getElementsByClassName("Com");

for (let i = 0; i < btnComprar.length; i++){ 
  btnComprar[i].addEventListener('click', function(e) {    
  let botonComprar = e.target.parentElement;
  let nombre = botonComprar.querySelector(".articulo").textContent;
  let talle = botonComprar.querySelector(".talle").value;
  let precio = botonComprar.querySelector(".precio").textContent;  
  const articulo1 = new Articulo (nombre,talle, precio);
  venta.push(articulo1);    
  //console.log(venta)
  let precioFinal = articulo1.calcularPrecio();
  // console.log(`Selecciono  ${nombre}, el talle es ${talle} y el precio sin iva ${precio}`);
  // console.log(` el precio fina es IVA inc. ${precioFinal}`);
  // console.log(articulo1.resumenVenta());
  insertarElemento(articulo1);
  guardarEnLocalStorage(articulo1);
})

}

//Funcion que busca en el html la clase lista-carrito y el body de la tabla para agregar lo que se va comprando

const listaProductos = document.querySelector('#lista-carrito tbody');

function insertarElemento(elementos) {
const row = document.createElement('tr');
row.innerHTML = `
<td>${elementos.nombre}</td>
<td>${elementos.talle}</td>
<td>${elementos.precio}</td>
<td><a href="#" class="borrar-producto fas fa-times-circle" data-id=""></a></td>
`;
  listaProductos.appendChild(row);
}



let borrar = document.getElementsByClassName("borrar-producto");
console.log(borrar);

for (let i = 0; i < borrar.length; i++){ 
  borrar[i].addEventListener('click', function(e) {    
  let eventoBorar =  e.target.parentElement;
  console.log(eventoBorar);
  } )
}

  
  
//Local storage guardad y obtener los productos.

function guardarEnLocalStorage(producto) {
  let productos;
  //Toma valor de un arreglo con datos del LS
  productos = obtenerProductosLocalStorage();
  //Agregar el producto al carrito
  productos.push(producto); 
  //Agregamos al LS
  localStorage.setItem('productos', JSON.stringify(productos));
}

function obtenerProductosLocalStorage(){
  let productoLS;

  //Comprobar si hay algo en LS
  if(localStorage.getItem('productos') === null){
      productoLS = [];
  }
  else {
      productoLS = JSON.parse(localStorage.getItem('productos'));
  }
  return productoLS;
}