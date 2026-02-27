import { useEffect, useState } from "react"

function RenderPJ() {
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
                    <div key={agent.id || index} className="card-agente">
                        <h3>{agent.nome}</h3>
                        <p>{agent.className}</p>
                        <p>{agent.nex}%</p>
                    </div>
                ))
            ) : (
                <p>Nenhum agente ainda...</p>
            )}
        </div>
    )
}

export default RenderPJ