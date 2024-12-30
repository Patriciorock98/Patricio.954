let productos;

const cargarProductos = async () => {
    try {
        const response = await fetch("../productos.json");
        productos = await response.json();
        mostrarProductos();
        
    } catch (error) {
        console.error(error);
    }
};

const mostrarProductos = () => {
    const listaProductos = document.querySelector(".lista-productos");

    listaProductos.innerHTML = "<main></main>";

    productos.forEach(producto => {
        const html = `                    
    <article data-id="${producto.id}" data-nombre "${producto.nombre}" class="card">
        <h3 class="nombre__producto">${producto.nombre}</h3>
        <img src="${producto.imagen}" alt="${producto.descripcion}" width="400px">
        <p>${producto.descripcion}</p>
        <p class="precio__producto">$ ${producto.precio}</p>
        <button type="button" class="boton">Agregar al carrito</button>
    </article>
    `;

        listaProductos.innerHTML += html;
    });
};

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("boton")) {
        const id = event.target.closest("article").dataset.id;

        const index = carrito.findIndex((producto) => producto.id == id);

        if (index == -1) {

            const elemento = productos.find((producto) => producto.id == id);
            console.log(elemento);

            const { nombre, precio } = elemento;

            const producto = {
                id: id,
                nombre: nombre,
                precio: precio,
                cantidad: 1,
            };

            carrito.push(producto);
        } else {
            const producto = carrito[index];
            producto.cantidad++;
        };
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
});