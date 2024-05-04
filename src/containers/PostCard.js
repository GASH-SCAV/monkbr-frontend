import { Link } from "react-router-dom";

function PostCard({post, hideMarginaliaButton}){
  return <div className="post-card">
    <div className="full-name"><span className="name">{post.username}</span> of <span className="city">{post.location}</span></div>
    <div className="post">{post.content}</div>
    <div className="date">Anno Domini 1310</div>
    { !hideMarginaliaButton && <Link className="child-button marginalia" to={`/posts/${post.id}`}>See / Add Marginalia ({post.replies && post.replies.length} notes)</Link> }
  </div>
}
export default PostCard;