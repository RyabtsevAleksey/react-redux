import '../scss/StateChange.scss'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFirstName, setLastName } from '../redux/userSlice.js'



const StateChange = () => {

  const fName = useSelector((state) => state.user.firstName);
  const lName = useSelector((state) => state.user.lastName);
  const dispatch = useDispatch();

  return (
    <div className='state-change-main'>
      <h2>1. Redux toolkit state change (userSlice)</h2>
      <input onChange={(event)=>dispatch(setFirstName(event.target.value))} className='state-change-input'  type="text" placeholder='First name' />
      <input onChange={(event)=>dispatch(setLastName(event.target.value))} className='state-change-input'  type="text" placeholder='Last name' />
      <div className="results">
        <div className="first-name">
        <p>First name:</p>
        <h3>{fName}</h3>
        </div>
        <div className="last-name">
        <p>Last name:</p>
        <h3>{lName}</h3>
        </div>
      </div>
    </div>
  )
}

export default StateChange
