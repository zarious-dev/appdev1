import './App.css'
import { useState } from 'react'

// sharing data between components
function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

export default function MyApp() {
  const [count, setCount] = useState(0)
  
  function handleClick() {
    setCount(count + 1)
  }   

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  )
}

// responding to events
// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!')
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   )
// }


// updating the screen / using hooks
// function MyButton1() {
//   const [count, setCount] = useState(0)

//   function handleClick() {
//     setCount(count + 1)
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   )
// }

// function App() {
//   return (
//     <>
//       <MyButton />
//       <h1>Counters that update separately</h1>
//       <MyButton1 />
//       <MyButton1 />
//     </>
//   )
// }