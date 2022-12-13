import React from "react";
import Link from "next/link"

export default function PostPreview({post}){
    return(
        <Link href={`/posts/${post.id}`}>
        <div className="postPreview">
        <div className="postPreview-header">
            <h4>{post.attributes.date}</h4>
            <h4>{post.attributes.Topic}</h4>
        </div>
        <h3> {post.attributes.title}</h3>
        <p> {post.attributes.description} </p>
        
        </div>
        </Link>
    )
}