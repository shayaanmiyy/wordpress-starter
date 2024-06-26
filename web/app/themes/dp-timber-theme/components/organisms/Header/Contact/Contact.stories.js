import contactForm from "./Contact.twig";

export default {
    title: "Organisms/Contact",
    render: ({ label, ...args }) => {
        return contactForm({ label, ...args });
    }
}

export const Default = {}