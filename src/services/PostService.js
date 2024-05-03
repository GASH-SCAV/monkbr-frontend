const api = "https://monkblr-backend-12e8009f9c9c.herokuapp.com"

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