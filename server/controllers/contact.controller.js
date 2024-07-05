import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const sendMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    const newMessage = await prisma.contact.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      },
    });
    res.status(200).json({ success: true, message: "Message submitted successfully", newMessage });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
