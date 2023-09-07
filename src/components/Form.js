import React from 'react'

const Form = (props) => {
  return (
    <form>
      <input type="text" 
      onChange={props.handleLastNameChange} 
      value={props.firstName} 
      />
      <input type="text" 
      onChange={props.handleLastNameChange} 
      value={props.lastName} 
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form