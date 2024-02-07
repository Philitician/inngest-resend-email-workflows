import { Input } from "@/components/ui/input";
import { resend } from "@/lib/resend";
import { BasicEmail } from "@/components/basic-email";
import { Button } from "@/components/ui/button";
import { Button as EmailButton } from "@react-email/components";

export function SendEmailForm() {
  const sendEmail = async (formData: FormData) => {
    "use server";
    const to = formData.get("to") as string;
    if (!to) throw new Error("No recipient");

    const { data } = await resend.emails.send({
      from: "Testing Resend <onboarding@resend.dev>",
      to,
      subject: "Hello World!!",
      // react: BasicEmail({ url: "https://resend.dev", urlMessage: "Resend" }),
      react: (
        <BasicEmail>
          <EmailButton href="https://resend.dev">Go to Resend</EmailButton>
        </BasicEmail>
      ),
    });
    console.log("response from sending email: ", data);
  };
  return (
    <form action={sendEmail} className="flex flex-col gap-4">
      <Input name="to" type="email" placeholder="Email..." />
      <Button>Send Email</Button>
    </form>
  );
}
