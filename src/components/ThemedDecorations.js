import React from 'react'

const ThemedDecorations = (props) => {
  console.log("ThemedDecorations", props)
  return(
    <ul>
      {props.children.map((child, index) => <li key={index} className={props.theme}>{child}</li>)}
    </ul>
  )
}

export default ThemedDecorations