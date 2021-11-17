import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegDb",{
    useNewUrlParser:true,
    useUnifiedTopology:true

}, ()=>{
    console.log("DB connected")
})


const userSchema= new mongoose.Schema({
    
   name:String,
    email:String,
    phoneNumber:Number,
    password:String
   
           
   
})
const User=new mongoose.model('User',userSchema);

//Routes


app.post("/login",(req,res)=>{
    const { email, password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login sucessfull", user:user})
            }else{
                res.send({message:"Password didn't match"})
            }
   
}else{
    res.send({message:"User not registered"})
}
    })
})

app.post("/register",(req,res)=>{
    const {name, email, phoneNumber, password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }else{
            const user= new User({
                name,
                email,
                phoneNumber,
                password
            })
            user.save(err=>{
                if(err){
                res.send(err)
            }else{
                res.send({message:"Successfully Registered"})
            }
    })
}
    })
})

app.post("/forgetpassword", (req, res)=>{
  User.findOne({email:req.body.email})
  .then (user=>{
     
    
        res.send({message:"Reset your password"})
    })
   
  })

  app.put("/resetpassword", (req, res)=>{
    User.findOne({email:req.body.email})
    .then (user=>{
       
       user.password= req.body.password;
      console.log(password)
     user.save(err=>{
          if(err){
          res.send(err)
      }else{
          res.send({message:"Successfully Reset the password"})
      }
      })
      })
    })

app.listen(8000,()=>{
    console.log("BE started at port 8000")
})