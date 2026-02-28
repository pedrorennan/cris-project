import regras from '../Data/rules.json'

function Skills({ className, trilhaNome, nex }) {
    const classe = regras.classes.find((classe) => classe.id.toLowerCase() === className.toLowerCase())
    const trilha = classe.trilhas.find((e) => e.nome.toLowerCase() === trilhaNome.toLowerCase())

    const poderesClasse = classe.poderes_classe;
    const poderesTrilha  = trilha.poderes_trilha.filter(n => n.NEX <= nex);

    const poderes = [...poderesClasse, ...poderesTrilha]
    return (
        <div>
            {poderes.length > 0 ? (
                poderes.map((poder, index) => (
                    <div key={index} className='poder'>
                        <p>{poder.nome}: {poder.efeito}</p>
                    </div>
                ))
            ) : (
                <p>Sem nenhum poder ainda...</p>
            )}
        </div>
    )
}

export default Skills