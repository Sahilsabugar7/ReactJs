import React,{useState} from 'react'


export default function TextForm(props) {

const handleUpClick= ()=>{

let newText= text.toUpperCase();
setText(newText)
props.showAlert("convert to Upercase","warning")
}

const handleLowerClick= ()=>{

let newText= text.toLowerCase();
setText(newText)
props.showAlert("convert to Lowercase","warning")
}



const RemoveExtraSpace = ()=>
{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
}


const handleonChange= (event)=>{

setText(event.target.value)
}

const [text,setText]= useState("Enter Text Here")
// text="new text";//this is wrong way to change the value
// setText("New Value"); //change the value
return (
<div>
<div className="mb-3">
<h1 style={{color: props.mode === 'dark' ? 'white' : '#48586e'}}>{props.heading} </h1>

<textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#48586e':'white', color: props.mode === 'dark' ? 'white' : '#48586e'}} id="mybox" rows="9" value={text} onChange={handleonChange} ></textarea>
</div>
<button style={{backgroundColor:props.mode==='dark'?'white':'#48586e', color: props.mode === 'dark' ? '#48586e' : 'white'}}  className="btn btn-primary" onClick={handleUpClick}  >Convert TO Uper Case</button>
<button className="btn btn-primary mx-5" onClick={handleLowerClick}>Conver to lower case</button>
<button className="btn btn-primary mx-2 my-2" onClick={RemoveExtraSpace}>RemoveExtraSpace</button>

<div className="container my-5">
<h1 style={{color: props.mode === 'dark' ? 'white' : '#48586e'}}> Your text Summery is</h1>
<h5 style={{color: props.mode === 'dark' ? 'white' : '#48586e'}}>The total number of words in your paragraph is{text.split(" ").length} and total character is{text.length} </h5>
<h5 style={{color: props.mode === 'dark' ? 'white' : '#48586e'}}>the mininute taken to read this words {0.008 *text.split(" ").length}</h5>
<div className="container my-5"> 
<h3 style={{color: props.mode === 'dark' ? 'white' : '#48586e'}}>Preview</h3>
<p style={{color: props.mode === 'dark' ? 'white' : '#48586e'}}> {text}</p>
</div>
</div>

</div>


)
}
