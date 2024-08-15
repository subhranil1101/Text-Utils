import React, { useState } from 'react'

export default function TextForm(props) {
      const handleUpClick = () => {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to UPPERCASE", "success")
      }
      const handleLoClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase", "success")
      }

      const handleRmvSpace = () => {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed", "success")
      }


      const handleCopyClick = () => {
            let copyText = document.getElementById("myBox");
            copyText.select();
            navigator.clipboard.writeText(copyText.value);
            document.getSelection().removeAllRanges();
            props.showAlert("Text copied!", "success")
      }


      const handleClearClick = () => {
            let newText = "";
            setText(newText);
            props.showAlert("Cleared!!", "danger")
      }




      const handleOnChange = (event) => {
            setText(event.target.value)
      }


      const [text, setText] = useState("");

      return (
            <>
                  <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                        <h1>{props.heading}</h1>
                        <div className="mb-3">
                              <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#0b1b20' : 'white', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" rows="7"></textarea>
                              <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
                              <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                              <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleRmvSpace}>Remove Extra Space</button>
                              <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy Text</button>
                              <button disabled={text.length === 0} className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
                        </div>
                  </div>

                  <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                        <h1>Your text summary</h1>
                        <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words, {text.length} characters</p>
                        <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} Minutes to read.</p>
                        <h2>PREVIEW</h2>
                        <p>{text.length > 0 ? text : 'Enter some text to preview here.'}</p>
                  </div>
            </>
      )
}
