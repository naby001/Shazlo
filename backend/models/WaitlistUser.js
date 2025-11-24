import mongoose from "mongoose";

const waitlistUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    university: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);

// Ensure unique index exists in DB
waitlistUserSchema.index({ email: 1 }, { unique: true });

const WaitlistUser = mongoose.model("WaitlistUser", waitlistUserSchema);

export default WaitlistUser;
