import { useState } from "react"

  import User from "./user"
const App=()=>{
  const [display,setDisplay]=useState(false)
  return(
    <>
    <h1>toggle in react</h1>
    <button onClick={()=>setDisplay(!display)}>Toogle</button>
    {/* {
    display?<h1>Suprim</h1>:null
    } */}
    {
    display?<h1><User/></h1>:null
    }
     
    </>
  )
}
export default App