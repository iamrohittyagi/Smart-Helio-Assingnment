import React from 'react'

function ContentBox(props) {
  return (
    <div className='content-box'>
        <p>{props.title}</p>
        <h1>{props.count}</h1>
    </div>
  )
}

export default ContentBox