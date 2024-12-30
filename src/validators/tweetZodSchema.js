import { z } from "zod";

export const tweetZodSchema = z.object({
    body: z.string().min(1).max(280),  // body is required
    name: z.string().min(1).max(100).optional(), // name is optional, you can remove .optional() if it's required
});
