import './style.css'
import CreatePJ from "../../Components/CreatePJ.jsx"
import { useState } from 'react'

function Home() {
  const [createSheet, setCreateSheet] = useState(false)

  return (
    <div class="container">
      <h1>C.R.I.S</h1>
      <button onClick={() => {setCreateSheet(true)}}>Criar novo personagem</button>
      {createSheet && (
        <CreatePJ/>
      )}
    </div>
  )
}

export default Home
