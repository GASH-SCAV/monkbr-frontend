const api = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "tbd"

class PostService {
  static getPosts = () => fetch(api + "/posts").then(res => res.json())
}

export default PostService