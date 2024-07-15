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
      <a className='btn btn-success' href="https://github.com/TechCos-Inc/CGPA-apk-downloaded/raw/main/public/CGPA_Calculator.apk" download="CGPA_Calculator.apk"> Direct Download</a>
    </div>
    <div className="cen container-fluid">
    <h4>Discription</h4>
    <p>If dialgue box please click install anyway</p>
    </div>
    </>
  )
}

export default App
