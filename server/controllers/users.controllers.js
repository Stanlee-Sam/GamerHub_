import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import bcrypt from 'bcrypt'
export const createUser = async (req, res) => {
    try {
      const { firstName, lastName, emailAddress, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          password: hashedPassword,
        },
      });
      res.json(newUser);
      // res.status(200).json({success : true, message: "Sign up successfully"})
    } catch (e) {
      res.status(500).json({ success: false, message: e.message });
    }
  }