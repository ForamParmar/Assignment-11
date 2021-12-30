const express = require("express");
const app = express();
app.use(express.json());
const port = 4000;
const mongoose = require("mongoose");

const userModel = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/dcs")
  .then(() => console.log("mongo db connected"));

app.get("/api/", (req, res) => res.send("Hello Fullstack!"));

// Get list of all users
app.get("/api/list", async (req, res) => {
  const userList = await userModel.find({}, { username: true });

  if (userList.length === 0) {
    return res.json({ data: "no users in fullstack" });
  }

  return res.json({ data: userList });
});

// Register user
app.post("/api/registration", (req, res) => {
  const newUser = req.body;
  userModel.create(newUser);
  return res.json({ data: "registered successfully" });
});

// Login user
app.post("/api/login", (req, res) => {
  const { username, password} = req.body;
  userModel.findOne({ username: username}, (err, user) => 
  {
    if(user)
    {
      if(password === user.password ) {
        return res.json({ data: "Login successfully"})
      } else {
        return res.json({ data: "Password did not match!!" });
      }
    } 
    else {
      return res.json({ data: "User does not exist!!" });
    } 
  });
});

//Delete
app.delete("api/delete", async(req, res) => {
  const userList = await userModel.find({}, { username: true });
})

//Search
app.post("/api/search", async(req, res) => {
  const user = req.body;
  const searchuser = await userModel.find(user);
  
    if(searchuser)
    {
      return res.json({data:searchuser});
    }
    else{
      
      return res.json({data:"User does not exist!!"})
    }
})

app.listen(port, () => console.log(`server running on port 4000`));