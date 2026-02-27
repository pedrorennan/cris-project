import CreatePJ from "../../Components/CreatePJ";
import RenderPJ from "../../Components/RenderPJ";
import ViewSheet from "./ViewSheet"
import './style.css'
import { useState, useEffect } from "react";

function Agents({ toHome }) {
    const [selectedAgent, setSelectedAgent] = useState(null)
    const [showSheet, setShowSheet] = useState(true)

    if (selectedAgent) {
        return <ViewSheet agent={(selectedAgent)} toAgents={() => setSelectedAgent(null)}/>
    }

    return (
        <div className="sheet-container">
            <header>
                <h1>C.R.I.S</h1>
                <h2>Seus Agentes</h2>
            </header>
            <main>
                {showSheet ? (
                    <RenderPJ selectAgent={(agente) => setSelectedAgent(agente)}/>
                ) : (
                    <CreatePJ sheetDone={() => setShowSheet(true)} />
                )}
                <button onClick={() => setShowSheet(false)}>Criar Novo Agente</button>
            </main>
            <footer>
                <button onClick={toHome}>Voltar para a página inicial</button>
            </footer>
        </div>
    )
}

export default Agents