import Link from "next/link"
import Image from "next/image"
import githubLogo from "../images/github.png"
import linkedinLogo from "../images/linkedin.png"
import envelope from "../images/envelope.png"
import Head from 'next/head'

function Home({posts}) {
  return (

    <>
      <Head>
        <title> My personal Blog</title>
      </Head>

    {/* <div className="logo-div-homepage">
      <Image alt="github" src={githubLogo} className="logo"/>
      <Image alt="linkedin" src={linkedinLogo} className="logo"/>
      <Image alt="email" src={envelope} className="logo"/>
    </div> */}


    <div className="links">
    <div className="myName">
      <h1 className="info-name"> Patricio Galindo </h1>
       <h4 className="info-softwareDeveloper"> Software Developer </h4>
       <div className="logo-div-homepage">
      <Image alt="github" src={githubLogo} className="logo"/>
      <Image alt="linkedin" src={linkedinLogo} className="logo"/>
      <Image alt="email" src={envelope} className="logo"/>
    </div>
    </div>

    
      <div className="blog-link">
    <Link href={"/about"} className="linkOfBlog">
      About
    </Link>
    </div>


    <div className="portfolio-link">
    <Link href={"/portfolio"} className="linkOfPortfolio">
    Portfolio
    </Link>
    </div>


    <div className="about-link">
    <Link href={"/blog"} className="linkOfAbout">
    Blog
    </Link>
    </div>
    
    
    </div>
    </>
  )
}

export default Home