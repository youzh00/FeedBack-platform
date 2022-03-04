import React from 'react'
import Card from './shared/Card'
import '../index.css'
import Button from './Button'



////////////////////////////
export default function FeedBackForm() {
  return (
    <Card>
        <form >
            <h2>How Would you rate your service with us</h2>
            <div className='input-group'>
                <input type="text" placeholder='write a review' />
                <Button type={'text'} children={'Send'}/>
            </div>
        </form>
    </Card>
  )
}
