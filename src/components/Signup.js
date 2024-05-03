import { useState } from "react";
import MonkService from '../services/MonkService';

const monkService = new MonkService()

function Signup({defineUser}){
  const [monkName, setMonkName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [alert, setAlert] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    setAlert("")
    if (password !== confirmPassword){
      setAlert("Your answers for favorite saint must match!")
    } else {
      monkService.setMonk({monkName, password}).then((res) => {
        if (res.error){
          setAlert(res.error)
        } else {
          defineUser(res)
        }
      })
    }
  }

  return (
  <>
    {alert && <div class="alert">{alert}</div>}
    <form onSubmit={onSubmit}>
      <label>
        Name <input type="text" onChange={(e) => {setMonkName(e.target.value)}} value={monkName} />
      </label>
      <label>
        Favorite Saint (case sensitive) <input type="text" onChange={(e) => {setPassword(e.target.value)}} value={password} />
      </label>
      <label>
        Confirm Favorite Saint <input type="text" onChange={(e) => {setConfirmPassword(e.target.value)}} value={confirmPassword} />
      </label>
      <input type="submit" value="Signup"/>
    </form>
  </>)
}

export default Signup;