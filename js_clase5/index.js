// asi era como lo haciamos antes
// let idProducto="001ABC"
// let nombreProducto="Arroz";
// let stockProducto = 20;
// let precio= 120;

// let idProducto_2="002ABC"
// let nombreProducto_2="Leche";
// let stockProducto_2 = 7;
// let precio_2= 140;

//OBJETOS
/**
 * PRODUCTO
 * @param {string} id
 *  @param {string} nombre
 *  @param {number} stock
 *  @param {number} precio
 */

//esto es un objeto
// let producto_1 = {
//     id:"001ABC",
//     nombre:"Arroz",
//     stock:"20",
//     precio:"120"
// }
// let producto_2 = {
//     id:"002ABC",
//     nombre:"Leche",
//     stock:"7",
//     precio:"140"
// }
// esta mas ordenado ahora con objeto.

// asi se accede a un valor dentro del objeto 
// console.log (producto_1 .nombre );
// console.log (producto_1 .precio );
// console.log(producto_1.stock);

//como agregamos valores a un producto ya crado por si sabemos o se nos agrega una nueva propiedad despues
// producto_1.peso = "1";
// producto_1.unidad="kg"
// console.log(producto_1 .unidad); // y ahora aparece en la consola


//asi se cambian valores anteriores
// producto_1 .stock = 19;
// console.log(producto_1);

//ejemplo
// const cantidadVentas = prompt ("Cuantas unidades vendiste")
// if (cantidadVentas > 0){
//     producto_1.stock-=cantidadVentas;
// }
// console.log(producto_1);

//esto lo uso de ejemplo para objetos contructores

/** PRODUCTO
* @param {string} id
*  @param {string} nombre
*  @param {number} stock
*  @param {number} precio
*/


// let producto_1 = {
//     id:"001ABC",
//     nombre:"Arroz",
//     stock:"20",
//     precio:"120"
// }
// let producto_2 = {
//     id:"002ABC",
//     nombre:"Leche",
//     stock:"7",
//     precio:"140"
// }


//objetos constructores  para crearun nuevo objeto cada vez que sea necesario
// function Producto (id,nombre,stock,precio){//funcion constructora permite crear un molde para poder crear varias veces productos de la entidad productos
//     this.id=id;
//     this.nombre=nombre;
//     this.stock=stock;
//     this.precio=precio;
// }
// const producto_1= new Producto("ABC001,Arroz, 20 , 120")
// console.log(producto_1);
// const producto_2= new Producto("ABC002,leche, 50 , 140")
// console.log(producto_2);
//repaso 
//objeto literal
// const hero={
//     name:"Bruce",
//     lastname:"Banner",
//     alias: "Hulk",
//     age:"40"
// }

//hero.alias//hulk una forma de llamar

//agregar una propiedad
//hero.hair ="Black";

// si tenemos mas de un hero hago una funcion constructora
// function Hero (name,lastname,alias,age) {
//     this.name=name;
//     this.lastname=lastname;
//     this.alias=alias;
//     this.age=age;
// }
// const hero_1 = new Hero("Bruce", "Diaz", "Batman",46);
// const hero_2 = new Hero("Tony", "Starck", "Iroman",50);

//METODOS Y OPERACIONES CON OBJETOS.

// function Hero (name,lastname,alias,age) {
//     this.name=name;
//     this.lastname=lastname;
//     this.alias=alias;
//     this.age=age;
//     this.vitality=100;
// }
// this.descreasVitality=function(power){
//     this.vitality -=power;
//     if(this.vitality<=0){
//         console.log("gamer over");
//     }
// }
// const hero_1 = new Hero("Bruce", "Diaz", "Batman",46);
// const hero_2 = new Hero("Tony", "Starck", "Iroman",50);

// hero_1 .descreasVitality(50);
// console.log(hero_1.vitality);

// const mensaje="hola soy una cadena de texto"
// console.log(mensaje.length);
// console.log(mensaje.toUpperCase());
// Math.pow(10,2)
// console.log(Math.pow(10,2));

//OPERADORES IN  y FOR...IN
// console.log("name in hero_1"); //si sale un true es que si existe
// for(propertys in hero_1){
//     console.log(hero_1);} //ahi me tira todas las propiedades 

//CLASES 
// class hero{
//     constructor(name,lastname,alias,age){
//         this.name=name;
//             this.lastname=lastname;
//             this.alias=alias;
//             this.age=age;
//             this.vitality=100;
//     }
// }
