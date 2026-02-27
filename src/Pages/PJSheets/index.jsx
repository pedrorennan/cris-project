import CreatePJ from "../../Components/CreatePJ";
import './style.css'

function Agents({toHome}) {

    return (
        <div className="sheet-container">
            <CreatePJ/>
            <button onClick={toHome}>Voltar para a página inicial</button>
        </div>
    )
}

export default Agents