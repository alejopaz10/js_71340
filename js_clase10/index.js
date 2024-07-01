
//EVENTOS
// function pepe(){
//     console.log("Pepe esta bailando");
// }
// function lalo(){
//     console.log("lalo esta bailando");
// }

// const button = document.getElementById("btn");
// const title = document.getElementById("title");
// const party = document.getElementById("fiesta");
// const dance =document.getElementById("dance")
//formas de hacer los eventos:

// button.onclick = ()=> pepe();

// button.addEventListener("click",pepe);

//asi se ejecutan dos elementos
// button.addEventListener("click",()=>{
//     pepe();
//     lalo();

// });

//button.addEventListener("click",()=>{
//title.innerText = "cambio al click"
//});

// button.addEventListener("click",()=>{
//     const invitado = document.createElement("p")
//     invitado.innerText ="pedro";
//     party.appendChild(invitado);
// });
// dance.addEventListener("click a dance",()=>{
//     const item = document.querySelector("p");
//     items.forEach((item))
//     item.style.background = "crimson";
//     item.style.transform = "rotate (180deg)";
//     item.style.background =" black"
// })

// //EVENTOS MAS COMUNES con maous
// const button = document.getElementById("btn");  
// button.addEventListener("mousedown",()=> console.log("tienes presionado el boton"));
// button.addEventListener("mouseup",()=> console.log("has soltado el boton"));


// const dance =document.getElementById("dance")
// dance.addEventListener("mouseover",()=> console.log("ingresaste el elemento"));
// dance.addEventListener("mouseout",()=> console.log("SALISTE DEL ELEMENTO"));

//eventos con teclado
// const invitado = document.getElementById("name");
// invitado.addEventListener("keydown",() =>console.log("ouch , tienes una tecla apretada"));
// invitado.addEventListener("keyup",()=> console.log("gracias por soltar"));
// invitado.addEventListener("change",()=> console.log("el valor esta cambiando"));
// invitado.addEventListener("input",()=> console.log("el valor actual es : " + invitado.value));

//EVENTO SUMBIT SE ACTIVA CUANDO ENVIAMOS EL FORMULARUIO
// const form =document.getElementById("form");
// form.addEventListener("submit",()=>console.log(enviaste la informacion));