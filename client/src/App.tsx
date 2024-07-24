import { useState, useEffect } from 'react'
import react from "./assets/react.svg"

const App = () => {
  const [data, setData] = useState("loading...")
  const [url, setUrl] = useState('http://localhost:3000/api/');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data.message)
    }

    fetchData()
  }, [url])

  return (
    <div className="container">
      <img src={react} alt="react logo" />
      <h3>API ENDPOINT: {url} </h3>
      <h3>RESPONSE: <b>{data}</b></h3>
      <div className="btns">
        <button onClick={() => { setUrl("http://localhost:3000/api/") }}>/api</button>
        <button onClick={() => { setUrl("http://localhost:3000/api/reiser-smrdi") }}>/reiser-smrdi</button>
      </div>
    </div>
  )
}

export default App
