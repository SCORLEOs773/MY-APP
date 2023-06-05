import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        setRemark("Text Converted To Upper Case!")
    }

    const toLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        setRemark("Text Converted To LowerCase!")
    }

    const toTitleCase = () => {
        let newText = text.toLowerCase().split(" ");
        for (var i = 0; i < newText.length; i++) {
            newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
        }
        newText = newText.join(" ");
        setText(newText);
        setRemark("Text Converted To Title Case!")
    }

    const toAlternateCase = () => {
        var newText = text.toLowerCase().split("");
        for (var i = 0; i < newText.length; i += 2) {
            newText[i] = newText[i].toUpperCase();
        }
        newText = newText.join("");
        setText(newText);
        setRemark("Text Converted To AlternateCase!")
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        setRemark("Text is being Read!")
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        setRemark("Text Cleared!")
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        setRemark("Extra Spaces have been Removed!")
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        setRemark("Text Copied to Clipboard!")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    // for (var count = 0; count <= text.length; count++) {
    //     if (text.charAt(count).match(/[aeiouAEIOU]/)) {
    //         vowelCount++;
    //         setCountV(vowelCount);
    //     }
    // }

    // for (var count = 0; count <= text.length; count++) {
    //     if (text.charAt(countC).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
    //         consonantCount++;
    //         setCountC(consonantCount);
    //     }
    // }

    const [text, setText] = useState("Default Text");
    const [remark, setRemark] = useState("Click a Button to Start Analyzing the Text");
    // let [countV, setCountV] = useState(0);
    // let [countC, setCountC] = useState(0);
    // let vowelCount = 0,
    //     consonantCount = 0;

    return (
        <div>
            <div className="my-3">

                <h1>{props.heading}</h1>

                <textarea className={`form-control bg-${props.mode}-subtle`} id="myBox" style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }} value={text} rows="8" onChange={handleOnChange}></textarea>

                <p className="my-3">{remark}</p>

                <button className="btn btn-primary my-3 mx-3" onClick={toUpperCase}>Text to UPPERCSASE</button>

                <button className="btn btn-warning my-3 mx-3" onClick={toLowerCase}>Text to lowercase</button>

                <button className="btn btn-light my-3 mx-3" onClick={toTitleCase}>Text to Title Case</button>

                <button className="btn btn-dark my-3 mx-3" onClick={toAlternateCase}>Text to AlTeRnAtEcAsE</button>

                <button className="btn btn-success my-3 mx-3" onClick={handleCopy}>Copy Text</button>

                <button className="btn btn-secondary my-3 mx-3" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

                <button className="btn btn-danger mx-3 my-3" type="submit" onClick={speak}>Speak Text</button>

                <button className="btn btn-info my-3 mx-3" onClick={clearText}>Clear Input</button>

            </div>

            <div className="container my-3 d-flex text-center" style={{ marginLeft: 160 }}>

                <div className="summary mx-5">
                    <h2>TEXT SUMMARY</h2>
                    <p>Input : {text.split(" ").length} Words and {text.length} Characters</p>
                    <p>Average Time Required to read this - {0.0033 * text.split(" ").length} Minutes</p>
                    {/* <p>Count of Vowels - {countV}</p>
                <p>Count of Consonants - {countC}</p> */}
                </div>

                <div className="preview mx-5">
                    <h3>PREVIEW TEXT HERE</h3>
                    <p>{text === 'Default Text' ? "Enter Text in Text Box Above to Preview it Here!" : text}</p>
                </div>
            </div>

        </div >
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Write Text here"
}