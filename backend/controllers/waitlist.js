import WaitlistUser from "../models/WaitlistUser.js";

export const addToWaitlist = async (req, res) => {
  try {
    const { email, university } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // prevent duplicate
    const existing = await WaitlistUser.findOne({ email });
    if (existing) {
      return res.status(200).json({ message: "Email already added" });
    }

    await WaitlistUser.create({ email, university });

    return res.status(201).json({ message: "Successfully added to waitlist" });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};
