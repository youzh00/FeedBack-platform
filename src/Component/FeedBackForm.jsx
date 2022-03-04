import React from 'react'
import Card from './shared/Card'
import '../index.css'
import Button from './shared/Button'
import { useState } from 'react'
import RatingSelect from './RatingSelect'

////////////////////////////
export default function FeedBackForm() {
  const [text,setText]=useState('')
  const [isDisabled,setIsDisabled]=useState(true)
  const [message,setMessage]=useState('')
  const [rating,setRating]=useState()
  function handleChange(e){

    if(text===''){
      setIsDisabled(true)
      setMessage(null)
    }else if(text.trim().length<10 && text!==''){
      setMessage('Text must be at least 10 characters')
      setIsDisabled(true)

    }else{
      setMessage(null)
      setIsDisabled(false)

    }
    setText(e.target.value)
  }

  console.log(rating)
  return (
    <Card>
        <form >
            <div><h2>How Would you rate your service with us</h2></div>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className='input-group'>
                <input type="text" placeholder='write a review' onChange={(e)=>handleChange(e)}/>
                <Button type={'text'} children={'Send'} isDisabled={isDisabled}/>
            </div>
            <div><p>{message}</p></div>
        </form>
    </Card>
  )
}
