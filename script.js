// script.js

// Seleciona o display
const display = document.querySelector('.display');

// Seleciona todos os botões
const buttons = document.querySelectorAll('.button');

// Função para atualizar o display
function updateDisplay(value) {
  display.textContent = value;
}

// Adiciona evento de clique em cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const btnValue = button.textContent;

    // Atualiza o display com o valor do botão
    updateDisplay(btnValue);

    // Efeito visual temporário no botão
    button.style.backgroundColor = '#0f0'; // acende verde
    setTimeout(() => {
      button.style.backgroundColor = '#444'; // volta à cor original
    }, 200);
  });
});

