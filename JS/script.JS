// URL da API que fornece os dados dos personagens da Disney
const apiUrl = 'https://api.disneyapi.dev/character';


// Define a página inicial da API
let paginaAtual = 1;


// Define o limite de personagens carregados por página
const limitePorPagina = 50;


// Guarda a quantidade total de personagens carregados
let totalPersonagens = 0;


// Seleciona o botão pelo ID definido no HTML
const botaoCarregar = document.getElementById('botaoCarregar');


// Seleciona o elemento responsável por mostrar
// a quantidade de personagens carregados
const mensagem = document.getElementById('mensagem');


// Seleciona o elemento onde os cards dos personagens
// serão inseridos
const resultado = document.getElementById('resultado');


// Seleciona o elemento que mostra o número da página
const pagina = document.getElementById('pagina');


// =====================================================
// FUNÇÃO PARA CARREGAR OS PERSONAGENS
// =====================================================

function carregarPersonagens() {

    // Desativa o botão enquanto os dados estão sendo carregados
    // Isso evita que o usuário faça vários cliques seguidos
    botaoCarregar.disabled = true;


    // Mostra uma mensagem informando que os personagens
    // estão sendo carregados
    mensagem.textContent = 'Carregando personagens...';


    // Monta a URL da API utilizando:
    // - a página atual
    // - o limite de 50 personagens
    let url = `${apiUrl}?page=${paginaAtual}&pageSize=${limitePorPagina}`;


    // Faz uma requisição HTTP para a API
    fetch(url)

        // Quando a API responder, recebe a resposta
        .then(function (resposta) {

            // Converte a resposta para o formato JSON
            return resposta.json();
        })


        // Recebe os dados convertidos para JSON
        .then(function (dados) {

            // Exibe no console os dados recebidos da API
            // Isso ajuda a analisar a estrutura das informações
            console.log(dados);


            // Percorre todos os personagens recebidos
            dados.data.forEach(function (personagem) {

                // Cria o card do personagem e adiciona
                // o HTML dentro do elemento "resultado"
                resultado.innerHTML += criarCard(personagem);
            });


            // Soma a quantidade de personagens recebidos
            // ao total que já estava carregado
            totalPersonagens += dados.data.length;


            // Atualiza a mensagem mostrando
            // o número total de personagens carregados
            mensagem.textContent =
                `${totalPersonagens} personagens carregados`;


            // Mostra na tela qual página foi carregada
            pagina.textContent =
                `Página ${paginaAtual}`;


            // Aumenta o número da página em 1
            // para que o próximo carregamento busque a próxima página
            paginaAtual++;


            // Ativa novamente o botão
            botaoCarregar.disabled = false;
        })


        // Caso aconteça algum erro durante a requisição
        .catch(function (erro) {

            // Mostra o erro no console
            console.log('Erro:', erro);


            // Mostra uma mensagem de erro para o usuário
            mensagem.textContent =
                'Erro ao carregar os personagens.';


            // Ativa novamente o botão
            botaoCarregar.disabled = false;
        });
}


// =====================================================
// FUNÇÃO PARA CRIAR O CARD DO PERSONAGEM
// =====================================================

function criarCard(personagem) {

    // Retorna o código HTML que será utilizado
    // para criar o card de cada personagem
    return `
        <div class="card">

            <!-- Imagem do personagem -->
            <img
                src="${personagem.imageUrl}"
                alt="${personagem.name}"
            >

            <!-- Nome do personagem -->
            <h2>${personagem.name}</h2>

        </div>
    `;
}


// =====================================================
// BOTÃO PARA CARREGAR MAIS 50 PERSONAGENS
// =====================================================

// Adiciona um evento de clique ao botão
botaoCarregar.addEventListener('click', function () {

    // Quando o botão for clicado,
    // chama a função que carrega os personagens
    carregarPersonagens();
});


// =====================================================
// CARREGA OS PRIMEIROS 50 AUTOMATICAMENTE
// =====================================================

// Executa a função assim que a página é aberta
// para carregar os primeiros 50 personagens
carregarPersonagens();