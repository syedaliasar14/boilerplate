import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <ContactForm />
    </main>
  );
}