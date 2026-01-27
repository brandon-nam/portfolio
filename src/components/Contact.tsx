import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [isSending, setIsSending] = React.useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        // Replace these strings with your actual IDs from the dashboard
        const serviceID = "service_r6nfu8j";
        const templateID = "template_5li626c";
        const publicKey = "MLwFpSgFhLh3Gi1Ws";

        setIsSending(true);
        if (form.current) {
            emailjs
                .sendForm(serviceID, templateID, form.current, publicKey)
                .then(
                    (result) => {
                        console.log("SUCCESS!", result.text);
                        form.current?.reset();
                        alert("Message sent!");
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                        alert("Something went wrong.");
                    },
                )
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <section id="contact">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <form ref={form} onSubmit={sendEmail} className="p-4 bg-white rounded shadow-card border">
                    <label className="block text-sm">Name</label>
                    <Input className="mt-1" name="name" />
                    <label className="block text-sm mt-3">Email</label>
                    <Input type="email" className="mt-1" name="email" />
                    <label className="block text-sm mt-3">Message</label>
                    <textarea className="w-full mt-1 p-2 border rounded" rows={4} name="message" />
                    <div className="mt-3">
                        <button
                            type="submit"
                            disabled={isSending}
                            className={`px-4 py-2 text-white rounded ${isSending ? "bg-gray-400" : "bg-primary"}`}
                        >
                            {isSending ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>
                <div className="p-4 rounded bg-white shadow-card border">
                    <p className="text-sm">
                        I'm actively looking for SWE / DevOps / SRE roles. Please feel free to drop me an email for any matter!
                    </p>
                    <div className="mt-4 text-sm text-muted">Email: brandonnam2020@gmail.com</div>
                </div>
            </div>
        </section>
    );
}
