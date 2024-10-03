const connectDB = require('./database')
const express = require('express')
const userModel = require('./user')
const app = express()
const port = 3000
app.use(express.json());


app.post('/SignUp', async (req, res) => {
    const user1 = userModel(req.body);
    try{
        await user1.save();
        res.send("User Added successfully!");
    }catch(err){
        res.status(400).send("Error saving the user:" + err.message);
    }
})

app.get('/OneUser', async (req, res) => {
   const userEmail = req.body.email;
    try{
        console.log(userEmail);
        const user = await userModel.findOne({email : userEmail});
        if (!user){
            res.status(400).send("Error to find the User");
        }
        else{
            res.send(user);
        }
    }catch(err){
        res.status(400).send("Error getting the user");
    }
})

app.get('/AllUser', async (req, res) => {
    //const userEmail = req.body.email;
     try{
      //   console.log(userEmail);
         const user = await userModel.find();
         if (!user){
             res.status(400).send("Error to find the User");
         }
         else{
             res.send(user);
         }
     }catch(err){
         res.status(400).send("Error getting the user");
     }
 })


connectDB().then(
    ()=>{
        console.log("Connection Done");     
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
 ).catch(
    (err)=>{console.error("Something Wrong");
    }
 );
 


