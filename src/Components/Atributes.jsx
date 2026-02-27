function Atributes({ atributes, setAtributes }) {
    const handle = (atb, value) => {
        setAtributes({
            ...atributes,
            [atb]: Number(value)
        })
    }

    return (
        <div className="atributesInputs">
            <div id="for"><p>FOR</p><input type="text" value={atributes.forca} onChange={(e) => handle('forca', e.target.value)} placeholder="FOR"/></div>
            <div id="agi"><p>AGI</p><input type="text" value={atributes.agilidade} onChange={(e) => handle('agilidade', e.target.value)} placeholder="AGI"/></div>
            <div id="vig"><p>VIG</p><input type="text" value={atributes.vigor} onChange={(e) => handle('vigor', e.target.value)} placeholder="VIG"/></div>
            <div id="int"><p>INT</p><input type="text" value={atributes.intelecto} onChange={(e) => handle('intelecto', e.target.value)} placeholder="INT"/></div>
            <div id="pre"><p>PRE</p><input type="text" value={atributes.presenca} onChange={(e) => handle('presenca', e.target.value)} placeholder="PRE"/></div>
        </div>
    )
}

export default Atributes