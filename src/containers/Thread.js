import PostCard from "./PostCard"
import PostService from "../services/PostService"
import { useEffect, useState } from "react"

function Thread({selectedPostId, goToFeed, incrementToRefresh}){
  const [post, setPost] = useState({replies: []})

  const fetchPosts = () => (PostService.getPost(selectedPostId).then(setPost))

  useEffect(()=> {
    fetchPosts()
  }, [incrementToRefresh])

  return <main className="posts">
    <div className="reply-to">Reply to...</div>
    <PostCard post={post} key={post.id} hideMarginaliaButton={true} />
    <div className="button-parent"><button className="child-button" onClick={goToFeed}>⬴Go back</button></div>
    {post.replies.map(post => <PostCard post={post} key={post.id} hideMarginaliaButton={true} />)}
  </main>
}

export default Thread