// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer
// entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const reverseString = (word) => {
    const separator = word.split("");
    let newWord = "";
    for (let i = separator.length - 1; i >= 0; i--) {
        newWord += separator[i];
    }
    return newWord;
};

console.log(reverseString("hello"));
