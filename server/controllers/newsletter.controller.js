import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscription = await prisma.newsletterSubscription.create({
      data: {
        email: email,
      },
    });
    res.status(200).json({ success: true, message: "Subscription Successful" });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
