import regras from "../Data/rules.json"

function RenderPJ({name, className, nex}) {
    const dadosClasse = className
        ? regras.classes.find((c) => c.name.toLowerCase() === className.toLowerCase())
        : null

    return (
        <div className="renderPJ">
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Class:</strong> {dadosClasse.name}</p>
            <p><strong>Nex:</strong> {nex}</p>
        </div>
    )
}

export default RenderPJ