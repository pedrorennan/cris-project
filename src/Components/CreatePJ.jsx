import { useState } from "react"
import RenderPJ from "./RenderPJ"

function CreatePJ() {
    const [namePJ, setName] = useState("")
    const [classPJ, setClass] = useState("")
    const [nexPJ, setNex] = useState(Number)

    return (
        <div className="createPJ">
            <div>
                <input type="text" value={namePJ} onChange={(e) => { setName(e.target.value) }} placeholder='Nome do Agente' />
                <input type="text" value={classPJ} onChange={(e) => { setClass(e.target.value) }} placeholder='Classe do Agente' />
                <input type="number" value={nexPJ} onChange={(e) => { setNex(e.target.value) }} placeholder='NEX do Agente' />
                <button onClick={() => {
                    if (namePJ && classPJ && nexPJ) {
                        const newAgent = {
                            id: namePJ,
                            nome: namePJ,
                            className: classPJ,
                            nex: nexPJ 
                        }
                        localStorage.setItem((`agente_${namePJ}`), JSON.stringify(newAgent))
                    } else {
                        alert("Preeencha todos os campos...")
                    }
                }}>
                    Criar Personagem
                </button>
            </div>
        </div>
    )
}

export default CreatePJ