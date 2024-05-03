import PostCard from "./PostCard"

function Posts({posts}){
  console.log(posts)
  return <main className="posts">
    {posts.map(post => <PostCard {...post} /> )}
  </main>
}
export default Posts