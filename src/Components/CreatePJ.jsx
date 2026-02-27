import RenderPJ from "./RenderPJ"
import './style.css'
import { useState } from "react"

function CreatePJ() {
    const [showSheet, setShowSheet] = useState(false)

    const [namePJ, setName] = useState("")
    const [classPJ, setClass] = useState("")
    const [nexPJ, setNex] = useState(0)

    return (
        <div className="createPJ">
            <input type="text" value={namePJ} onChange={(e) => { setName(e.target.value) }} placeholder='Nome do Agente' />
            <input type="text" value={classPJ} onChange={(e) => { setClass(e.target.value) }} placeholder='Classe do Agente' />
            <input type="number" value={nexPJ} onChange={(e) => { setNex(e.target.value) }} placeholder='NEX do Agente' min="0" max="99" />
            <button onClick={() => setShowSheet(true)}>
                Criar Personagem
            </button>
            {showSheet && (
                <RenderPJ setName={namePJ} setClass={classPJ} setNex={nexPJ} />
            )}
        </div>
    )
}

export default CreatePJ