import regras from "../Data/rules.json"

function RenderPJ({setName, setClass, setNex}) {
    const dadosClasse = setClass
        ? regras.classes.find((c) => c.name.toLowerCase() === setClass.toLowerCase())
        : null

    return (
        <div className="renderPJ">
            {setName ? (
                <div>
                    <h2>Nome: {setName}</h2>
                </div>
            ) : (
                null
            )}
            {dadosClasse ? (
                <div>
                    <h2>Classe: {dadosClasse.name}</h2>
                </div>
            ) : (
                setClass !== "" && <p>Classe não encontrada</p>
            )}
            {setNex ? (
                <div>
                    <h2>Nex: {setNex}%</h2>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

export default RenderPJ