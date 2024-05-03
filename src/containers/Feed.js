import { useEffect, useState } from "react";
import Posts from "./Posts"
import PostForm from "../components/PostForm";
import PostService from "../services/PostService";
function Feed({monk}){
  const [posts, setPosts] = useState([])
  const fetchPosts = () => (PostService.getPosts().then(setPosts))
  
  const createPost = (content) => {
    PostService.createPost(monk.id, content).then(setPosts)
  }

  useEffect(()=> {
    fetchPosts()
  }, [])

  return <>
    <PostForm createPost={createPost}/>
    <Posts posts={posts}/>
  </>
}

export default Feed;