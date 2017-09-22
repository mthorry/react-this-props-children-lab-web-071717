import React from 'react'

const Invitation = (props) => {
  console.log("Invitation", props)
  return(
    <div>
      <h1>You've been invited!</h1>
      <p>{props.children}</p>
    </div>
  )
}

export default Invitation