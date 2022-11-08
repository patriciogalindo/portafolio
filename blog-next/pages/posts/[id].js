import React from "react";
import axios from "axios";

export default function PostPage({post}){
    return (
        <article>
            <header>
        <h1>{post.attributes.title}</h1>
        <h2>{post.attributes.description}</h2>
        <p>{post.attributes.content}</p>
        </header>
        </article>
    )
}

export async function getStaticProps({params}){
    const postRes = await axios.get(`http://127.0.0.1:1337/api/posts/${params.id}`)

    return {
        props:{
            post: postRes.data.data
        }
    }


}

export async function getStaticPaths(){
    const postsRes = await axios.get("http://127.0.0.1:1337/api/posts")
    
    const paths = postsRes.data.data.map((post) => {
        return {params: {id: post.id.toString()}}
    })


    return {
        paths, 
        fallback: false
    }
}