import "./Formstyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
           <label>Your Name</label> 
           <input type="text"></input>
           <label>Email</label> 
           <input type="Email"></input>
           <label>Subject</label> 
           <input type="text"></input>
           <label>Message</label> 
           <input type="text"></input>
           <textarea rows="6" placeholder="Type Your massage here"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form