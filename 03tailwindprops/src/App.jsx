import { useState } from 'react'

import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]
  const num = 3

  let indents = []
  for (let index = 0; index < 3; index++) {
    indents.push(
      <Card username="hitesh" />
    );
    
  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />

      {indents}
        


    </>
  )
}

export default App