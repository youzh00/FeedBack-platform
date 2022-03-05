import React from 'react'
import '../index.css'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
//////////////////////////////

export default function FeedBackStat() {
  const {feedback}=useContext(FeedbackContext)  

    const length=feedback.length
    let Average=feedback.reduce((a, b) => a + b.rating, 0)/length;
    Average=Average.toFixed(1)
  return (
    <div className='feedback-stat'>
        <h4>Reviews: {length}</h4>
        <h4>Average rating: {isNaN(Average) ? 0 :Average}</h4>
    </div>
  )
}
