import React, { useEffect, useState } from 'react'
const leftAlignedStyle = {
  textAlign: 'left',
  marginLeft: '2px'
};
function ChildComponent() {
 
  const employee = [
    {
      id: 1,
      Name: "Ronnie",
      role: "Senior frontend developer"
    },
    {
      id: 2,
      Name: "Akshay",
      role: "Junior frontend developer"
    },
    {
      id: 3,
      Name: "Tony",
      role: "Backend developer"
    },
    {
      id:4,
      Name: "Tony",
      role: "Backen",
    }
  ]
  const intitialIndex = 0
  const [index, setIndex] = useState(intitialIndex)
  let Increament = () => {
    index ===employee.length-1 ?setIndex(intitialIndex):setIndex(index + 1)
  }

  let Decreament = () => {
    index === 0? setIndex(employee.length-1):setIndex(index - 1)
  }

  return (
    <div style={leftAlignedStyle}>
      <div className="mx-0">
        <h4> Employ ID: {employee[index].id}</h4>
        <h4> Name:{employee[index].Name} </h4>
        <h4> Role:{employee[index].role}</h4>
        <button onClick={Decreament} className="btn btn-secondary m-4">Previous</button>
        <button onClick={Increament} className="btn btn-secondary m-4">Next</button>
      </div>
      
    </div>
  )
}

export default ChildComponent