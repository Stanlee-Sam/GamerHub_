import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '30h', 
    });
  };

export const validateInformation = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName)
    return res
      .status(400)
      .json({ success: false, message: "First Name is required" });
  if (!lastName)
    return res
      .status(400)
      .json({ success: false, message: "Last Name is required" });

  if (!email)
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });
  if (!password)
    return res
      .status(400)
      .json({ success: false, message: "Password is required" });

  try {
    const userWithEmail = await prisma.user.findFirst({
      where: { email: email },
    });

    if (userWithEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    next();
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Sign up successful", newUser });
  } catch (e) {
    console.error("Error creating user:", e);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await prisma.user.findFirst({ where: { email } });
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }
  
      const token = generateToken(user); 
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
  
      res.status(200).json({ success: true, message: "Login successful",token });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };

