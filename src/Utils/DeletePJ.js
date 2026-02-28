const DeletePJ = (agentRem) => {
    const agents = JSON.parse(localStorage.getItem("agentes"));
    const attAgents = agents.filter(agent => agent.id !== agentRem)

    localStorage.setItem("agentes", JSON.stringify(attAgents));
}

export default DeletePJ