import RenderPJ from "./RenderPJ"
import { useState } from "react"

function CreatePJ() {
    const [showSheet, setShowSheet] = useState(false)

    const [namePJ, setName] = useState("")
    const [classPJ, setClass] = useState("")
    const [nexPJ, setNex] = useState(Number)

    return (
        <div className="createPJ">
            <input type="text" value={namePJ} onChange={(e) => { setName(e.target.value) }} placeholder='Nome do Agente' />
            <input type="text" value={classPJ} onChange={(e) => { setClass(e.target.value) }} placeholder='Classe do Agente' />
            <input type="number" value={nexPJ} onChange={(e) => { setNex(e.target.value) }} placeholder='NEX do Agente'/>
            <button onClick={() => {
                if (namePJ && classPJ && nexPJ) {
                    setShowSheet(true)
                } else {
                    setShowSheet(false)
                    alert("Preeencha todos os campos...")
                }
            }}>
                Criar Personagem
            </button>
            {showSheet && (
                <RenderPJ name={namePJ} className={classPJ} nex={nexPJ} />
            )}
        </div>
    )
}

export default CreatePJ