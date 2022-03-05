import React from 'react'
import Card from '../Component/shared/Card'
import '../index.css'
import {Link} from 'react-router-dom'



export default function AboutPage() {
  return <Card>
        <div className='About'>
            <h1>About This Project</h1>
            <p>This a React app to leave feedbacks for a product or service</p>
            <p>version 1.0.0</p>
            <p><Link to="/">Back to HomePage</Link></p>

        </div>
        </Card>
  
}
