import { BasicEmail } from "@/components/basic-email";
import { resend } from "@/lib/resend";
import { Button } from "@react-email/components";
import { inngest } from "../client";
import { headers } from "next/headers";
import { env } from "@/env";

export const orderCreated = inngest.createFunction(
  { id: "order-created" },
  { event: "order/created" },
  async ({ event, step }) => {
    const { orderId } = event.data;
    const { userId, email } = event.user;
    await step.run("Send confirmation email", async () => {
      const { data } = await resend.emails.send({
        from: "Ordrespesialisten <onboarding@resend.dev>",
        to: email,
        subject: "Ordre opprettet!",
        react: (
          <BasicEmail>
            <Button href={getOrderUrl(orderId)}>
              Sjekk ut ordre {orderId}
            </Button>
          </BasicEmail>
        ),
      });
      console.log("Email sent", data);
    });
  }
);

const getOrderUrl = (orderId: number) => {
  const heads = headers();
  const host = heads.get("x-forwarded-host");
  const protocol = heads.get("x-forwarded-proto");
  return `${protocol}://${host}/order/${orderId}`;
};
