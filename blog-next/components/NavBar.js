import React from "react";
import Link from "next/link";


export default function NavBar(){
    return(
        <nav className="navBar">
                    <div className="container">
                    <Link className="title" href="/blog">
                    Latest Posts
                    </Link>

                    <Link className="all" href="/posts">
                    All Posts
                    </Link>
            </div>
        </nav>
    )
}

