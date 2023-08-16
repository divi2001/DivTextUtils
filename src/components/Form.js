import React, { useState } from 'react'

function Form(props) {
    const [text, settext] = useState("Enter your text here");    

    const handleOnClick = () =>{
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showAlert("Text converted to UPPERCASE", "success")
    }

    const LowerCase = () =>{
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showAlert("Text converted to lowercase", "success")

    }

    const handleOnChange = (event) => {
        settext(event.target.value);
    }

    const ClearText = () =>{
        let newtext = '';
        settext(newtext);
        props.showAlert("Text cleared", "primary")
    }

    const speakText = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

  return (
    <div className='container' style={{color: props.mode === "dark"?"white":"black"}}>
        <div className="mb-3">
            <h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            </h1>
        </div>
        <textarea className="form-control" style={{backgroundColor: props.mode === "dark"?"#030e41":"white", color: props.mode === "dark"?"white":"black"}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        <div className='my-4'>
            <button type="button" onClick={handleOnClick} className="btn btn-primary mx-2">UPPERCASE</button>
            <button type="button" onClick={LowerCase} className="btn btn-secondary mx-2">lowercase</button>
            <button type="button" onClick={ClearText} className="btn btn-secondary mx-2">Clear text</button>
            <button type="button" onClick={speakText} className="btn btn-secondary mx-2">Voice</button>


        </div>
        <div className='mb-4'>
            <h1 className=''>Your text summary</h1>
            <span className="d-block mb-2">Total Words = {text.split(" ").length}</span>
            <span className="d-block mb-2">Total Characters = {text.length}</span>
            <span className="d-block mb-2">Total seconds to read the paragraph = {0.008*text.split(" ").length}</span>
            <h1 className='mb-2'>Preview</h1>
            <p>{text}</p>
        </div>
    </div>
  ) 
}

export default Form