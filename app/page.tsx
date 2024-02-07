import { SendEmailForm } from "./_components/send-email-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-8">
      <h1 className="text-4xl font-bold">Lets send an email!</h1>
      <SendEmailForm />
    </main>
  );
}
