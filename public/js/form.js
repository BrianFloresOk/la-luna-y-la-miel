window.addEventListener('load', () => {
    let form = document.querySelector("form")
    let email = document.querySelector("#email")
    let name = document.querySelector("#nombre")
    let fecha = document.querySelector("#fecha")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        if(email.value === "" && fecha.value === "" && name.value === "") {
            alert("Complete los campos para reservar")
        } else {
            alert("Reserva realizada")
        }
    })

})