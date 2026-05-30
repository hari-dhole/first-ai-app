import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  useEffect( ()=>{
    fetch("/api/hello").then((res)=> res.json()).then(data=> setMessage(data.message));
  },[]);

  return (
    <p className="text-3xl font-bold p-4">{message}</p>
  )
}

export default App
