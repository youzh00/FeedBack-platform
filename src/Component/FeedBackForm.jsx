import React, { useEffect } from 'react'
import Card from './shared/Card'
import '../index.css'
import Button from './shared/Button'
import { useState } from 'react'
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

////////////////////////////
export default function FeedBackForm() {
  const {addNewFeedBack, updateFB}=useContext(FeedbackContext)


  const [text,setText]=useState('')
  const [isDisabled,setIsDisabled]=useState(true)
  const [message,setMessage]=useState('')
  const [rating,setRating]=useState(0)

  useEffect(()=>{
    if(updateFB.edit){
      setText(updateFB.item.text)
      setRating(updateFB.item.rating)
      setIsDisabled(false)
      console.log('scsd')
    }
    },[updateFB])


  function handleChange(e){
    if(e.target.value===''){
      setIsDisabled(true)
      setMessage(null)
    }else if(e.target.value.trim().length<10 && e.target.value!==''){
      setMessage('Text must be at least 10 characters')
      setIsDisabled(true)

    }else{
      setMessage(null)
      setIsDisabled(false)

    }
    setText(e.target.value)
  }
 
  function submitForm(e){
    e.preventDefault()
    if(text.trim().length>10){
      const newFeedBack={
        text,
        rating
      }
      addNewFeedBack(newFeedBack)
      e.target.input.value=''
    }
  }
 
  return (
    <Card>
        <form onSubmit={submitForm}>
            <div><h2>How Would you rate your service with us</h2></div>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className='input-group'>
                <input type="text" placeholder='write a review' name='input' onChange={(e)=>handleChange(e)}/>
                <Button type={'text'} children={'Send'} isDisabled={isDisabled}/>
            </div>
            <div><p>{message}</p></div>
        </form>
    </Card>
  )
}
