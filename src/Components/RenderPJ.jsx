import { useEffect, useState } from "react"

function RenderPJ({ selectAgent }) {
    const [agents, setAgents] = useState([])

    useEffect(() => {
        const dados = localStorage.getItem("agentes");
        if (dados) {
            setAgents(JSON.parse(dados));
        }
    }, [])

    return (
        <div className="agents-list">
            {agents.length > 0 ? (
                agents.map((agent, index) => (
                    <button key={agent.id || index} className="card-agente-btn" onClick={() => selectAgent(agent)}>
                        <h3>{agent.nome}</h3>
                        <p>{agent.className}/{agent.trilha}</p>
                        <p>{agent.nex}%</p>
                    </button>
                ))
            ) : (
                <p>Nenhum agente ainda...</p>
            )}
        </div>
    )
}

export default RenderPJ