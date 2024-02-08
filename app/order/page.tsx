import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { inngest } from "@/lib/inngest/client";
import { z } from "zod";

const orderSchema = z.object({
  email: z.string().email(),
  userId: z.coerce.number().positive().min(1),
  orderId: z.coerce.number().positive().min(1),
});

export default function OrderPage() {
  return (
    <form
      action={async (formData) => {
        "use server";
        const { userId, orderId, email } = orderSchema.parse(
          Object.fromEntries(formData)
        );
        await inngest.send({
          name: "order/created",
          data: {
            orderId,
          },
          user: {
            userId,
            email,
          },
        });
      }}
      className="flex flex-col gap-4"
    >
      <Input name="email" type="email" placeholder="Email..." />
      <Input name="userId" type="hidden" defaultValue="123" />
      <Input hidden name="orderId" type="hidden" defaultValue="987" />
      <Button>Submit order</Button>
    </form>
  );
}
