import React from "react";
import democratizeLogo from '../images/Democratize/democratizeLogo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio(){
    return (
        <div className="mainportfolio-container">
        <div className="mainportfolio-header">
            <h1>Portfolio</h1>
        </div>
        
        <div className="portfolio-logo-div">
        <Link href='/democratize'>
            <Image className="portfolio-logo" src={democratizeLogo}/>
        </Link>
        </div>
        
        </div>
    )
}

