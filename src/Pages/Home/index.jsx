import './style.css'

function Home({toAgents}) {

  return (
    <div className="home-container">
      <h1>C.R.I.S</h1>
      <div className="nav">
        <button onClick={toAgents}>Agentes</button>
        <button>Campanhas</button>
      </div>
    </div>
  )
}

export default Home
