import { notFound } from "next/navigation";

export async function fetchUser(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()

    return user
}

export default async function UserPage({
    params,
}: {
    params: Promise<{ userId: string }>
}) {
    const { userId } = await params;
    const user = await fetchUser(userId)
    // console.log(user.l)
    if (Object.keys(user).length === 0) {
        console.log("This line was executed")
        notFound()
    }
    return (
        <div>
            <h1>{user.name}</h1>
            <p><strong> Email:</strong>{user.email}</p>
            <p><strong> Phone:</strong>{user.phone}</p>
            <p><strong> Website:</strong><a href={`https://${user.website}`} target="_blank" rel="noopener referrer" >{user.website}</a></p>
            <p><strong> Company:</strong>{user.company.name}</p>
            <p><strong> Address:</strong>{user.address.street}, {user.address.city}</p>
        </div>
    )
}