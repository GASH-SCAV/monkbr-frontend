import { useEffect, useState } from "react";
import Posts from "./Posts"
import PostForm from "../components/PostForm";
import PostService from "../services/PostService";
import Thread from "./Thread";
import { Route, Routes, useParams } from 'react-router-dom'

function Feed({monk, logout}){
  const [selectedPostId, setSelectedPostId] = useState("")
  const [incrementToRefresh, setIncrementToRefresh] = useState("")
  const { id } = useParams()
  
  const createPost = (content) => {
    PostService.createPost(monk.id, content, id).then((posts) => {
      setIncrementToRefresh(incrementToRefresh + 1)
    })
  }


  return <>
    <header onClick={() => logout()}>Logout</header>
    <div className="announcement">
      <marquee><h1>Episcopus Elo.then(() => setSelectedPostId(""))nius nunc Marginalia ad Monkblr introducit!</h1></marquee>
      <p>Nunc poteritis respondere membris clericis haereticis in tempore reali.</p>
      <footer>Monkblr: App pro Omnia</footer>
    </div>
    <PostForm createPost={createPost} postId={selectedPostId}/>
    {id ? <Thread selectedPostId={selectedPostId} incrementToRefresh={incrementToRefresh}/> : <Posts  incrementToRefresh={incrementToRefresh} />}
  </>
}

export default Feed;