import React from 'react'
import axios from "axios";

const SearchUser = () => {

    const user = {
        username : ""
    }

    const userserch = () =>{
        axios.post("/api/search",user).then((res) => {
            if ((res.data.data).length === 1)
            {
                console.log(res.data.data);
            }
            else{
                console.log("data not found!!");
            }
        });
    }
    return (
        <div>
            <label>UserName : </label><input
        placeholder="Enter Username"
        onChange={(e) => (user.username = e.target.value)}/><br /><br />
        <button onClick={userserch}>Search</button><br /><br />
        </div>
    )
}
export default SearchUser