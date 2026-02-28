import regras from '../Data/rules.json'

function Skills({ className }) {
    const classe = regras.classes.find((classe) => classe.id.toLowerCase() === className.toLowerCase())
    
    const poderes = classe.poderes_classe;
    console.log(poderes)
    return (
        <div>
            <p>Nome: {poderes[0].nome}</p>
            <p>Efeito: {poderes[0].efeito}</p>
        </div>
    )
}

export default Skills