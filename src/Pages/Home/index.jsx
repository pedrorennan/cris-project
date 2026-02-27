import './style.css'

function Home({toAgents}) {

  return (
    <div class="container">
      <h1>C.R.I.S</h1>
      <div class="nav">
        <button onClick={toAgents}>Agentes</button>
        <button>Campanhas</button>
      </div>
    </div>
  )
}

export default Home
