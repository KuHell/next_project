import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>h1 {count}</p>
      <button onClick={()=>setCount((prev) => prev + 2)}> + </button>
    </div>
  )
}