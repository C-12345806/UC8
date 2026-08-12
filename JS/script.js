// Função para resgistrar logs no painel
const painelLog = document.getElementById('log-painel');

function registrarLog(mensagem) {
    
    const novaLinha = document.createElement('div');
    novaLinha.textContent = mensagem;
    painelLog.appendChild(novaLinha);

};

// Evento de Mouse
const btnClique = document.getElementById('btn-clique');
const areaMouse = document.getElementById('area-mouse');

btnClique.addEventListener('click', function() {
    registrarLog("[CLIQUE] Evento de mouse: Evento 'click' detectado!");
});

// Evento de Mouse: mouseover
areaMouse.addEventListener('mouseover', function() {
    areaMouse.textContent = "Mouse sobre a área!";
    areaMouse.style.backgroundColor = "#7a97ff";
    registrarLog("[MOUSE SOBRE] Evento de mouse: Evento 'mouseover' detectado!");
});

// Evento de Mouse: mouseleave
areaMouse.addEventListener('mouseleave', function() {
    areaMouse.textContent = "Mouse saiu da área!";
    areaMouse.style.backgroundColor = "#7c0a0a";
    registrarLog("[MOUSE SAIU] Evento de mouse: Evento 'mouseleave' detectado!");
});

// Evento de Teclado: keydown
const campoTeclado = document.getElementById('campo-teclado');
campoTeclado.addEventListener('keydown', function(evento) {
    registrarLog("[TECLA PRESSIONADA] Teclado: Evento 'keydown' disparado!");

});

// Evento de teclado: keyup
campoTeclado.addEventListener('keyup', function(evento) {
    registrarLog("[TECLA LIBERADA] Teclado: Evento 'keyup' disparado!");

});

// Evento de formulário: input
const meuFormulario = document.getElementById('meu-formulario');
const campoInput = document.getElementById('campo-input');

campoInput.addEventListener('input', function(evento) {
    registrarLog(`[INPUT] Formulário: Evento 'input' disparado! -> Valor atual: "${campoInput.value}"`);
});

 
// Evento de formulário: submit (acesso ao evento de envio via id do formulário)
// meuFormulário.addEventListener('submit', function(evento) {
//        evento.preventDefailt(); // Evita o envio do formulário para fins de demonstração
//        registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
//});

// Isso vai "funcionar", mas vai capturar apenas o clique no botão de envio, não o envio do formulário
// em si. Para capturar o envio do forulário, é melhor usar o evento 'submit' no próprio formulário. 
//const campoEnvio = document.getElementById('campo-envio');
//meuFormulario.addEventListener('submit', function(evento) {
    //evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
   // registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
//});

meuFormulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Impede o envio padrão do formulário
    registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
});




const campoEnvio = document.getElementById('campo-envio');
meuFormulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita o envio do formulário para fins de demonstração
    registrarLog("[SUBMIT] Formulário: Evento 'submit' disparado!");
});






