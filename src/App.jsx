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
      <a className='btn btn-success' href=" https://TechCos-Inc.github.io/CGPA-apk-downloaded/public/CGPA_Calculator.apk" download="CGPA_Calculator.apk"> Direct Download</a>
      <h5>OR</h5>
    </div>
      
    </>
  )
}

export default App
