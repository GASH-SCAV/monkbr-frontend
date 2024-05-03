import { useState } from "react";
function Login({defineUser}){
  const [monkName, setMonkName] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    defineUser({monkName, password})
  }

  return (
  <>
    <form onSubmit={onSubmit}>
      <label>
        Name: <input type="text" onChange={(e) => {setMonkName(e.target.value)}} value={monkName} />
      </label>
      <label>
        Password: <input type="text" onChange={(e) => {setPassword(e.target.value)}} value={password} />
      </label>
      <input type="submit" value="Login"/>
    </form>
  </>)
}

export default Login;