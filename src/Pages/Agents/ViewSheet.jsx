import "./style.css"

function ViewSheet({ agent, toAgents }) {
    return (
        <div>
            <header>
                <h1>C.R.I.S</h1>
            </header>
            <main>
                <div className="mainSheetInfo">
                    <h2>Nome: {agent.nome}</h2>
                    <p>Classe: {agent.className}</p>
                    <p>NEX: {agent.nex}%</p>
                </div>
                <div className="atributesInputs">
                    <p id="for">FOR: {agent.atributos.forca}</p>
                    <p id="agi">AGI: {agent.atributos.agilidade}</p>
                    <p id="vig">VIG: {agent.atributos.vigor}</p>
                    <p id="int">INT: {agent.atributos.intelecto}</p>
                    <p id="pre">PRE: {agent.atributos.presenca}</p>
                </div>
            </main>
            <footer>
                <button onClick={toAgents}>Voltar para Agentes</button>
            </footer>
        </div>
    )
}

export default ViewSheet