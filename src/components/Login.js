import { useState } from "react";
import MonkService from '../services/MonkService';

const monkService = new MonkService()

function Login({defineUser}){
  const [monkName, setMonkName] = useState("")
  const [password, setPassword] = useState("")
  const [alert, setAlert] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setAlert("")
    monkService.login({monkName, password}).then((res) => {
      if (res.error){
        setAlert(res.error)
      } else {
        defineUser(res)
      }
    })
  }

  return (
  <>
    {alert && <div class="alert">{alert}</div>}
    <form onSubmit={onSubmit}>
      <label>
        Name: <input type="text" onChange={(e) => {setMonkName(e.target.value)}} value={monkName} />
      </label>
      <label>
        Favorite Saint (case sensitive): <input type="text" onChange={(e) => {setPassword(e.target.value)}} value={password} />
      </label>
      <input type="submit" value="Login"/>
    </form>
  </>)
}

export default Login;