   // Função para enviar uma solicitação AJAX para ligar o relé
   document.getElementById("ligar").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/ligar", true);
    xhr.send();
});

// Função para enviar uma solicitação AJAX para desligar o relé
document.getElementById("desligar").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/desligar", true);
    xhr.send();
});

// Função para enviar uma solicitação AJAX para verificar o consumo
document.getElementById("verificarconsumo").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/consumo", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("consumo").innerHTML = "Consumo de energia: " + xhr.responseText;
        }
    };
    xhr.send();
});
