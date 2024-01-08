import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setNumberAllowed] = useState(false)
  const [isSpecialAllowed, setSpecialAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumberAllowed) str += "0123456789"
    if(isSpecialAllowed) str+= "~!#$%^&*()_+{}[]|?><|\/"

    for (let p = 1; p <= length; p++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  },
  [length,isNumberAllowed,isSpecialAllowed,setPassword])


  const copyPasswordToClipboard = useCallback(() => {
      passwordRef?.current?.select()
      window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },
  [length,isNumberAllowed,isSpecialAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 ">
      <h1 className='my-3 text-4xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow-lg rounded-md mb-4 overflow-hidden'>
          <input 
          type='text' 
          ref={passwordRef}
          value={password} 
          className="outline-none w-full py-1 px-3" 
          placeholder='Passowrd' 
          readOnly />
          
          <button className='ml-5 text-center bg-blue-500 rounded-md px-3 text-white' onClick={copyPasswordToClipboard} >Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <input 
          type='range' 
          min={8} max={72} 
          value={length} 
          className='cursor-pointer'  
          onChange={(e)=>setLength(e.target.value)}/>

          <label >Length:{length}</label>
          <input type='checkbox' 
          defaultChecked={isNumberAllowed} 
          id='numberInput' 
          onChange={(e)=>setNumberAllowed((prev)=>!prev)}/>

          <label >Numbers</label>

          <input type='checkbox' 
          defaultChecked={isSpecialAllowed} 
          id='charaterInput' 
          onChange={(e)=>setSpecialAllowed((prev)=>!prev)}/>

          <label >Special chars</label>
      </div>
      </div>
    </>
  )
}

export default App
