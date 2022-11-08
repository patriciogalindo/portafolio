import axios from "axios"
import HomeHeader from '../components/HomeHeader'
import HomeLatestPosts from '../components/HomeLatestPosts'
import React from "react"
import NavBar from "../components/NavBar"


function Blog({posts}) {
  return (
    <> 
    <NavBar/>
    <HomeHeader/>
    <HomeLatestPosts posts={posts}/>
    
     </>
  )
}

export default Blog

export async function getStaticProps(){
  const response = await axios.get("http://127.0.0.1:1337/api/posts");
  

  return {
    props:{
      posts: response.data.data
    }
  }
}