// Exercicio 2
 const verifiedRandomNumbersPromises = new Promise((resolve, reject) => {
    const numberRandom = Array.from(Array(10), () => Math.floor(Math.random() * 10 + 1));
    const potentiation = numberRandom.map((number) => Math.pow(number, 2));
    const sumArrays = potentiation.reduce((acc, number) => acc += number);

    if(sumArrays < 8000) return resolve(sumArrays);
    return reject(sumArrays);   
})

