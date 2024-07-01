// // //DOM
// // //ACCEDER A LOS NODOS
// // //getElementById me busca los elementos por el id
// // const title = document.getElementById("title")
// // console.log(title.innerText);


// // //document.getElementsByClassName lo que hace me trae un array con todos los elementos que coinciden con esa busqueda.
// // const items = document.getElementsByName("item")
// // console.log(items);

// // //document.getElementsByTagName sirve para acceder por el nombre de la etiqueta asi que nos devulve un array

// // //for
// // for(item of items){
// //     console.log(items);
// // }

// // //innertex me permite modificar los nodes
// // title.innerText ="otro titulo"
// // console.log(title.innerText);

// // /**
// //  * inner text cambia el texto
// //  * inner htlm el htlm
// //  * title.classname agrega clases al elemento 
// //  */

// // //agregar o quitar nodos
// // const newNode = document.createElement("section");
// // newNode.innerHTML = "<article><p>hola desde un nuevo node</p></article>";
// // document.body.append(newNode);

// // const newNodes = document.createElement("section");
// // newNodes.innerHTML = "<article><p>node dos para mostrar como se eliminan</p></article>";
// // document.body.append(newNodes);
// // //para eliminar uso remove
// // newNodes.remove();

// // obtener datos desde los inputs
// // const input = document.getElementById("texto");
// // console.log(input.value);
// const simspons = ["Homero","Marge","Bart","Lisa","Maggie"];
// const list = document.createElement("ul");
// for (character of simspons){
//     const item = document.createElement("li");
//     item.innerText = character;
//     item.innerText =`este es el personaje de : ${character}`;
//     list.append(item);
// }
// document.body.append(list);

// //plantillas literales  item.innerText =`este es el personaje de : ${character}`;

// //query selector nos permiten es usar el selector como si fuera el css
// document.querySelector("#title .pepe")// y asi vas trayendo lo que necesitas