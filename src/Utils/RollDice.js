const RollDice = (dice, nDices) => {
    let resultado = [];

    if (nDices <= 0) {
        let diceResult1 = Math.floor(Math.random() * dice) + 1;
        let diceResult2 = Math.floor(Math.random() * dice) + 1;
        resultado.push(diceResult1, diceResult2);
    } else {
        for (let i = 1; i <= nDices; i++) {
            let diceResult = Math.floor(Math.random() * dice) + 1;
            resultado.push(diceResult);
            console.log(`Resultado ${i}: ${diceResult}`)
            if (diceResult > resultado) {
                resultado[i-1] = diceResult;
            }
        }
    }


    alert(`Resultados: ${resultado}`)
}

export default RollDice