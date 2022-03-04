import React from 'react'
import Card from './shared/Card'


////////////////////////////
export default function FeedBackForm() {
  return (
    <Card>
        <form >
            <h2>How Would you rate your service with us</h2>
            <div>
                <input type="text" placeholder='write a review' />
                <button type='submit'>Send</button>
            </div>
        </form>
    </Card>
  )
}
