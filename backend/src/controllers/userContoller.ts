import { Request, Response } from "express";
import User,{IUser} from "../models/userModel"; // Import your User model
import bcrypt from "bcrypt"; // For password hashing

export const registerUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Save user to database logic...
  try{
    //Check if the User already exists
    const existingUser = await User.findOne({username});
    if(existingUser){
        return res.status(400).json("User already exists");
    }

    // Hash the password
    const hashedPassword =await bcrypt.hash(password,10);

    // Save user to databse
    const newUser = new User({username,password:hashedPassword});
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  }catch(error){
    console.error(error);
    res.status(500).json({message:"Server error"});
  }
  
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try{
    // Authenticate user logic...
    const user:IUser | null =await User.findOne({username});
    if(!user){
        return res.status(401).json({message: "Invalid username or password"});
    }

    //Compare the hashed password
    const isMatch =await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({message: "Invalid username or password"})
    }

    // Store user ID in session
    req.session.userId = user._id.toString(); 
    res.status(200).json({ message: "User logged in successfully" });
  }catch(error){
    console.error(error);
    res.status(500).json({message: "Server error"});
  }
  
  
};

export const logoutUser = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out" });
    }
    res.status(200).json({ message: "User logged out successfully" });
  });
};
