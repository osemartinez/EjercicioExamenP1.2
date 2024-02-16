fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        let card = '';
        for (let db of data) {
            card += `<div class="card mb-5" >
                    <img src="${db.image}" class="card-img-top" alt="${db.name}">
                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Nombre:</strong> ${db.title}</li>
                        <li class="list-group-item"><strong>Precio:</strong> ${db.price}</li>
                        <li class="list-group-item"><strong>Descripción:</strong> ${db.description}</li>
                        <li class="list-group-item"><strong>Categoría:</strong> ${db.category}</li>
                        </ul>
                </div>`
        }
        document.getElementById("lista").innerHTML = card
    })