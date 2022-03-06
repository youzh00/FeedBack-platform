import React from 'react'
import '../index.css'
import Card from './shared/Card'
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
///////////////////////////
export default function FeedBackitem({item}) {
  const {deleteItem,updateFeedback }=useContext(FeedbackContext)

  return (
   <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={()=>deleteItem(item.id)}>
            <FaTimes color='purple'/>
        </button>
        <button className='edit' onClick={()=>updateFeedback(item)}>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text} </div>
    </Card>
  )
}
