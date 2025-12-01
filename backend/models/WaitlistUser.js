import mongoose from "mongoose";

const waitlistUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// Ensure unique email index exists
waitlistUserSchema.index({ email: 1 }, { unique: true });

const WaitlistUser = mongoose.model("WaitlistUser", waitlistUserSchema);

export default WaitlistUser;
