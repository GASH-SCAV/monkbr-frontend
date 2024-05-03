function PostCard(post){
  console.log("post", post)
  return <div className="post-card">
    <div className="full-name"><span className="name">{post.username}</span> of <span className="city">{post.location}</span></div>
    <div className="post">{post.content}</div>
    <div className="date">Anno Domini 1310</div>
  </div>
}
export default PostCard;