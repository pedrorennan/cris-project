import { useEffect, useState } from "react"
import regras from "../Data/rules.json"

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
            {agents.map((agent, index) => (
                <div key={agent.id || index} className="card-agente">
                    <h3>{agent.nome}</h3>
                    <p>{agent.className}</p>
                    <p>{agent.nex}%</p>
                </div>
            ))}
        </div>
    )
}

export default RenderPJ