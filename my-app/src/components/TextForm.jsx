import React,{useState} from 'react'

export default function TextForm(props) {
  const countWords = (text) => {
    const trimmedText = text.replace(/\s+/g, ' ');
    const words = trimmedText.split(' ').filter(word => word !== '');
    return words.length;
  };

  const handelupClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext=text.toUpperCase();
    settext(newtext)
    props.showAlert("Converted to Uppercase","success");
  }
  const handelToReverse=()=>{
      let newtexta= text.split('').reverse().join('');
      settext(newtexta)
      props.showAlert("Reverse your text","success");
    }
    
  const handellowerClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext=text.toLowerCase();
    settext(newtext)
    props.showAlert("Converted to Lowercase","success");
  }
  const handelToClear=()=>{
    // console.log("Uppercase was clicked" + text);
    let newtext=" ";
    settext(newtext)
  }
  const handelCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text successfully!","success");
  }
  const handelonChange =(event)=>{
    console.log("on change");
    settext(event.target.value)
  }

const [text, settext] = useState("")
  return (
    <>
    <div className="container"  style={{color:props.mode === 'dark'? 'white' : 'black'}}>
    <h1 className='my-2'>{props.heading}</h1>
    <div className="mb-3">
      <textarea name="form-control" style={{backgroundColor:props.mode === 'dark'? 'grey' : 'white' ,color:props.mode === 'dark'? 'white' : 'black' }} value={text} onChange={handelonChange} id="myBox" cols="120" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-3" onClick={handelupClick} >Convert to upperCase</button>
    <button className="btn btn-primary mx-3" onClick={handellowerClick} >Convert to lowerCase</button>
    <button className="btn btn-primary mx-3" onClick={handelToClear} >Clear text</button>
    <button className="btn btn-primary mx-3" onClick={handelToReverse} >Reverse text</button>
    <button className="btn btn-primary mx-3" onClick={handelCopy} >Copy text</button>

    </div>
    <div className="container my-3"  style={{color:props.mode === 'dark'? 'white' : 'black'}}>
      <h2>Your text summary</h2>
      <b><p>{countWords(text)} words and {text.replace(/\s/g, '').length} characters</p></b>
      <b><p>{0.008 * countWords(text)} minutes required to read</p></b>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter the text in above text section to preview here...'}</p>
    </div>
    </>
  );
}
