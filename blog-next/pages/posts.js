import React from "react";
import AllPosts from "../components/AllPosts";
import axios from "axios"
import NavBar from "../components/NavBar";

export default function Posts({posts}){
    return (
      <>    
      <div className="blog-container">  
      <NavBar/>
        <AllPosts posts={posts}/>
        </div>
        </>

    )
}

export async function getStaticProps(){
    const response = await axios.get("http://127.0.0.1:1337/api/posts");
    
  
    return {
      props:{
        posts: response.data.data
      }
    }
  }