import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";



export default function HomeLatestPosts({posts}){
    const [latestPosts, setLatestPosts] = useState([]);



    useEffect(() => {
        const p = posts.slice(0,5)
        setLatestPosts(p)
    }, [posts]);

    function renderPostPreviews(){
        return latestPosts.map((e) =>{
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