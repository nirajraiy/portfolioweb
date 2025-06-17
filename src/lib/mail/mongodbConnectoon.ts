// db.ts
import mongoose from 'mongoose';

let isConnected: boolean = false; // To track connection status

export const connectMongoDB = async (): Promise<void> => {
  if (isConnected) {
    console.log('🟢 MongoDB already connected');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    isConnected = !!conn.connection.readyState;
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', (error as Error).message);
    process.exit(1);
  }
};
