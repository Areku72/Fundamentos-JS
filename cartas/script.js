let count = 1;

function cc(card) {
// Cambia solo el código debajo de esta línea
switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count ++;
    break;
    case '10':
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;
    break;
    default:
    break;
}

if (count > 0) {
    return `${count} Bet`;
} else {
    return `${count} Hold`;
}
// Cambia solo el código encima de esta línea
}

function displayResult() {
const cardInput = document.getElementById('cardInput').value;
const cards = cardInput.split(',');
let totalCount = 0;

for (const card of cards) {
    const result = cc(card.trim());
    const count = parseInt(result);
    totalCount += count;
}

const finalResult = totalCount > 0 ? `${totalCount} Bet` : `${totalCount} Hold`;
document.getElementById('result').textContent = finalResult;
}