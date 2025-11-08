import React from 'react'


function students(Props) {
  return (
    <>
    <div>Students Components</div>
    <h3>{Props.name}</h3>
    <h3>{Props.age}</h3>
    <h3>{Props.isLoggedin ? "yes" : "No"}</h3>
    </>  
  )
}



export default students