import "../Pages/Agents/style.css"
import RollDice from "../Utils/RollDice"
import Skills from './Skills'

function ViewSheet({ agent, toAgents }) {
    return (
        <div className="containerViewSheet">
            <header>
                <h1>C.R.I.S</h1>
            </header>
            <main>
                <div className="mainSheetInfo">
                    <h2>Nome: {agent.nome}</h2>
                    <p>Classe: {agent.className}</p>
                    <p>NEX: {agent.nex}%</p>
                </div>
                <div className="atributesInfo">
                    <p>Atributos</p>
                    <div className="atributes">
                        <p id="for">FOR: <button onClick={() => RollDice(20, agent.atributos.forca)} className="atribute">{agent.atributos.forca}</button></p>
                        <p id="agi">AGI: <button onClick={() => RollDice(20, agent.atributos.agilidade)} className="atribute">{agent.atributos.agilidade}</button></p>
                        <p id="vig">VIG: <button onClick={() => RollDice(20, agent.atributos.vigor)} className="atribute">{agent.atributos.vigor}</button></p>
                        <p id="int">INT: <button onClick={() => RollDice(20, agent.atributos.intelecto)} className="atribute">{agent.atributos.intelecto}</button></p>
                        <p id="pre">PRE: <button onClick={() => RollDice(20, agent.atributos.presenca)} className="atribute">{agent.atributos.presenca}</button>   </p>
                    </div>
                </div>
                <div className="skillsInfo">
                    <h3>Habilidades</h3>
                    <Skills className={String(agent.className)}></Skills>
                </div>
            </main>
            <footer>
                <button onClick={toAgents}>Voltar para Agentes</button>
            </footer>
        </div>
    )
}

export default ViewSheet