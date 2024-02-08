import { z } from "zod";

export const orderCreatedEvent = z.object({
  name: z.literal("order/created"),
  data: z.object({
    orderId: z.number().int().positive(),
  }),
  user: z.object({
    userId: z.number().int().positive(),
    email: z.string().email(),
  }),
});
