import React from 'react'
import FeedBackitem from './FeedBackitem'


///////////////////////
export default function FeedbackList({feedback}) {
    if(!feedback || feedback.length===0){
        return <p>No feedbacks yet</p>
    }
    return (
      
    <div className='feedback-list'>
        {feedback.map((item)=>(
                <FeedBackitem item={item} key={item.id}/>
                
        ))}
        </div>
  )
}