document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("senha").value;
    const errorMessage = document.getElementById("error-message");




    try {
        const response = await fetch('script/users.json');
        const users = await response.json();

        const user = users.find(u => u.usuario === usuario && u.senha === senha);


        if (user) {
            window.location.href = `home.html?nome=${encodeURIComponent(user.nome)}`;
        } else {

            alert("Credenciais inválidas!");
            errorMessage.style.display = "block";

        }
    } catch (error) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Erro ao processar login. Tente novamente.", error;


        console.error("Erro ao carregar usuários:", error);
        alert("Erro ao processar login. Tente novamente.");
    }
});


function somar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    const resultado = document.getElementById("resultado");
    const textoBalao = document.getElementById("texto-balao")

    const rosto = document.getElementById("rosto");


    if (isNaN(n1) || isNaN(n2)) {
        // rosto.style.display = "none";
        // textoBalao.style.fontSize = "15px";
        textoBalao.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    // rosto.style.display = "none";
    // resultado.style.display = "block";
    // resultado.textContent = "Resultado: " + (n1 + n2);

    textoBalao.textContent = "Resultado: " + (n1 + n2);
}

function subtrair() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);

    const resultado = document.getElementById("resultado");
    const textoBalao = document.getElementById("texto-balao")

    const rosto = document.getElementById("rosto");


    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Por favor, insira dois números válidos.";
        return;
    }
    //rosto.style.display = "none";
    //resultado.style.display = "block";
    textoBalao.textContent = "Resultado: " + (n1 - n2);
}

function dividir() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");
    const rosto = document.getElementById("rosto");


    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Por favor, insira dois números válidos.";
        return;
    }
    if (n2 === 0) {
        resultado.textContent = "Erro: divisão por zero.";
        return;
    }

    rosto.style.display = "none";
    resultado.style.display = "block";
    resultado.textContent = "Resultado: " + (n1 / n2);
}


function multiplicar() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");
    const rosto = document.getElementById("rosto");


    if (isNaN(n1) || isNaN(n2)) {
        resultado.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    rosto.style.display = "none";
    resultado.style.display = "block";
    resultado.textContent = "Resultado: " + (n1 * n2);
}