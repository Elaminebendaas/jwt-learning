import React, { useState } from "react"


function App() {

  const [ state, changeState ] = useState(String)

  async function onSubmit(e: React.MouseEvent){
    e.preventDefault()
    const status = await fetch('http://localhost:5000/', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: state })
    })
    console.log(status)

    }

    



  return (
    <>
      <form>
        <input type="text" onChange={(e) => changeState(e.target.value)}/>

        <button onClick={onSubmit}>Submit the form</button>
      </form>
    </>
  )
}

export default App
