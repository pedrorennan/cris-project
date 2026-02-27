import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Agents from "./Pages/Agents";

function App() {
    const [page, setPage] = useState("home")

    useEffect(() => {
        console.log(`Pagina ${page} carregada!`)
    }, [page])

    return (
        <div>
            {page === "home" && <Home toAgents={() => setPage("agents")}/>}
            {page === "agents" && <Agents toHome={() => setPage("home")}/>}
        </div>
    )
}

export default App