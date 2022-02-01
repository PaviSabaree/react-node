import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(bodyParser.json())
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
const UserProfileSchema = new mongoose.Schema({
    name:String,
    email: String,
    notes: String
    })
const UserProfile =new mongoose.model('Userprofile', UserProfileSchema)
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
// get profile
app.get('/userProfile', (req, res) => {
    UserProfile.find().then(UserProfile => {
        res.send(UserProfile)
    })
});
// save profile
app.post('/userProfile', (req, res) => {
    const newUserProfile = new UserProfile({
        name: req.body.name,
        email: req.body.email,
        notes: req.body.notes
    });
    newUserProfile.save().then(UserProfile => {
        console.log(UserProfile);
        res.json(UserProfile);
    })
})
// get single profile
app.get('/userProfile/:id', (req, res) => {
    UserProfile.findById(req.params.id).then(UserProfile => {
        res.send(UserProfile)
    })
});

// delete profile
app.delete('/userProfile/:id', (req, res) => {
    UserProfile.findById(req.params.id).then(RUserProfile => RUserProfile.remove()
            .then(() => res.send(`${RUserProfile.name} removed `)))
        .catch(err => res.status(404).send("err"))
});
// updating profile
app.put('/userProfile/:id', (req, res) => {
    UserProfile.findById(req.params.id).then(UserProfile => {
        UserProfile.name = req.body.name;
        UserProfile.email = req.body.email;
        UserProfile.notes = req.body.notes;
        UserProfile.save()
            .then(UserProfile => res.send(`${UserProfile.name} updated`))

        .catch(err => res.status(404).send("err"))


    })
});
app.listen(8000,()=>{
    console.log("BE started at port 8000")
})