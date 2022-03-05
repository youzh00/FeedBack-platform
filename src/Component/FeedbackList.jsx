import React from 'react'
import FeedBackitem from './FeedBackitem'
import '../index.css'
import {motion, AnimatePresence} from 'framer-motion'

///////////////////////
export default function FeedbackList({feedback,deleteItem}) {
    if(!feedback || feedback.length===0){
        return <p>No feedbacks yet</p>
    }
    return (
      
    <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <FeedBackitem item={item} key={item.id} handleDelete={()=>deleteItem(item.id)}/>
            </motion.div>   
        ))}
        </AnimatePresence>
        </div>
  )
}
