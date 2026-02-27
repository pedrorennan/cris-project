import regras from "../Data/rules.json"

function RenderPJ({name, className, nex}) {
    const agents = JSON.parse()

    return (
        <div className="renderPJ">
            <p><strong>Nome:</strong> {name}</p>
            <p><strong>Class:</strong> {className}</p>
            <p><strong>Nex:</strong> {nex}</p>
        </div>
    )
}

export default RenderPJ