import React, { useEffect } from 'react'
import { useState } from 'react'
import '../index.css'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
///////////////////////////
export default function RatingSelect({select}) {
    const [selected,setSelected]=useState();
    function handleChange(e){
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    }
    const {updateFB}=useContext(FeedbackContext)

    useEffect(()=>{
        setSelected(updateFB.item.rating)
        console.log('rating')
    },[updateFB])

  return (
    <div>
      <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={(e)=>handleChange(e)}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
    </div>
  )
}
