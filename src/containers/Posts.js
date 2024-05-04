import PostCard from "./PostCard"
import { useEffect, useState } from "react"
import PostService from "../services/PostService"

function Posts({incrementToRefresh}){
  const [posts, setPosts] = useState([])
  const fetchPosts = () => (PostService.getPosts().then(setPosts))

  useEffect(()=> {
    fetchPosts()
  }, [incrementToRefresh])

  return <main className="posts">
    {posts.map(post => <PostCard post={post} key={post.id} /> )}
  </main>
}
export default Posts