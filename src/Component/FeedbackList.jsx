import React from 'react'
import FeedBackitem from './FeedBackitem'
import '../index.css'


///////////////////////
export default function FeedbackList({feedback,deleteItem}) {
    if(!feedback || feedback.length===0){
        return <p>No feedbacks yet</p>
    }
    return (
      
    <div className='feedback-list'>
        {feedback.map((item)=>(
                <FeedBackitem item={item} key={item.id} handleDelete={()=>deleteItem(item.id)}/>
                
        ))}
        </div>
  )
}
