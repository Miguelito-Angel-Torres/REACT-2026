import React from 'react'

const Message = ({msg,bgColor}) => {
  let styles = {
    padding:"1rem",
    marginBotton:"1rem",
    textAlign:"center",
    color: "#fff",
    backgroundColor:bgColor,
    fontWeight:"bold"
  }

  return (
    <div style={styles}>
        {/*<p>{msg}</p>*/}
        <p dangerouslySetInnerHTML={{__html:msg}}></p>
    </div>
  )
}

export default Message