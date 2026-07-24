import { z } from "zod";
import { ModerationStatus } from "@prisma/client";

export const moderationIdParamSchema = z.object({
  id: z.uuid(),
});

export const moderationActionSchema = z.object({
  status: z.enum(ModerationStatus),
});