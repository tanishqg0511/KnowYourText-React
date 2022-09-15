import React, {useState} from 'react'

export default function TextForm(props) {
    const handleonchange=(event)=>{
        setText(event.target.value)
    }
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handlelowerclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to LowerCase!","success");

    }
    const handleclearclick=()=>{
        let newtext="";
        setText(newtext)
        props.showAlert("TextArea Cleared!","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied!","success");
    }
    const handleSpaces=()=>{
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!","success");
    }
    // const handleWords=(text)=>{
    //     if(text=="")
    //     return 0;
    //     else
    //     return text.split(" ").length;
    // }
    const[text, setText]= useState("")
    return (
        <>
            <div className="container my-3" style={{color : props.mode==="dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{background : props.mode==="dark"?"#382e6e":"white" , color:props.mode==="dark"?"white":"black"}} onChange={handleonchange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleupclick}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={handlelowerclick}>Convert to LowerCase</button>
                <button className="btn btn-primary" onClick={handleSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary" onClick={handleclearclick}>Clear Text</button>
            </div>
            <div className="container my-2" style={{color : props.mode==="dark"?"white":"black"}}>
                <h2>Your Text Summary</h2>
                <p> Number of Words {text.length===0? 0 :text.split(" ").length}</p>
                <p>Number of Characters {text.length}</p>
                <p>Number of Lines {text.length===0?0:text.split("\n").length}</p>
                <p>Estimated Reading Time {0.008 * text.split(" ").length} </p>
                <p></p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter your text in above textbox to preview it."}</p>
            </div>
        </>
    )
}
