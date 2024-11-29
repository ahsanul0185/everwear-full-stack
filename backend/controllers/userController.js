import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import createToken from "../helper/createToken.js";
import  jwt  from "jsonwebtoken";

// User login
const loginUser = async (req, res) => {
    try {
        
        const {email, password} = req.body;

        const user = await userModel.findOne({email});
        
        // checking if user is exist
        if (!user) {
            return res.json({success : false, message : "User doesn't exists."})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success : false, message : "Invalid email or password."});   
        }
        const token = createToken(user._id);

        res.json({success : true, token});

    } catch (error) {
        console.log(error);
        res.json({success : false, message : error.message});
    }
};

// User registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking user already exist or not
    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User already exists." });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email.",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password.",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({success : true, token, user });

  } catch (error) {
    console.log(error);
    res.json({success : false, message : error.message});
  }
};

// Admin login
const adminLogin = async (req, res) => {
  try {
    const {email, password} = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.json({success : true, token})
    }else{
      res.json({success : false, message : "Invalid credentials."})
    }
  } catch (error) {
    res.json({success : false, message : error.message});
  }
};

export { loginUser, registerUser, adminLogin };