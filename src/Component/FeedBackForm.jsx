import React from 'react'
import Card from './shared/Card'
import '../index.css'
import Button from './Button'
import { useState } from 'react'

////////////////////////////
export default function FeedBackForm() {
  const [text,setText]=useState('')
  const [isDisabled,setIsDisabled]=useState(true)
  const [message,setMessage]=useState('')
  function handleChange(e){

    if(text===''){
      setIsDisabled(true)
      setMessage(null)
      console.log('a')
    }else if(text.trim().length<10 && text!==''){
      setMessage('Text must be at least 10 characters')
      setIsDisabled(true)
      console.log('b')

    }else{
      setMessage(null)
      setIsDisabled(false)
      console.log('c')

    }
    setText(e.target.value)
  
  

  }
  return (
    <Card>
        <form >
            <h2>How Would you rate your service with us</h2>
            <div className='input-group'>
                <input type="text" placeholder='write a review' onChange={(e)=>handleChange(e)}/>
                <Button type={'text'} children={'Send'} isDisabled={isDisabled}/>
            </div>
            <div><p>{message}</p></div>
        </form>
    </Card>
  )
}
