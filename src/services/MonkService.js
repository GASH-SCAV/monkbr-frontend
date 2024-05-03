const api = process.env.REACT_APP_ENVIRONMENT === "development" ? "http://localhost:3000" : "https://monkblr-backend-12e8009f9c9c.herokuapp.com"

class MonkService {
  setMonk = (monk) => {
    return fetch(api + "/monks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(monk),
    })
    .then(res => res.json())
  }

  login  = (monk) => {
    return fetch(api + "/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(monk),
    })
    .then(res => res.json())
  }

  getUser = (id) => {
    return fetch(api + `/monks/${id}`).then(res => res.json())
  }
}

export default MonkService;