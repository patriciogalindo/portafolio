import Link from "next/link"

function Home({posts}) {
  return (


    <div className="links">
    <Link href={"/blog"}>
    Blog
    </Link>

    <Link href={"/portfolio"}>
    Portfolio
    </Link>
    
    </div>
  )
}

export default Home