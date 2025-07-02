import { useState } from "react"
const App=()=>{
  const [display,setDisplay]=useState(false)
  return(
    <>
    <h1>toggle in react</h1>
    
    {
    display?<h1>Suprim</h1>:null
    }
     
    </>
  )
}
export default App