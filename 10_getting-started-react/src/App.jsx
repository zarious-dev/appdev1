import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>About Me╰(*°▽°*)╯</h1>
      <h2></h2>
      <p>
        <strong>Name:</strong> Caezarie Enriquez <br/>
        <strong>Course/Year:</strong> BS Information Systems 3rd Year <br/>
        <strong>Fun Fact:</strong> I am a caesarian baby and my name came from the word <i>"caesarian"</i>.
      </p>

      <hr/>
      <h2>Why I Want to Learn React</h2>
      <p>       
        I want to learn React because it is what is mostly used by frontend developers nowadays. 
        By that, I want to know the reasons why many are using it. Moreover, I want the knowledge 
        and understanding of how the frontend works. And in the future, it will be beneficial for 
        my part because I can use my knowledge if I pursue this field.
      </p>
    </div>
  )
}

export default App
