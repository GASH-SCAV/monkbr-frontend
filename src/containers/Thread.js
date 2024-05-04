import PostCard from "./PostCard"
import PostService from "../services/PostService"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function Thread({goToFeed, incrementToRefresh}){

  const { id } = useParams()
  const [post, setPost] = useState({replies: []})

  const fetchPosts = () => (PostService.getPost(id).then(setPost))

  useEffect(()=> {
    fetchPosts()
  }, [incrementToRefresh])

  return <main className="posts">
    <div className="reply-to">Reply to...</div>
    <PostCard post={post} key={post.id} hideMarginaliaButton={true} />
    <Link className="child-button" to={"/"}>⬴Go Back</Link>
    <button className="child-button" onClick={() => {
      navigator.clipboard.writeText(window.location.href)
      alert("Link Copied")
      }}>Copy Link</button>
    {post.replies.map(post => <PostCard post={post} key={post.id} hideMarginaliaButton={true} />)}
  </main>
}

export default Thread