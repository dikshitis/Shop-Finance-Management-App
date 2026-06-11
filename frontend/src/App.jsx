import { useState,useEffect} from 'react'
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
  
      <div id='container'>

          <DashBoard name={datas}/>

      </div>

    </>
  )
}
}
export default App
