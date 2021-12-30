import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const LoginLink = () => {

    let homepage = useNavigate();
    const logUsers = () => {
        axios.post("/api/login", user)
        .then((res) => {
         console.log(res.data)
         homepage("/home",{ replace:true});
        })
    };

    const user = {
        username: "",
        password: "",
      };

    return (
        <div className="App">
            <h1>Login</h1>
      <label>UserName : </label><input
        placeholder="username"
        onChange={(e) => (user.username = e.target.value)}
      /><br /><br />
      <label>Password : </label><input type="password"
        placeholder="password"
        onChange={(e) => (user.password = e.target.value)}
      /><br /><br />
      <button onClick={logUsers}>Login</button><br /><br />
      <h3>In case you don't have account <a href="/">Registration</a></h3>
        </div>
    )
}
export default LoginLink