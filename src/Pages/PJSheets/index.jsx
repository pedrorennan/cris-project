import CreatePJ from "../../Components/CreatePJ";

function Agents({toHome}) {

    return (
        <div>
            <CreatePJ/>
            <button onClick={toHome}>Voltar para a página inicial</button>
        </div>
    )
}

export default Agents