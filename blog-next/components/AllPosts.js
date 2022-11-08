import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";



export default function AllPosts({posts}){
    const [Posts, setPosts] = useState([]);



    useEffect(() => {
        setPosts(posts)
    }, [posts]);

    function renderPostPreviews(){
        return Posts.map((e) =>{
            return<PostPreview post={e} key= {e.id}/>
        })
    }


    return(
        <>

        <h2> Latest Posts</h2>
        {renderPostPreviews()}
        </>

    )
}