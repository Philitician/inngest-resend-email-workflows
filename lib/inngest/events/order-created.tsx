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
      const heads = headers();
      console.log("heads", heads);
      console.log("VERCEL_URL: ", env.VERCEL_URL || "http://localhost:3000");
      // const { data } = await resend.emails.send({
      //   from: "Testing Resend <onboarding@resend.dev>",
      //   to: email,
      //   subject: "Hello World!!",
      //   react: (
      //     <BasicEmail>
      //       <Button href={`/order/${orderId}`}>View your order</Button>
      //     </BasicEmail>
      //   ),
      // });
      // console.log("Email sent", data);
    });
  }
);
