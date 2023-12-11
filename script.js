document.addEventListener("DOMContentLoaded", function() {
    
    fetch("productos.json")
        .then(response => response.json())
        .then(data => {
            
            const productContainer = document.getElementById("cardProductos");

            
            data.productos.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("card");

                const title = document.createElement("h2");
                title.textContent = producto.nombre;

                const imagen = document.createElement("img");
                imagen.src = producto.img;
                imagen.alt = producto.nombre;

                const price = document.createElement("p");
                price.textContent = `Precio: $   ${producto.precio}`;

                card.appendChild(title);
                card.appendChild(imagen)
                card.appendChild(price);

                productContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON: ", error);
        });
});