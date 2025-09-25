"use client"

import { useState } from "react"

const State = () => {
    const [counter, incrementCounter] = useState(0)

    return (
        <div>

            <button onClick={() => incrementCounter(counter + 1)}>increment</button>
            <h3>Counter {counter}</h3>

        </div>
    )
}

export default State