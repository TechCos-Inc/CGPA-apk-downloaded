import { useState } from 'react'
import './App.css'
import logo from './assets/logoname.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="homepage container-fluid d-flex">
      <img src={logo} className='homeimg' />
    </div>
    <div className="detial container-fluid">
      <h1>CGPA Calculator Apk</h1>
      <p>TechCos CGPA Calculator application Download page</p>
      <a className='btn btn-success' href=" http://localhost:5173/src/assets/CGPA_Calculator.apk" download="CGPA_Calculator.apk">Download</a>
    </div>
      
    </>
  )
}

export default App
