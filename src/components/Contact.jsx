import { useState } from "react";
import "../styles/Contact.css";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

function ContactCard({ card, copiedLabel }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(card.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy email:", err);
        }
    };

    return (
        <div className="contact__box">
            <h3 className="contact__box-title">{card.title}</h3>
            <p className="contact__box-text">{card.text}</p>

            {card.type === "email" ? (
                <button
                    type="button"
                    className="contact__box-btn"
                    onClick={handleCopy}
                >
                    {copied ? copiedLabel : card.buttonLabel}
                </button>
            ) : (
                <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__box-btn"
                >
                    {card.buttonLabel}
                </a>
            )}
        </div>
    );
}

function Contact() {
    const { t } = useLanguage();
    const contact = t.contact;
    const [titleRef, titleVisible] = useInView();
    const [rowRef, rowVisible] = useInView({ threshold: 0.1 });

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__content">
                    <h2
                        ref={titleRef}
                        className={`contact__title ${titleVisible ? "in-view" : ""}`}
                    >
                        {contact.title}
                    </h2>

                    <div
                        ref={rowRef}
                        className={`contact__boxes ${rowVisible ? "in-view" : ""}`}
                    >
                        {contact.cards.map((card, i) => (
                            <ContactCard
                                key={i}
                                card={card}
                                copiedLabel={contact.copiedLabel}
                            />
                        ))}
                    </div>

                    <p className={`contact__location ${rowVisible ? "in-view" : ""}`}>
                        <span className="contact__location-icon" aria-hidden="true">📍</span>
                        {contact.location}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;