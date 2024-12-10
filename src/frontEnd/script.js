const pais = document.getElementById("paises");
const estado = document.getElementById("estados");
const ciudades = document.getElementById("ciudades");
fetch("http://localhost:3000/paises")
    .then(response => {
        if (!response) {
            throw new Error("Error de solicitud" + response.status);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            const option = document.createElement("option");
            option.value = element.id;
            option.textContent = element.nombre;
            pais.appendChild(option);
        });
    })


pais.addEventListener("change", () => {
    estado.innerHTML = '<option>Selecciona un estado</option>';
    const idEstado = pais.value;
    fetch(`http://localhost:3000/estados/${idEstado}`)
        .then(response => {
            if (!response) {
                throw new Error("Error de solicitud" + response.status);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(element => {
                const option = document.createElement("option");
                option.value = element.id;
                option.textContent = element.nombre;
                estado.appendChild(option);
            });
        })


})

estado.addEventListener("change", () => {
    ciudades.innerHTML = '<option>Selecciona un estado</option>';
    const idCiudad  = estado.value;
    fetch(`http://localhost:3000/ciudades/${idCiudad}`)
    .then(response => {
        if (!response) {
            throw new Error("Error de solicitud" + response.status);
        }
        return response.json();
    })
    .then(data => {
        data.forEach(element => {
            const option = document.createElement("option");
            option.value = element.id;
            option.textContent = element.nombre;
            ciudades.appendChild(option);
        });
    })
})
