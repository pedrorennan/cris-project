import { useState } from "react"

function CreatePJ({ sheetDone }) {
    const [namePJ, setName] = useState("")
    const [classPJ, setClass] = useState("")
    const [nexPJ, setNex] = useState("")

    const save = () => {
        if (namePJ && classPJ && nexPJ) {
            const newAgent = {
                id: namePJ,
                nome: namePJ,
                className: classPJ,
                nex: nexPJ
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
            <input type="text" value={namePJ} onChange={(e) => { setName(e.target.value) }} placeholder='Nome do Agente' />
            <input type="text" value={classPJ} onChange={(e) => { setClass(e.target.value) }} placeholder='Classe do Agente' />
            <input type="text" value={nexPJ} onChange={(e) => { setNex(Number(e.target.value)) }} placeholder='NEX do Agente' />
            <button onClick={save}>
                Criar Agente
            </button>
        </div>
    )
}

export default CreatePJ