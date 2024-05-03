import PostCard from "./PostCard"

function Posts({posts, setSelectedPostId}){
  return <main className="posts">
    {posts.map(post => <PostCard post={post} setSelectedPostId={setSelectedPostId} key={post.id} /> )}
  </main>
}
export default Posts