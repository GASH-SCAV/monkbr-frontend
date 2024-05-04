import { Link } from "react-router-dom";
import LikeService from "../services/LikeService"

function PostCard({post, hideMarginaliaButton, changeLikes, changeCondemns}){
  
  const bless = () => {
    LikeService.sanctify(localStorage.getItem("id"), post.id).then(likeCount => changeLikes(post.id, likeCount))
  }

  const condemn = () => {
    LikeService.condemn(localStorage.getItem("id"), post.id).then(likeCount => changeCondemns(post.id, likeCount))
  }

  return <div className="post-card">
    <div className="full-name"><span className="name">{post.username}</span> of <span className="city">{post.location}</span></div>
    <div className="post">{post.content}</div>
    <div className="date">Anno Domini 1310</div>
    { !hideMarginaliaButton && <Link className="child-button" to={`/posts/${post.id}`}>See / Add Marginalia ({post.replies && post.replies.length} notes)</Link> }
    <button className="child-button" onClick={bless}>Bless ({post.sanctifies || 0} Bless Ups)</button>
    <button className="child-button" onClick={condemn}>Condemn ({post.condemns || 0} Condemnations)</button>
  </div>
}
export default PostCard;