import React from 'react'
import axios from "axios";

const Rform = () => {

      const registerUsers = () => {
        axios.post("/api/registration", user).then((res) => console.log(res.data));
      };
      
      const user = {
        username: "",
        password: "",
        name: "",
        age: 0, 
      };

    return (
    <div className="App">
      <h1>Registration</h1>
      {/* <button onClick={fetchUsers}>Fetch Users</button><br /><br /> */}
      <label>UserName : </label><input
        placeholder="username"
        onChange={(e) => (user.username = e.target.value)}
      /><br /><br />
      <label>Password : </label><input type="password"
        placeholder="password"
        onChange={(e) => (user.password = e.target.value)}
      /><br /><br />
      <label>Name : </label><input
        placeholder="name"
        onChange={(e) => (user.name = e.target.value)}
      /><br /><br />
      <label>Age : </label><input
        placeholder="age"
        onChange={(e) => (user.age = Number(e.target.value))}
      /><br /><br />
      <button onClick={registerUsers}>Register User</button><br /><br />
      <h3>Already have account? <a href="/login">Login</a></h3>
    </div>
    );
}
export default Rform