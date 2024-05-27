// for (let i = 1(donde comienza);i<=10(donde termina);i++(de a caunto va sumando ahi es uno en uno pero si quiero que vaya en dos en dos i+=2)){
//     console.log(i);
// }
// for (let i = 1;i<=10;i++){
//     console.log(i);
// }

//crea un algoritmo qiue reciba un numero y devuelva todos los numeros hasta ese valor multiplicado por 10
// const cantidad = prompt ("ingrese la cantidad")
// for (let index = 0; index <= cantidad; index++) {
// console.log(index*10);
    
// }

//turnero
//aca con break lo que hago es cortar el ciclo
// for (let i=1; i<=5; i++){
//     let nombre=prompt("ingresa tu nombre: ");
// if (nombre==""){
//     console.log("no ingresaste ningun nombre no tienes turno");
//     break
// }

//         console.log("hola,"+ nombre +  " usted tiene asignado el numero " + i);
//     }
//aca con continue hago que saltee ese que no tiene nombre y siga
    // for (let i=1; i<=5; i++){
    //     let nombre=prompt("ingresa tu nombre: ");
    // if (nombre==""){
    //     console.log("no ingresaste ningun nombre no tienes turno");
    //     i=i-1;
    //     continue
    // }
    
    //         console.log("hola,"+ nombre +  " usted tiene asignado el numero " + i);
    //     

    //while mientras
    // let condition = true;
    // while (condition) {
    // console.log("la condiion es verdadera");
    // condition=false;
    // }
    
    
//     let option;
//     let saldo = 100
//     while (option != 0) {
//     option= prompt("ingrese una opcion : \n1. ver saldo \n2 extraer saldo \n3 ingresar saldo \n 0. salir");

//     if (option== 1) {alert("tu saldo es $ " + saldo + ".-");}
//     else if(option==2){ saldo = 0 ;
//         alert("has retirado tu saldo.");
    
//     }else if(option==3){
//         let monto = Number (prompt("cuanto deseas ingresar"));
//         saldo = saldo + monto;
//         alert ("has ingresado" + monto +".-, tu saldo es : " + saldo + ".-");
//     } 
//     else if (option==0){
//         alert("gracias vuelva pronto!")}
//     else {
//         alert("El valor ingresado no corresponde a una opcion valida");
//     }
        
// }

//do while primero ejecuta y despues valida la condicion si es falsa no sigue y si es verdadera si
// let option; 
// let saldo = 10;
// do  {
//     option= prompt("ingrese una opcion : \n1. ver saldo \n2 extraer saldo \n3 ingresar saldo \n 0. salir");

//         if (option== 1) {alert("tu saldo es $ " + saldo + ".-");}
//         else if(option==2){ saldo = 0 ;
//             alert("has retirado tu saldo.");
        
//         }else if(option==3){
//             let monto = Number (prompt("cuanto deseas ingresar"));
//             saldo = saldo + monto;
//             alert ("has ingresado" + monto +".-, tu saldo es : " + saldo + ".-");
//         } 
//         else if (option==0){
//             alert("gracias vuelva pronto!")}
//         else {
//             alert("El valor ingresado no corresponde a una opcion valida");
//         }
// } while (option != 0);

// si yo no se si la opcion va a ser falsa o verdadera pero necesito que se ejecute por lo menos una vez uso mas el do while

//switch reemplaza el else if muy importante el break
// ejemplo detector de fauna
// let option;
// while(option !=0){
//     let animal = prompt("Ingrese el animal que desea conocer su sonido o para salir ingrese salir.");
//     switch(animal){
//         case "perro" : console.log("El perro hace guag guag!");
//         break;
//         case 'gato' : console.log("El gato hace mia miau!");
//         break;
//         case "loro" : console.log("pio pio !");
//         break;
//         case "caballo" : console.log("relincha !");
//         break;
//         case "salir":
//             console.log("esepero que te haya gustado");
//             option=0;
//             break
//         default:console.log("no conozco ese animal");
//         break;
//     }
// }
