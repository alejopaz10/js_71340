//HIGHER ORDER FUNCTIONS I (HOF)
// function sumarRango(from,to){
//     let total= 0;
//     for (let i = from; i <= to ; i++){
//         total +=i;
//         console.log("I: ${i} --Total: ${total}");
//         }
//     }
// sumarRango(10,20);

// let frutas =["tomate","frutilla","mango","anana","uva","banana"];
// let resultado = frutas.slice(2,4)
// console.log(resultado);
// console.log(frutas);

//funciones de orden superior puede retoranar una funcion o recibe como parametro una funcion esta es una funcion de orden superior ya que le paso una funcion  como parametro a otra y la uso dentro de la logica de la funcion que estoy convocando
//aca recibo una funcion
// let frutas =["tomate","frutilla","mango","anana","uva","banana"];
// let heroes=["hulk","iroman","capitan america","superman"];

// let resultado = frutas.slice(2,5)
// function sliceManual(from,to,array,action){
//     let resultado = [];
//     for (let i = 0;i<array.length; i++ ){
//         if(i>= from && i < to){
//             resultado [resultado.length] = array[i];
//     }
//     }
//     action(resultado);

// }
// sliceManual(1,4 , frutas , console.log);
// sliceManual(0,2,heroes,alert);
// sliceManual(1,5,frutas,(result)=>document.write(result));

//RETORNAR UNA FUNCION.
//aca cree una funcion que es reutilizable per oa su vez me deuelve otra funcion
// function esMayorQue(valor){
//     return(otroValor) => otroValor > valor;
// }
// let esMayorQue200 = esMayorQue(200)
// let esMayorQue50=esMayorQue(50)
// console.log(esMayorQue200(100)); //(otroValor) => 50 > otroValor;
// console.log(esMayorQue50(100));

// let frutas =["tomate","frutilla","mango","anana","uva","banana"];
// function porCadaUno( arr, fn){
    // for(let i = 0 ;i < arr.lenght; i++){
    //     fn(arr[i])
    // }

//     for(const el of arr){
//         fn(el)
//     }
// }
// porCadaUno(frutas,console.log);

// let precios = [100,357,228,1020,559,201];
// function adicionarIVA(value){
//     console.log(value + (value * 0.21));
// }
// porCadaUno(precios,adicionarIVA);

//METODOS DE BUSQUEDAD  Y TRANSFORMACION :

// FOR EACH (POR CADA UNO) me permite abstraer mi propia logica para ser aplicada por cada elemento del array

// let frutas =["tomate","frutilla","mango","anana","uva","banana"];
// frutas.forEach((value)=>console.log(value));
// let precios = [100,357,228,1020,559,201];
// precios.forEach((precio)=>console.log(precio +(precio*1.21)));

//FIND RECIBE UNA FUNCION EN DONDE HACEMOS UNA COMPARACION DE PARAMETROS NOS PERMITE ENCONTRAR EL VALOR QUE COINCIDE CON UNA COMPARACION Y RETORNA TRUE O FALSE

// const resultado = frutas.find((frutas)=> frutas=="tomate");
// console.log (resultado);

//FILTER me filtra por los que coincidan con esa condicion
// const employees = [
//     {
//         id : 433,
//         name : "Lenny",
//         age: 37,
//         sector: 6,
//         section:"G"
//     },
//     {id : 432,
//         name : "homero",
//         age: 37,
//         sector: 7,
//         bald : true,
//         section:"G"
//     },
//     {
//         id : 432,
//         name : "Carl",
//         age: 37,
//         sector: 7,
//         section:"G"
//     }
// ]
// const resultado = employees.filter((empleado)=>empleado.sector===7);
// console.log(resultado);

//SOME FUNCIONA COMO FIND PERO ESTE SE FIJA SI UNO POR LO MENOS CUMPLE LA CONDICION tenemos algun pelado si uno por eso el true
// const tenemosPelados = employees.some ((empleado)=>empleado.bald ===true);
// console.log(tenemosPelados);

// MAP nos va a guardar en una variable un nuevo array con el resultado de haber aplicado esa logica con cada de los elementos del arrays
// let precios = [100,357,228,1020,559,201];
// let preciosConIva = precios.map((precio)=>precio *1.21);
// console.log(preciosConIva);
// let mayoresA500 = preciosConIva.filter((precios)=> precios > 500);
// console.log(mayoresA500); // puedo usar los otros tambien y ir mezclando  aca use filter tambien

// tambien puedo concatenar un
//let preciosConIva = precios.map((precio)=>precio *1.21).filter((precios)=>precios>500);//aca aplique dos juntos  le aplico un map para que me devuelva un nuevo arrays con los precios con iva y sobre ese array un filtre que me va a devolver los mayores a 500

//REDUCE NOS PERMITE OBTENER UN UNICO VALOR NOS SIRVE CUANDO QUERAMOS ACUMULAR LA SUMA DE UNA PROPIEDAD DE LOS ELEMENTOS
// let ventas = [100,357,228,1020,559,201];
// let total =ventas.reduce((valorAnterior,valorActual)=> valorAnterior + valorActual );
// console.log(total);

//SORT nos permite reordenar un array segun un criterio definido 
//let ordenado = ventas.sort ((a,b)=> a - b);//asi se ordena de mayor a menor asi con numeros pero si es por ejemplo orden alfabetico es asi : let ordenado = ventas.sort();
// console.log(ordenado);