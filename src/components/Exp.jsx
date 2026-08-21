import "../styles/Exp.css";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

function Exp() {
    const { t } = useLanguage();
    const exp = t.exp;
    const [titleRef, titleVisible] = useInView();
    const [rowRef, rowVisible] = useInView({ threshold: 0.1 });

    return (
        <section id="exp" className="exp">
            <div className="container">
                <div className="exp__content">
                    <h2
                        ref={titleRef}
                        className={`exp__title ${titleVisible ? "in-view" : ""}`}
                    >
                        {exp.title}
                    </h2>
                <div
                    ref={rowRef}
                    className={`exp__row ${rowVisible ? "in-view" : ""}`}
                >
                    <p
                        className={"exp__description"}
                    >
                        {exp.description}
                    </p>

                    <a
                        href={exp.file}
                        download
                        className="exp__button"
                    >
                        {exp.buttonLabel}
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );    
}

export default Exp;