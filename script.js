// SELECIONA OS BOTÕES DE COMPRA DA VITRINE
var botoesComprar = document.querySelectorAll('.btn-comprar');

// NÚMERO ÚNICO OFICIAL DA CHARMS EXTRAÍDO DO PRINT DO INSTAGRAM
var numeroCharms = '5589981188379';

var produtoSelecionado = null;

// 1. Captura de forma idêntica as informações e a URL da foto do look escolhido
botoesComprar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        var card = botao.closest('.card-produto');

        var nome = card.querySelector('.nome-produto').textContent.trim();
        var preco = card.querySelector('.preco-produto').textContent.trim();
        var imagem = card.querySelector('.img-produto');

        // Sua lógica perfeita que converte o src local em link completo para a internet
        produtoSelecionado = {
            nome: nome,
            preco: preco,
            foto: new URL(imagem.getAttribute('src'), document.baseURI).href
        };

        // Como a loja só tem 1 número, dispara a função direto sem abrir modal!
        enviarPedidoParaCharms(numeroCharms);
    });
});

// 2. Monta a mensagem personalizada e faz o redirecionamento estável
function enviarPedidoParaCharms(numero) {
    if (!produtoSelecionado) return;

    // Atualizado com o nome da nova loja: CHARMS!
    var mensagem =
        'Olá! Tenho interesse neste look da Charms! 🛍️\n\n' +
        'Produto: ' + produtoSelecionado.nome + '\n' +
        'Preço: ' + produtoSelecionado.preco + '\n' +
        'Foto do produto: ' + produtoSelecionado.foto;

    // Formato moderno 'wa.me' acoplado à sua codificação estável
    var linkFinal = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem);

    // Abre o WhatsApp na hora
    window.open(linkFinal, '_blank');
}
