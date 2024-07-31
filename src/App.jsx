
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, rangeChange, reset } from './redux/counterslice'
import { useState } from 'react'

function App() {
     const [range , setRange] = useState("")

    const count = useSelector((state)=>state.counterReducer.value)
    /* console.log(count) */    

    const dispatch = useDispatch()
 
    const handleRange =()=>{
      if(!range){
        alert('Please enter the Range')
      }
      else{
        dispatch(rangeChange(Number(range)))
      }
    }


    console.log(range);

  return (
    <>
     <div style={{backgroundColor:'black', height:'100vh'}} className='d-flex align-items-center justify-content-center '>
       <div style={{backgroundColor:'white',height:'500px'}} className='p-5 rounded'>
        <h1 className='text-info'>Counter Application</h1>

        <h1 className='text-center my-5' style={{fontSize:'70px'}}> {count}</h1>
        
        <div className='mt-5 d-flex justify-content-evenly'>
          <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
          <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
          <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
        </div>
        
        <div className='d-flex mt-5'>
          <input type="text" placeholder='Enter the Range' className='form-control'  onChange={(e)=>setRange(e.target.value)}/>
          <button className='btn btn-primary ms-3' onClick={handleRange}>Click</button>
        </div>

       </div>
     </div>
      
     
     
    </>
  )
}

export default App
