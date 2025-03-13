const users = [
    { email: "admin", senha: "1234", nome: "Administrator" },
    { email: "john", senha: "abcd", nome: "John Doe" },
    { email: "jane", senha: "pass", nome: "Jane Smith" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
        window.location.href = `bem_vindo.html?nome=${encodeURIComponent(user.nome)}`;
    } 
});
