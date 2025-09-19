import './App.css'
import { useState } from 'react'

//responding to events
function MyButton() {
  function handleClick() {
    alert('You clicked me!')
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}


//updating the screen / using hooks
function MyButton1() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}

function App() {
  return (
    <>
      <MyButton />
      <h1>Counters that update separately</h1>
      <MyButton1 />
      <MyButton1 />
    </>
  )
}

export default App


// rendering lists
// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ]

// function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   )
//   return (
//     <>
//       <ul>{listItems}</ul>
//     </>
//   )
// }