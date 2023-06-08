import React, { useState } from "react"

export interface Submission  {
  content?: string,
  image?: File | null

}

function App() {

  const [ state, changeState ] = useState<Submission>()

  async function onSubmit(e: React.MouseEvent){
    e.preventDefault()
    const status = await fetch('http://localhost:5000/', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    })
    console.log(status)

    }


  return (
    <>
      <form>
        <input type="text" onChange={(e) => changeState({content: e.target.value})}/>
        <br></br>
        <input type="file" onChange={(e) => changeState({ image: e.target.files[0]})}/>
        <br></br>
        <button onClick={onSubmit}>Submit the form</button>
      </form>
    </>
  )
}

export default App
