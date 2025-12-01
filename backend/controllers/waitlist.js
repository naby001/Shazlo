import WaitlistUser from "../models/WaitlistUser.js";

export const addToWaitlist = async (req, res) => {
  try {
    const { name, email, gender, city } = req.body;

    // Validate required fields
    if (!name || !email || !gender || !city) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check duplicate email
    const existing = await WaitlistUser.findOne({ email });
    if (existing) {
      return res.status(200).json({
        message: "Email already added",
        alreadyAdded: true,
      });
    }

    // Create user
    await WaitlistUser.create({ name, email, gender, city });

    return res.status(201).json({
      message: "Successfully added to waitlist",
      alreadyAdded: false,
    });

  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
};
