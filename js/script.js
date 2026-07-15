function entrar() {
    let usuario = document.querySelector("input[type='text']").value;

    if (usuario === "") {
        alert("Digite seu usuário!");
    } else {
        window.location.href = "dashboard.html";
    }
}
