import Link from "next/link"

export default function home(){
    return <div><h1>This is my homepage</h1>
    <Link href={"http://localhost:3000/"} > Home </Link>
    <Link href={"http://localhost:3000/about"} > About</Link>
    <Link href={"http://localhost:3000/contact"} > Contact </Link>
    <Link href={"http://localhost:3000/service/webdevelopment"} > Web Development</Link>   
    <Link href={"http://localhost:3000/service/appdevelopment"} > App Development</Link>
    


    </div>

   
}
