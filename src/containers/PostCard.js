function PostCard({post, setSelectedPostId, hideMarginaliaButton}){
  return <div className="post-card">
    <div className="full-name"><span className="name">{post.username}</span> of <span className="city">{post.location}</span></div>
    <div className="post">{post.content}</div>
    <div className="date">Anno Domini 1310</div>
    { !hideMarginaliaButton && <button onClick={()=> setSelectedPostId(post.id)}>See / Add Marginalia ({post.replies && post.replies.length} notes)</button> }
  </div>
}
export default PostCard;