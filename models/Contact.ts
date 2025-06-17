// models/Contact.ts
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    country: { type: String, default: 'India' },
    email: { type: String, required: true },
    reason: { type: String },
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);
