import CreatePJ from "../../Components/CreatePJ";
import agentsList from "./agents.json"
import RenderPJ from "../../Components/RenderPJ";
import './style.css'
import { useState, useEffect } from "react";

function Agents({toHome}) {
    const [buildSheet, setBuildSheet] = useState(false)

    return (
        <div className="sheet-container">
            <h1>C.R.I.S</h1>
            <h2>Seus Agentes</h2>
            <CreatePJ></CreatePJ>
            <button onClick={toHome}>Voltar para a página inicial</button>
        </div>
    )
}

export default Agents