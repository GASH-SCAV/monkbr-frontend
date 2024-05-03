const api = process.env.REACT_APP_ENVIRONMENT === "development" ? "http://localhost:3000" : "https://monkblr-backend-12e8009f9c9c.herokuapp.com"

class PostService {
  static getPosts = () => fetch(api + "/posts").then(res => res.json())
  
  static getPost = (id) => fetch(api + `/posts/${id}`).then(res => res.json())

  static createPost = (monkId, content, postId) => {
    const obj = {monk_id: monkId, content}
    if (postId){ obj.post_id = postId }
    return fetch(api + "/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    }).then(res => res.json())
  }
}

export default PostService