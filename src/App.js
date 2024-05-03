import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import UserContainer from "./containers/UserContainer"
import MonkService from './services/MonkService';
import Feed from './containers/Feed';
const defaultMonk = {name: "", posts: []}

function App() {
  const [monk, setMonk] = useState(defaultMonk)
  
  const defineUser = (user) => {
    localStorage.setItem("id", user.id)
    setMonk(user)
  }

  useEffect(() => {
    const userId = localStorage.getItem("id")
    const monkService = new MonkService()
    userId && monkService.getUser(userId).then(user => setMonk(user))
  }, [])

  const logout = () => {
    localStorage.removeItem("id")
    setMonk(defaultMonk)
  }

  return (
    <div className="app">
      <main>
        {monk.name ? <Feed monk={monk} logout={logout}/> : <UserContainer defineUser={defineUser}/>}
      </main>
    </div>
  )
}

export default App;
