import ButtonComponent from "./button"

export default async function Contact() {
    // console.log("hey is this in the server of client")

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    // console.log(posts)



    return <div>
        <ButtonComponent/>
        {/* <button onClick={() => alert("hello")}>Click me</button> */}
    </div>
}
