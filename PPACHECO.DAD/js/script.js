// // localStorage.setItem("nombre", "Pedro");
// localStorage.removeItem("nombre"); 
// localStorage.clear();

// const nombre = localStorage.getItem("nombre"); 
// console.log(nombre); 



// const productos = [
//     {
//         id: 1,
//         nombre: "Taza 1",
//         descripcion: "Taza celeste y negro",
//         imagen: "/imagenes/webp/taza1.webp",
//         precio: 1500,
//         stock: 10
//     },
//     {
//         id: 2,
//         nombre: "Taza 2",
//         descripcion: "Taza nude",
//         imagen: "/imagenes/webp/taza2.webp",
//         precio: 1500,
//         stock: 10
//     },
//     {
//         id: 3,
//         nombre: "Taza 3",
//         descripcion: "Taza azul",
//         imagen: "/imagenes/webp/taza3.webp",
//         precio: 1500,
//         stock: 10
//     },
//     {
//         id: 4,
//         nombre: "Taza 4",
//         descripcion: "Taza blanco y rojo",
//         imagen: "/imagenes/webp/taza4.webp",
//         precio: 1500,
//         stock: 10
//     },
//     {
//         id: 5,
//         nombre: "Vasos 1",
//         descripcion: "Vasos transparentes lizos",
//         imagen: "/imagenes/webp/vasos1.webp",
//         precio: 3000,
//         stock: 10
//     },
//     {
//         id: 6,
//         nombre: "Vasos 2",
//         descripcion: "Vasos transparentes rayados",
//         imagen: "/imagenes/webp/vasos2.webp",
//         precio: 3000,
//         stock: 10
//     },
//     {
//         id: 7,
//         nombre: "Termo 2",
//         descripcion: "Termo celeste y rojo",
//         imagen: "/imagenes/webp/termo2.webp",
//         precio: 1500,
//         stock: 10
//     },
//     {
//         id: 8,
//         nombre: "Tupper 1",
//         descripcion: "Tupper tapa violeta",
//         imagen: "/imagenes/webp/tupper1.webp",
//         precio: 2000,
//         stock: 10
//     },
//     {
//         id: 9,
//         nombre: "Tupper 2",
//         descripcion: "Tupper tapa rosa",
//         imagen: "/imagenes/webp/tupper2.webp",
//         precio: 2000,
//         stock: 10
//     },
//     {
//         id: 10,
//         nombre: "Tupper 3",
//         descripcion: "Tupper tapa violeta y turqueza",
//         imagen: "/imagenes/webp/tupper3.webp",
//         precio: 2000,
//         stock: 10
//     },
//     {
//         id: 11,
//         nombre: "Mates",
//         descripcion: "Mates",
//         imagen: "/imagenes/webp/mates.webp",
//         precio: 2000,
//         stock: 10
//     },
// ];

// const carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

// const {id, nombre, precio} = productos[1]; 

// const producto = {
//     id: id,
//     nombre: nombre,
//     precio: precio,
//     cantidad: 1,
// };

// console.log(producto);

// carrito.push(producto);
// console.log(carrito); 

// localStorage.setItem("carrito", JSON.stringify(carrito)); 

// const listaProductos = document.querySelector(".lista-productos");




//Validacion de Formulario //

const form = document.querySelector("form");

form.addEventListener("submit", (Event) => {
    Event.preventDefault();

    const nombre = document.querySelector("#nombre");
    console.log(nombre.value.length);

    if (nombre.value.length < 4) {
        nombre.style.border = "1px solid red";
        const errorNombre = document.querySelector("#error-nombre");
        errorNombre.textContent = "El nombre tiene que tener 3 caracteres o mas";
    } else { (nombre.value.length < 4) 

    }; 
    
});

