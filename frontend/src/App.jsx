import { useState,useEffect} from 'react'
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './App.css'
import UserInputs from './userinputs'
import DashBoard from './dashboard/dashboard'

function App() {
    const [datas, setData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/users")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])


if(datas.length === 0) return <div>Loading...</div>
else{ 
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<DashBoard name={datas} />} />
        <Route path='/calculate' element={<UserInputs data={datas}/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}
}
export default App
