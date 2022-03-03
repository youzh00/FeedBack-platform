import React from 'react'
import '../index.css'
import Card from './shared/Card'
import {FaTimes} from 'react-icons/fa'
///////////////////////////
export default function FeedBackitem({item}) {
    
  return (
   <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close'>
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text} </div>
    </Card>
  )
}
