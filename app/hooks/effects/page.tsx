"use client"
import { useEffect, useState } from "react"

const Effects = () => {

    const [user, setUser] = useState("")
    const [id, setId] = useState("")
    useEffect(() => {
        const fetchNewData = async (id: string) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            const newUser = await response.json()

            setUser(newUser.name)
        }
    }, [id])
    
    return (
        <div>
            <p> User details </p>
            <input value={user}
                placeholder="User Id"
                onChange={e => setId(e.target.value)}
            />
            <p> Name is {user}</p>
            
        </div>
    )
}

export default Effects