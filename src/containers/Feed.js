import { useEffect, useState } from "react";
import Posts from "./Posts"
import PostService from "../services/PostService";
function Feed({monk}){
  const [posts, setPosts] = useState([])
  console.log("posts", posts)
  useEffect(()=> {
    PostService.getPosts().then(setPosts)
  }, [])

  return <>
    <header>{monk.name}</header>
    <Posts posts={posts}/>
  </>
}

export default Feed;