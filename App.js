import React,{useState} from "react"
import "./styles.css";
const list={
  "🍎":"apple",
  "🍒":"cherry",
  "🍇":"grapes",
  "🍓":"strawberry",
  "🍉":"watermelon"
  
}
 var emojisweknow=(Object.keys(list))

export default function App() {
  const [meaning,setMeaning]=useState("");
   function ghj(event){
var meat=event.target.value;
var arth=list[meat];
if(arth===undefined){
  arth="we dont have that in data base"
}
setMeaning(arth)
 }
 function emojiClickHandler(emoji){
var arth=list[emoji];
setMeaning(arth)
 }
  return (
    <div className="App">
   <h1>Choose the fruit u like</h1>
   <input onChange={ghj}></input>
  <h2> {meaning}</h2>
  <h3>emojis we know</h3>{
    emojisweknow.map(function (emoji){
    return   <span 
    onClick={() =>emojiClickHandler(emoji)}
    key={emoji}
    style={{fontSize:35, padding:"0.5rem 1rem" ,cursor:"pointer"}}>{emoji}</span>
    })
  }
    </div>
  );
}
