import React, { useState } from 'react'

export default function Theform(props) {


    const [text, setText] = useState('');    //introducing hooks
    // console.log(useState('Enter text here 2'));
    //text=("new text");  wrong way to change the text
    //setText("new Text");  correct way to change the text


    const handleuppercase = () => {
        // console.log("uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        document.title="Converted to Uppercase";
    }

    const handlelowercase = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        document.title="Converted to Lowercase";
    }

    const allclear=()=>{
        let newtext="";
        setText(newtext);
        document.title="Text Cleared";
        
    }

    const randomtext=()=>{
        let newtext=("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore ducimus placeat quia nemo. Officiis ducimus perspiciatis sapiente iusto, eveniet est quam nisi voluptatibus dolorum laboriosam."); 
        setText(newtext);
    }

    function handlecopytext() {
        // Get the text field
        var Text = document.getElementById("tocopytext");
      
        // Select the text field
        Text.select();
         // Copy the text inside the text field
        navigator.clipboard.writeText(Text.values);
        document.title="Text copied to clipboard";
      }


    const handleonchange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }



    return (
        <>
            <div className={`container bg-${props.mode} my-5  text-${props.mode==='light'?'dark':'light'}`}>
                <div className="my-2 form-group">
                    <h1 className='text-4xl'>{props.heading}</h1>
                    {/* <label htmlFor="exampleFormControlTextarea1 text-xl">{props.heading}</label> */}
                    <textarea id='tocopytext' className={`form-control bg-${props.mode==='light'?'light':'secondary'}`} value={text} onChange={handleonchange}  rows="3"></textarea>
                </div>
                <button className='mx-2 btn btn-primary' onClick={handleuppercase}>Convert to uppercase</button>
                <button className='mx-2 btn btn-primary' onClick={handlelowercase}>Convert to lowercase</button>
                <button className='mx-2 btn btn-primary' onClick={allclear}>Clear all</button>
                <button className='mx-2 btn btn-primary' onClick={randomtext}>Random Text</button>
                <button className='mx-2 btn btn-primary' onClick={handlecopytext}>copy</button>
            </div>


            <div className={`container my-7 text-${props.mode==='light'?'dark':'light'}`}>
                <h2>Your text preview</h2>
                <p>words count  {text.split(" ").length}  character count {text.length}</p>
                <p >{text}</p>
            </div>
        </>
    )
}
