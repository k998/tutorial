import { NextResponse } from "next/server";

export async function GET() {
    // const data = await fetchUser("4")
    // return NextResponse.json({ ...data })
    { message: "Hello from GET API" }
}

export async function fetchUser(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()

    return user
}

export async function POST(req: Request) {
    const data = await req.json()
    const user = await fetchUser(data.id)
    console.log("POST request was called")
    return NextResponse.json({
        message: {
            name: user.name,
            id: user.id,
            address: user.address
    }})
}