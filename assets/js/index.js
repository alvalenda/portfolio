function homeLogoClique() {
    document.querySelector('#anchor-logo').addEventListener('click', () => {
        digitarPorLetras(document.querySelector('.home-digitado'));
    });
}

function hoverMudaDescricao(nomeCard, texto) {
    const mudaDescricao = document.querySelector('.mudar-descricao');

    document.querySelector(nomeCard).addEventListener('mouseover', () => {
        mudaDescricao.innerText = texto;
    });

    document.querySelector(nomeCard).addEventListener('mouseout', () => {
        mudaDescricao.innerText = `Coloque o Mouse sobre um Card para receber sua descrição neste campo.`;
    });
}

function digitarPorLetras(elemento) {
    const textoArray = elemento.innerText.split('');
    elemento.innerText = ' ';
    textoArray.forEach((letra, n) => {
        setTimeout(() => {
            elemento.innerText += letra;
        }, 100 * n);
    });
}

function iniciarEventos() {
    // Inicia Eventos de Mouse Hover das Cards de Skills
    hoverMudaDescricao(
        '.html',
        'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.',
    );
    hoverMudaDescricao(
        '.css',
        'CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.',
    );
    hoverMudaDescricao(
        '.js',
        'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).',
    );
    hoverMudaDescricao(
        '.py',
        'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.',
    );
    hoverMudaDescricao(
        '.nodejs',
        'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
    );
    hoverMudaDescricao(
        '.c',
        'C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização (ISO).',
    );

    // Inicia Evento de clicar na Logo e Reescrever texto digitado na HOME
    homeLogoClique();
}

function main() {
    digitarPorLetras(document.querySelector('.home-digitado'));
    iniciarEventos();
}
main();
