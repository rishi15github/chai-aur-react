import { useState } from "react";


function App() {
  const [color,setColor] = useState("Red")

  return (
    <div className="App w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2" >
            <button onClick={()=> setColor("red")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "red"}}>
              Red
            </button>

            <button onClick={()=> setColor("green")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "green"}}>
              Green
            </button>

            <button onClick={()=> setColor("blue")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "blue"}}>
              Blue
            </button>

            <button onClick={()=> setColor("yellow")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "yellow"}}>
              Yellow
            </button>

            <button onClick={()=> setColor("Pink")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "Pink"}}>
              Pink
            </button>

            <button onClick={()=> setColor("Purple")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "Purple"}}>
              Purple
            </button>

            <button onClick={()=> setColor("Lavender")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "Lavender"}}>
              Lavender
            </button>

            <button onClick={()=> setColor("White")} className="outline-none rounded-full px-4 py-2 text-black shadow-lg" style={{backgroundColor: "White"}}>
              White
            </button>

            <button onClick={()=> setColor("Black")} className="outline-none rounded-full px-4 py-2 text-white shadow-lg" style={{backgroundColor: "Black"}}>
              Black
            </button>

          </div>
        </div>
    </div>
  );
}

export default App;
