const api = process.env.REACT_APP_ENVIRONMENT === "development" ? "http://localhost:3000" : "https://monkblr-backend-12e8009f9c9c.herokuapp.com"

export default class LikeService {
  static sanctify = (monkId, postId) => {
    return fetch(api + "/sanctifies", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({monk_id: monkId, post_id: postId}),
    }).then(res => res.json())
  }

  static condemn = (monkId, postId) => {
    return fetch(api + "/condemns", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({monk_id: monkId, post_id: postId}),
    }).then(res => res.json())
  }
}


