import {useState} from 'react'
import Login from "../components/Login.js"
import Signup from "../components/Signup.js"
function UserContainer({defineUser}){
  const [login, setLogin] = useState(true)
  const toggleLogin = () => setLogin(!login)
  const form = login ? <Login defineUser={defineUser}/> : <Signup defineUser={defineUser}/>
  
  return <div className="user-container">
    {form}
    <button onClick={toggleLogin}>Or {login ? "Signup!" : "Login"}</button>
  </div>
}
export default UserContainer;