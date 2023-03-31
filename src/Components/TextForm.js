import React from 'react';
import { useState } from 'react';
 /* usestate is a hook that means a state of component 
   hooks help to use the feature of class without actually creating them */


export default function (props) {
   const handleUpClick =( )=>{
    console.log("uppercase was clicked" + text);
    let newText= text.toUpperCase();
    /* setText("you have clicked Handle Up click") */
    setText(newText);
    props.showAlert("converted to uppercase","warning")
   }
   const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
    /* this line says thatthe value of text is -the previous value given by the above fxn + value typed by user  */
   }
   /* 1- the onchange fxn run evry time a change in text area is done basically when anything is written, 
   even ifu delte text its value is still going to go up.
     2-  if "setText(event.target.value);" and event is not passed in arrow fxn then nothing would get written inside text area*/

   const handleLowClick =( )=>{
    console.log("LowerCase was clicked" + text);
    let newText= text.toLowerCase();
    /* setText("you have clicked Handle Up click") */
    setText(newText);
    props.showAlert("converted to loercase","warning")
   }
   
   const handleClearClick =( )=>{
    console.log("clear was clicked" + text);
    let newText= " ";
    /* setText("you have clicked Handle Up click") */
    setText(newText)
   }
   

  const [text, setText] = useState('enter text here');
  /* 1.- in variable text the value inside "enter text" is stored
    2.-and whenever this value is updated it is done through "enter text" as updating like text="abcd"
    is not valid in react or wrong way to change the state, u need to use updation fxn it will be done like setText("abcdef")*/
  return (
    <>
     <div className="container" style={{backgroundColor: props.mode === 'dark'?'white':'black'}}>
           <h1>{props.heading}</h1>

            <div className="mb-3">
             < textarea className="form-control" id="mybox"  onChange= {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'black':'white',  color : props.mode === 'dark'?'white':'black'}} rows="8" value={text}></textarea>
              {/* whenever aevent is listen in react like onchange event is listen an event object is created  */}
            </div>
      <button className="btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button>
      <button className="btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>

     <div className="conatiner my-2" style={{backgroundColor: props.mode === 'dark'?'black':'white'}}>
       <h1>your text summary</h1>
       <p> {text.split(" ").length} words {text.length} character</p>
       <p>{0.008* text.split(" ").length} Minutes To Read</p>
       <h3>Preview</h3>
       <p>{text}</p>
     </div>
    

    </>
  )
}
