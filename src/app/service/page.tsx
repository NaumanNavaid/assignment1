import Link from "next/link"

function Service(){
    return(
      <div> 
        <h1 className="service"><Link href="/service/appdevelopment"> App Development </Link></h1>
        <h1 className="service2"><Link href="/service/webdevelopment"> Web Development</Link></h1>
  
      
      </div>
    )
  }
   export default Service