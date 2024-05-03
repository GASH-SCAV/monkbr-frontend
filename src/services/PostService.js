const api = !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "tbd"

class PostService {
  static getPosts = () => fetch(api + "/posts").then(res => res.json())

  static createPost = (monkId, content) => fetch(api + "/posts", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({monk_id: monkId, content}),
  }).then(res => res.json())
}

export default PostService