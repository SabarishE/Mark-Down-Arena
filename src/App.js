
import './App.css';
import Markdown from 'react-markdown'
import {useState} from "react"

function App() {

  const [input,setinput]=useState("");
  const [music,setmusic]=useState(false);
  const sample="# heading 1 \n## heading 2 \n> blockquote \n--- \n`this is a piece of <code>` \n[theodinproject.com](https://www.theodinproject.com/) \n![image](https://res.cloudinary.com/cloudyimg/image/upload/v1637770031/kitty_snjql3.gif) \n***BOLD AND ITALIC***.  \n- list item1 \n- list item2"
  
  const audioplay=()=>{
    
    setmusic(!music);
    if(music)
    {
      document.getElementById("audio").play();
    }
    else{
document.getElementById("audio").pause();
    }
   

 }
  return (
    <div className="App">
<h1 className="header"> <img src={require("./markdown.png").default} alt="logo" />MARK-DOWN-ARENA</h1>

<div className="controls">
  <button onClick={()=>setinput("")}>clear</button>
  <button onClick={()=>setinput(sample)}>sample</button>
  <button onClick={()=>audioplay()}>music</button>
  <audio id="audio" src={require("./music.mp3").default} loop></audio>
    
</div>

<div className="container">
  <div className="input">
    <span>Edit here</span>
    <textarea value={input} onChange={e=>setinput(e.target.value)}></textarea>
  </div>
  <div className="output">
  <span>Output</span>
    <Markdown children={input} linkTarget="_blank"  className="markdown"/>
  </div>
</div>
    </div>
  );
}

export default App;
