import React from "react";
import Link from "next/link";


export default function NavBar(){
    return(
        <nav className="navBar">
            <div className="container">
            <Link className="title" href="/blog">
            Blog
            </Link>

            <ul>
                <li>
                    <Link className="all" href="/posts">
                    All Posts
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    )
}

