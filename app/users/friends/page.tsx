"use client"

import { useState } from "react"

async function makePostRequest() {
    const res = await fetch(`/api/hello`, {  //${process.env.NEXT_URL}
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({ id: "2" })
    })

    const data = await res.json()
    return { data }
}

export default async function Friends() {
    const [message, setMessage] = useState()
    const onClick = async () => {
        const { data } = await makePostRequest()
        console.log(data)
        setMessage(data.message.address.city)
    }
    return <div> Heyyy {message}!! 
        {/* <h1>{message.name}</h1>
        <p><strong> Email:</strong>{message.email}</p>
        <p><strong> Phone:</strong>{message.phone}</p>
        <p><strong> Website:</strong><a href={`https://${message.website}`} target="_blank" rel="noopener referrer" >{message.website}</a></p>
        <p><strong> Company:</strong>{message.company.name}</p>
        <p><strong> Address:</strong>{message.address.street}, {message.address.city}</p> */}

        <button onClick={onClick}>Click Here</button></div>
    // return <h1> Heyyy!! Friends</h1>

}