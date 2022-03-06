import React from 'react'
import FeedBackitem from './FeedBackitem'
import '../index.css'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Spinner from './shared/Spinner'

///////////////////////
export default function FeedbackList() {

    const {feedback,isLoading}=useContext(FeedbackContext)  
    if(!isLoading && (!feedback || feedback.length===0) ){
        return <p>No feedbacks yet</p>
    }
    return  isLoading ? (<Spinner/>) :
    (
        <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
            <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
                <FeedBackitem item={item} key={item.id} />
            </motion.div>   
        ))}
        </AnimatePresence>
        </div>
    )
       
}
