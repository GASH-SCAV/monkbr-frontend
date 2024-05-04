import PostCard from "./PostCard"
import { useEffect, useState } from "react"
import PostService from "../services/PostService"

function Posts({incrementToRefresh}){
  const [posts, setPosts] = useState([])
  const fetchPosts = () => (PostService.getPosts().then(setPosts))

  useEffect(()=> {
    fetchPosts()
  }, [incrementToRefresh])

  const changeLikes = (postId, likesCount) => {
    const newPosts = [...posts]
    const index = newPosts.findIndex(obj => obj.id == postId);
    newPosts[index].sanctifies = likesCount.likes
    setPosts(newPosts)
  }

  const changeCondemns = (postId, condemnsCount) => {
    const newPosts = [...posts]
    const index = newPosts.findIndex(obj => obj.id == postId);
    newPosts[index].condemns = condemnsCount.condemns
    setPosts(newPosts)
  }

  return <main className="posts">
    {posts.map(post => <PostCard post={post} changeLikes={changeLikes} changeCondemns={changeCondemns} key={post.id} /> )}
  </main>
}
export default Posts