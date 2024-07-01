//LOCALSTORAGE
// localStorage.setItem("nombre","pepe");
// localStorage.setItem("edad","30");
// let personaje = {
//     nombre : localStorage.getItem("nombre"),
//     edad:localStorage.getItem("edad")
// }
// console.log(personaje);


// este dura hasta que el usuario cierra la ventana
// sessionStorage.setItem("nombre","pepe");
// sessionStorage.setItem("edad","30");
// let personaje = {
//     nombre : sessionStorage.getItem("nombre"),
//     edad:sessionStorage.getItem("edad")
// }
// console.log("desde el session",personaje);

// localStorage.setItem("heroes",["hulk , iroman",])
// let personaje = {
//         nombre : localStorage.getItem("nombre"),
//         edad:localStorage.getItem("edad")
//     }
//     console.log(personaje);

// console.log(localStorage.length);

// for (let i = 0; i < localStorage.length; i++){
// const clave = localStorage.key(i)
// console.log( localStorage.getItem(clave)
// );
// }
// localStorage.removeItem("heroes"); // asi elimino un item
// localStorage.clear()//se limpia todo

//CONVERSIONES DE / HACIA JSON //stringify lo usamos para convertin en string y parse para convertilo en objeto

// const items =[
    
//     {id: 1,
//     name : "Leche" ,
//     price : 150,
//     stock:7
// },
// {
    
//     id: 2,
//     name : "Arroz" ,
//     price : 120,
//     stock:15

// }]
    
// for (item of items){
//     localStorage.setItem(item.id , JSON.stringify(item));
// }

// let newItems = [];
// for (let i = 1 ;  i  < localStorage.length;i++ ){
//     newItems.push(JSON.parse(localStorage.getItem(i)));
// }
// console.log(newItems);

//ejemplo si el usuario quiere que su pagina sea en  odo negro yque se guarde 
// if (localStorage.getItem("mode")==null){
//     const mode = prompt ("Elige modo light o dark");
//     localStorage.setItem("mode",mode);
//     document.body.className="dark"
// }else{
    
// document.body.className=localStorage.getItem("mode");
// }