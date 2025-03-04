// src/index.ts or wherever your server starts
import app from "./app";
import connectDB from "./config/database";
import { connectRedis } from "./config/redis";

async function startServer() {
  // Connect to databases first
  await connectDB();
  //await connectRedis();
  
  const PORT = process.env.PORT || 3001;
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});