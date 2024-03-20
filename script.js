let numberOne;
let numberTwo;

const operations = {
  sum: { name: 'soma', action: () => numberOne + numberTwo },
  subtraction: { name: 'subtração', action: () => numberOne - numberTwo },
  multiplication: {
    name: 'multiplicação',
    action: () => numberOne * numberTwo,
  },
  division: { name: 'divisão', action: () => numberOne / numberTwo },
  restOfDivision: {
    name: 'resto da divisão',
    action: () => numberOne % numberTwo,
  },
};
const messages = [];

const setNumbers = () => {
  numberOne = prompt('Insira o primeiro número:');
  numberTwo = prompt('Insira o segundo número:');
};

const convertNumbers = () => {
  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
};

const compareNumbers = () => {
  if (numberOne === numberTwo) alert('Os números inseridos são iguais.');
};

const runOperations = () => {
  for (const [key, value] of Object.entries(operations)) {
    let { name, action } = value;
    let result = action();
    let message = `A ${name} dos dois números é: ${result}.`;

    console.log(message);

    if (key === 'sum') {
      if (result % 2 === 0) message += ' É par.';
    }

    messages.push(message);
  }
};

const showMessages = () => {
  for (const message of messages) {
    alert(message);
  }
};

const main = () => {
  setNumbers();
  convertNumbers();
  compareNumbers();
  runOperations();
  showMessages();
};

main();
