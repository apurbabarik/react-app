import React, {useState } from 'react';


export default function TextForm(props) {

  const [text, setText] = useState('');
  
   const handleUp=()=>{
        console.log("up clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","Success");
    }
   const handleLo=()=>{
        console.log("Lo clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","Success");
    }
    const clrText=()=>{
      let newText=' ';
      setText(newText);
    }
   
    
  const handleChange=(event)=>{
        setText(event.target.value)
        console.log("on change");
    }
  
  return (
    <>
    <div className='container'style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
   
<div className="mb-3">
  
  <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} value={text} onChange={handleChange} rows="10"></textarea>
</div>
<button className="btn btn-primary " onClick={handleUp}>Convert to Upper Case</button>
<button className="btn btn-primary mx-2" onClick={handleLo}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2" onClick={clrText}>Clear the Text</button>


</div>

<div className="container my-2"style={{color:props.mode==='light'?'black':'white'}} >
<h1>Your Text Summary here</h1>
<p>{text.split(" ").length} words, {text.length} characters</p>
<p>{0.08*text.split(" ").length} Minutes to Read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to preview"}</p>

</div>


</>
   
  )
}
