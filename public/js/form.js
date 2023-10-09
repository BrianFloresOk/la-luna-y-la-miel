window.addEventListener('load', () => {
    let form = document.querySelector("form")
    let email = document.querySelector("#email")
    let name = document.querySelector("#nombre")
    let fecha = document.querySelector("#fecha")
    let comentario = document.querySelector("#comentario")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        if(email.value === "" && fecha.value === "" && name.value === "") {
            alert("Hay campos vacíos, complete para reservar")
        } else {
            alert("Reserva realizada")
            email.value = ""
            fecha.value = ""
            name.value = ""
            comentario.value = ""
        }
    })

})