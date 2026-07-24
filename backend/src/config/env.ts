import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("3000"),

  DATABASE_URL: z.string(),

  JWT_SECRET: z.string().min(10),

  CORS_ORIGINS: z.string().default("http://localhost:5173"),
});

export const env = envSchema.parse(process.env);