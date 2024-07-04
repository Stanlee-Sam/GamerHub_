import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

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