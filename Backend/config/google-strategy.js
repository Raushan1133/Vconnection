import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import passport from 'passport'
// import userModel from '../../MyInvestorConnect-frontend/src/models/userModel.js';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';
import { configDotenv } from 'dotenv';
configDotenv()
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async(accessToken, refreshToken, profile, done) => {
    try {
        let user = await userModel.findOne({email : profile._json.email});

        if(!user){
            const lastSixDigitsId = profile.id.substring.apply(profile.id.length - 6);
            const lastTwoDigitsName = profile._json.name.substring(profile._json.name.length - 2);
            const newPass = lastSixDigitsId+lastTwoDigitsName
            const salt = bcryptjs.genSaltSync(10);
            const hashedPass = bcryptjs.hashSync(newPass,salt);
           user =  await userModel.create({
                name :profile._json.name,
                email : profile._json.email,
                password : hashedPass,
                profilePic : profile._json.picture  
            })
        }
        // Generate token
        const token = jwt.sign({email : user.email, id:user._id},process.env.JWT_SECRET,{expiresIn:'30d'});
        return done(null,{user,token,accessToken,refreshToken});
    } catch (error) {
        return done(error)
    }
  }
));

