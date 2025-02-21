import express from 'express'
import { configDotenv } from 'dotenv';
import connectDB from './db.js';
import passport from 'passport';
import './config/google-strategy.js'
import jwt from 'jsonwebtoken'
import userModel from './models/userModel.js';
import cors from 'cors'
configDotenv();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",async(req,res)=>{
    try {
        return res.status(200).json({message:"Server is working properly!"});
    } catch (error) {
        return res.status(500).json({message:"Internal server error!"});
    }
})

    app.get('/auth/google',
    passport.authenticate('google', { session : false,scope: ['profile','email'] }));
  
    app.get('/auth/google/callback', 
    passport.authenticate('google', {session : false, failureRedirect: `${process.env.FRONTEND_URL}` }),
    function(req, res) {
        const{user,token,accessToken,refreshToken} = req.user

      // Successful authentication, redirect home.
      res.redirect(`${process.env.FRONTEND_URL}/loginRegisterPage?token=${token}`);
    });


        app.post("/get-user-details", async (req, res) => {
        try {
            const { token } = req.body;
            if (!token) {
                return res.status(400).json({ message: "Token is required!", success: false });
            }
    
            // Verify the token synchronously and get decoded data
            let decoded;
            try {
                decoded = jwt.verify(token, process.env.JWT_SECRET);
            } catch (error) {
                return res.status(401).json({ message: "Invalid token!", success: false });
            }
    
            // Fetch user details
            const user = await userModel.findOne({ email: decoded.email }).select("-password");
            if (!user) {
                return res.status(404).json({ message: "User not found!", success: false });
            }
    
            return res.status(200).json({ message: "Data fetched!", success: true, data: user });
        } catch (error) {
            console.error("Error fetching user details:", error);
            return res.status(500).json({ message: "Server is down!", success: false });
        }
    });
    

const PORT = process.env.PORT;
connectDB().then(app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} port`)
}))
