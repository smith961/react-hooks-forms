import React from 'react'

const DisplayData = (props) => {
  return (
    <div>
        <h1>{props.firstname}</h1>
        <h1>{props.lastname}</h1>
    </div>
  );
}

export default DisplayData