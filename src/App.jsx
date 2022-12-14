import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import phrases from './phrases.json'
import QuoteBox from './components/QuoteBox'
import Click from './components/Click'

function App() {
  const [count, setCount] = useState(0)

  const colors = [
    "#faebd7",
    "#7fffd4",
    "#f5f5dc",
    "#0000ff",
    "#8a2be2",
    "#a52a2a",
    "#deb887",
    "#5f9ea0",
    "#7fff00",
    "#d2691e",
    "#ff7f50",
    "#6495ed",
    "#dc143c",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#b8860b",
    "#a9a9a9",
    "#006400",
    "#a9a9a9",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#8fbc8f",
    "#483d8b",
    "#2f4f4f",
    "#2f4f4f",
    "#00ced1",
    "#9400d3",
    "#ff1493",
    "#00bfff",
    "#696969",
    "#696969",
    "#1e90ff",
    "#b22222",
    "#228b22",
    "#ff00ff",
    "#dcdcdc"
]

  let numMax = phrases.length
  const [index, setIndex] = useState(Math.floor(Math.random() * numMax))

  const changePhrases = () => {
    setIndex(Math.floor(Math.random() * numMax))
  }

  const backgroud = colors[Math.floor(Math.random() * colors.length)]

  document.body.style = `background: ${backgroud}`;

  return (
    <div className="App">
      <QuoteBox info={phrases} index={index} colors={backgroud} />
      <Click functionChange={changePhrases} colors={backgroud}/>
    </div>
  )
}

export default App
