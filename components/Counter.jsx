"use client"
import { useState } from "react"

export default function Counter() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter(prev => prev + 1)}>You have clicked this {counter} times.</button>
    </div>
  )
}
