import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const { username, email, password} = req.body;

    //basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //check if user exist already

    const existing = await User.findOne({ email: email.toLowerCase()});
    if (existing){
        return res.status(400).json({ message: "user already exists!"})
    }

    // creare user

    const user = await User.create({
        username,
        email: email.toLowerCase(),
        password,
        loggedIn: false,
    });

    res.status(201).json({
        message: "User registered",
        user: { _id: user._id, username: user.username, email: user.email, loggedIn: false}
    });
  } catch (error) {
    res.status(500).json( { message: "Internal server error", error: error.message})
  }  
}

const loginUser = async (req, res) => {
    try {
        //check if user already exist
        const {email, password} = req.body;
        const user = await User.findOne({email: email.toLowerCase()});

        if(!user) return res.status(400).json({message: "User does not exist"});

        // compare password
        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});

        res.status(200).json({
            message: "User logged in",
            user: { id: user._id, username: user.username, email: user.email}
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

const logoutUser = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message: "User does not exist"});

        res.status(200).json({
            message: "Logout successful"
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error", error
        })
    }
}

export {
    registerUser,
    loginUser,
    logoutUser
}