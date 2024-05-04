import { useEffect, useState } from "react";
import Posts from "./Posts"
import PostForm from "../components/PostForm";
import PostService from "../services/PostService";
import Thread from "./Thread";

function Feed({monk, logout}){
  const [posts, setPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState("")
  const [incrementToRefresh, setIncrementToRefresh] = useState("")

  const fetchPosts = () => (PostService.getPosts().then(setPosts))
  
  const createPost = (content) => {
    PostService.createPost(monk.id, content, selectedPostId).then((posts) => {
      setPosts(posts)
      setIncrementToRefresh(incrementToRefresh + 1)
    })
  }

  useEffect(()=> {
    fetchPosts()
  }, [])

  const goToFeed = () => {
    fetchPosts().then(() => setSelectedPostId(""))
  }

  return <>
    <header onClick={() => logout()}>Logout</header>
    <div className="announcement">
      <marquee><h1>Episcopus Elonius nunc Marginalia ad Monkblr introducit!</h1></marquee>
      <p>Nunc poteritis respondere membris clericis haereticis in tempore reali.</p>
      <footer>Monkblr: App pro Omnia</footer>
    </div>
    <PostForm createPost={createPost} postId={selectedPostId}/>
    {selectedPostId ? <Thread selectedPostId={selectedPostId} goToFeed={goToFeed} incrementToRefresh={incrementToRefresh}/> : <Posts posts={posts} setSelectedPostId={setSelectedPostId} postId={selectedPostId}/>}
  </>
}

export default Feed;