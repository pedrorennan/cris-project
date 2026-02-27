function Atributes({ atributes, setAtributes }) {
    const handle = (atb, value) => {
        setAtributes({
            ...atributes,
            [atb]: Number(value)
        })
    }

    return (
        <div>
            <p>FOR</p><input type="text" value={atributes.forca} onChange={(e) => handle('forca', e.target.value)} placeholder="FOR"/>
            <p>AGI</p><input type="text" value={atributes.agilidade} onChange={(e) => handle('agilidade', e.target.value)} placeholder="AGI"/>
            <p>VIG</p><input type="text" value={atributes.vigor} onChange={(e) => handle('vigor', e.target.value)} placeholder="VIG"/>
            <p>INT</p><input type="text" value={atributes.intelecto} onChange={(e) => handle('intelecto', e.target.value)} placeholder="INT"/>
            <p>PRE</p><input type="text" value={atributes.presenca} onChange={(e) => handle('presenca', e.target.value)} placeholder="PRE"/>
        </div>
    )
}

export default Atributes