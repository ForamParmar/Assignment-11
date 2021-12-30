import React from 'react'
import SearchUser from './SearchUser'
const HomePage = () => {
    
    return (
        <div className="App">
            <h1>User's Home Page </h1><br /><br /> 
            <label>UserName : </label> <label></label><br /><br />
            <label>Password : </label><br /><br />
            <label>Name : </label><br /><br />
            <label>Age : </label><br /><br />
            <button >Update</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button >Delete</button><br /><br />
            <SearchUser />
        </div>
    )
}
export default HomePage