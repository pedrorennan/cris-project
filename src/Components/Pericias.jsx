import regras from "../Data/rules.json"

function Pericias({ className }) {
    const classe = regras.classes.find(e => e.id.toLowerCase() === className.toLowerCase())
    
    let periciasTreinadas = []

    periciasTreinadas.push(classe.pericias)

    console.log(periciasTreinadas)
    return (
        <div>
            {periciasTreinadas.length > 0 ? (
                periciasTreinadas.map((pericia, index) => (
                    <div key={index} className="pericia">
                        <p>{pericia}</p>
                    </div>
                ))
            ) : (
                <div>
                    <p>Sem pericias treinadas ainda....</p>
                </div>
            )}
        </div>
    )
}

export default Pericias