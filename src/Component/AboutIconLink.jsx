import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import '../index.css'
import {Link} from 'react-router-dom'


export default function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to='/About'>
            <FaQuestion size={40}/>
        </Link>
    </div>
  )
}
