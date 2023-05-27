document.getElementById("contact").addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    let pelis = document.getElementById("pelis").value;
    let data = {
        email: email,
        name: name,
        message: message,
        pelis: pelis
    };
    console.log(data)
});

// profe yo he hecho esto tambien es facil