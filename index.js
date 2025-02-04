require('dotenv').config()
const express = require("express");
const path = require("path");
const userModel=require('./models/user')
const userModel2=require('./models/message')
const dbConnection=require('./config/db');

const app = express();

app.set("views", path.join(__dirname, "public")); 

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/form",(req,res)=>{
  res.render("form")
})

app.post("/form", async (req, res) => {
  try {
    const { firstName, lastName, phone, email, branch,domain, skills } = req.body;
    
    await userModel.create({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      branch: branch,
      domain:domain,
      skills: skills
    });
    
    res.redirect('/')
  } catch (error) {
    res.send("app crashed with error: ",error)
  }
});

app.get('/form/admin_login',(req,res)=>{
  res.render('admin_login')
})

app.post('/form/admin_login', async (req, res) => {
  const { password } = req.body;

  // Debugging: Log the received and stored passwords
  // console.log("Received password:", password);
  // console.log("Stored password:", process.env.ADMIN);

  if (password.trim() !== process.env.ADMIN.trim()) {
    return res.status(401).json({ error: "Admin ban ja pehle" }); // Return JSON for invalid password
  }

  try {
    const data = await userModel.find({});
    res.json(data); // Return data as JSON
  } catch (e) {
    res.status(500).json({ error: "Server error" }); // Return JSON for server errors
  }
});

app.post('/message',async(req,res)=>{
  const {email,message}=req.body

  await userModel2.create({
    email:email,
    message:message
  });

  res.redirect('/')
})

app.get('/list_messages',(req,res)=>{
  res.render('list_messages')
})

app.post('/list_messages',async (req,res)=>{
  const { password } = req.body;

  // Debugging: Log the received and stored passwords
  // console.log("Received password:", password);
  // console.log("Stored password:", process.env.ADMIN);

  if (password.trim() !== process.env.MESSAGE.trim()) {
    return res.status(401).json({ error: "Admin ban ja pehle" }); // Return JSON for invalid password
  }

  try {
    const data = await userModel2.find({});
    res.json(data); // Return data as JSON
  } catch (e) {
    res.status(500).json({ error: "Server error" }); // Return JSON for server errors
  }
})

dbConnection
  .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
