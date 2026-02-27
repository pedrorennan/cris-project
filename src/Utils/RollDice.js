const RollDice = (dice, nDices) => {
    let resultado = 0;

    for (let i = 1; i <= nDices; i++) {
        let diceResult = Math.floor(Math.random() * dice) + 1;
        console.log(`Resultado ${i}: ${diceResult}`)
        if (diceResult > resultado) {
            resultado = diceResult;
        }
    }

    alert(resultado)
}

export default RollDice