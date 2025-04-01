document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;

    try {
        const response = await fetch('users.json');
        const users = await response.json();

        const user = users.find(u => u.usuario === usuario && u.senha === senha);


        if (user) {
            window.location.href = `bem_vindo.html?nome=${encodeURIComponent(user.nome)}`;
        } else {
         
            alert("Credenciais inválidas!");
            
        }
    } catch (error) {
        console.error("Erro ao carregar usuários:", error);
        alert("Erro ao processar login. Tente novamente.");
    }
});