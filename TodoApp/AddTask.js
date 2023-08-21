import React from 'react'
import { useState } from 'react'

const AddTask = ({Addtask}) => {
    const [value, setValue] = useState('')
    
    const additem=()=>{
       Addtask(value)
       setValue("")
    //    submit chymbo blank avan sevalue blank kodukkune enut value= {value}kodutha work akum
     }
  return (
    <>
    <div className='input-container'>
        <input className='input' type='text' placeholder='add new task'
        value={value}
        onChange={(e)=>{setValue(e.target.value)}}
        // evide eni enth type chythalum setValuel varum
        />
        <button className='addBtn' onClick={additem}>ADD</button>
    </div>
    </>
  )
}

export default AddTask