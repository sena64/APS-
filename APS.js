//PROGRAMAÇÃO JAVASCRIPT
//963R
//Lucas de Sena Silva Bezerro 2024100028


// Função que verifica se um número é primo
function isPrime(num) {
    // Números menores ou iguais a 1 não são primos
    if (num <= 1) {
        return false;
    }
    // Verifica se num é divisível por algum número de 2 até a raiz quadrada de num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // Se for divisível, então não é primo
        if (num % i === 0) {
            return false;
        }
    }
    // Se não houver nenhum divisor, então é primo
    return true;
}

// Função que encontra os 10 maiores números primos a partir de um número fornecido
function findLargestPrimes() {
    // Solicita um número ao usuário
    let input = prompt("Digite um número: ");
    // Converte a entrada do usuário para um número inteiro
    let num = parseInt(input);
    // Array para armazenar os números primos encontrados
    let primes = [];

    // Continua procurando até encontrar 10 números primos
    while (primes.length < 10) {
        // Verifica se o número atual é primo
        if (isPrime(num)) {
            // Se for primo, adiciona ao array de primos
            primes.push(num);
        }
        // Incrementa o número para verificar o próximo
        num++;
    }

    // Imprime os 10 números primos encontrados no console
    console.log("Os 10 maiores números primos a partir do número fornecido são:");
    console.log(primes);
}

// Executar a função findLargestPrimes
findLargestPrimes();
