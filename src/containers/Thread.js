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

  const changeThreadLikes = (postId, likesCount) => {
    const newPost = {...post}
    newPost.sanctifies = likesCount.likes
    setPost(newPost)
  }

  const changeReplyLikes = (postId, likesCount) => {
    const newPost = {...post}
    const replies = [...post.replies]
    const index = replies.findIndex(obj => obj.id == postId);
    replies[index].sanctifies = likesCount.likes
    newPost.replies = replies
    setPost(newPost)
  }

  const changeThreadCondemns = (postId, condemnsCount) => {
    const newPost = {...post}
    newPost.condemns = condemnsCount.condemns
    setPost(newPost)
  }

  const changeReplyCondemns = (postId, condemns) => {
    const newPost = {...post}
    const replies = [...post.replies]
    const index = replies.findIndex(obj => obj.id == postId);
    replies[index].condemns = condemns.condemns
    newPost.replies = replies
    setPost(newPost)
  }


  return <main className="posts">
    <div className="reply-to">Reply to...</div>
    <PostCard post={post} key={post.id} hideMarginaliaButton={true} changeLikes={changeThreadLikes} changeCondemns={changeThreadCondemns} />
    <Link className="child-button" to={"/"}>⬴Go Back</Link>
    <button className="child-button" onClick={() => {
      navigator.clipboard.writeText(window.location.href)
      alert("Link Copied")
      }}>Copy Link</button>
    {post.replies.map(post => <PostCard post={post} key={post.id} hideMarginaliaButton={true} changeLikes={changeReplyLikes} changeCondemns={changeReplyCondemns} />)}
  </main>
}

export default Thread