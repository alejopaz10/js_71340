//ARRAYS se declara con [] que en mi compu lo hago alt y la tecla la lado del mas pueden tener multi datos los arrays

// let simpsons =["homero","marge","lisa","maggie","bart"]; // aca sirve hacer un arrays

// let homero =["homero","simpson","simpson",40 , true,"calle falsa 123",7 , "G"] // aca no tiene sentido definir un arrays por que me combiene hacerlo con objeto


//como llamo a los arrays
// console.log(simpsons[0]);

    // for( let i = 0; i<5;i++) {
    //     console.log(simpsons[i]);
    // }

    // for( let i = 0; i<5;i++) {
    //     console.log((i+1) + ". " + simpsons[i]);
    // } // asi se ve ,as lindo y ordenado del 1 a 5
    
//propiedad para que nuestro for vaya hasta donde tenemos definido  hay que conocer metodos y propiedades del array
//lenght nos devuelve la cantidad que tiene el arrays
// console.log(simpsons .length);

// for( let i = 0; i<simpsons.length;i++) {
//     console.log((i+1) + ". " + simpsons[i]);
// }

//agregar  elementos al final del arrays
// simpsons.push("bob patino");
// console.log(simpsons);

//agregar  elementos al principio del arrays
// simpsons.unshift("ayudante de santa");
// console.log(simpsons);

//quuitar el primer shift y el ultimo pop  elementos del arrays
// simpsons.shift();
// simpsons.pop();
// console.log(simpsons);

// el metodo splice me permite eliminar uno o varios elementos en cualquier posicion
// simpsons.splice(3,2);
// console.log(simpsons);

// const cantidad = Number(prompt("Cuantos elementos desea eliminar"));
// const desde = Number(prompt("ingrese 0 para eliminar desde el principio o el indice desde cual desea borrar la cantidad"))
// const rest =simpsons.splice(desde,cantidad);
// for(let i = 0 ; i < rest.length;i ++ ){console.log("valor eliminado " + rest[i]);
// };

// console.log(simpsons);

// el metodo join me permite juntar con un separador en especifico
// let resultado = simpsons.join(`-`);
// console.log(simpsons);
// console.log(resultado);

// Concat me permite combinar dos arrays en uno solo 
// let frutas =["tomate","frutillas","mango","anana"];
// let verduras =["acelga","espinaca","batata","papa"];

// let inventario = frutas.concat(verduras);
// console.log(frutas);
// console.log(verduras);
// console.log(inventario);

// Slice nos permite hacer una copia de una parte de arrays dentro de otro arrays
// let verduras =["acelga","espinaca","batata","papa"];
// let resultado = verduras.slice(0,2);
// console.log(resultado);
// console.log(verduras);

//indexof sirve para encontrar el valor y cual es su indice
// console.log(verduras.indexOf("batata"));

//includes permite saber si un elemento existe dentro de un arrays
// console.log(verduras.includes("lechuga"));

//reverse invierte los elementos
// console.log(verduras.reverse())


