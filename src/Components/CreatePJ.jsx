import { useState } from "react"
import Atributes from "./Atributes";

function CreatePJ({ sheetDone }) {
    const [namePJ, setName] = useState("")
    const [classPJ, setClass] = useState("")
    const [nexPJ, setNex] = useState("")
    const [trilha, setTrilha] = useState("")

    const [atributes, setAtributes] = useState({
        forca: 0,
        agilidade: 0,
        vigor: 0,
        intelecto: 0,
        presenca: 0
    })

    const save = () => {
        if (namePJ && classPJ && nexPJ && trilha) {
            const newAgent = {
                id: namePJ,
                nome: namePJ,
                className: classPJ,
                nex: nexPJ,
                atributos: atributes,
                trilha: trilha
            }
            const atualAgents = JSON.parse(localStorage.getItem("agentes")) || [];

            const attAgents = [...atualAgents, newAgent];

            localStorage.setItem("agentes", JSON.stringify(attAgents));

            sheetDone()
        } else {
            alert("Preeencha todos os campos...")
        }
    }

    return (
        <div className="createPJ">
            <div className="inputs">
                <div>
                    <input type="text" value={namePJ} onChange={(e) => { setName(e.target.value) }} placeholder='Nome do Agente' />
                    <input type="text" value={classPJ} onChange={(e) => { setClass(e.target.value) }} placeholder='Classe do Agente' />
                    <input type="text" value={trilha} onChange={(e) => { setTrilha(e.target.value) }} placeholder='Trilha do Agente' />
                    <input type="text" value={nexPJ} onChange={(e) => { setNex(Number(e.target.value)) }} placeholder='NEX do Agente' />
                </div>
                <Atributes atributes={atributes} setAtributes={setAtributes} />
            </div>
            <button onClick={save}>
                Criar Agente
            </button>
            <button onClick={() => sheetDone()}>Voltar pra Agentes</button>
        </div>
    )
}

export default CreatePJ