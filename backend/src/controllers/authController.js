const User = require('../models/User');
exports.register = async (req,res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password

    })

    try {
        
        const saveUser = await newUser.save();
        if(saveUser){
            return res.status(200).json({
                success:true,
                message:"User Registered Successfully!",
                user:saveUser
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"Failed to Register!",
              
            })  
        }
    } catch (error) {
        if(error.code ==11000){
            error = "Username or Email is already Registered!";
        }
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            error:error
        })
    }

    return res.json({ body: req.body, id: req.params.id });
}