import "../styles/Edu.css";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import { Fragment } from "react";

function Edu() {
    const { t } = useLanguage();
    const edu = t.edu;
    const [titleRef, titleVisible] = useInView();

    return (
        <section id="edu" className="edu">
            <div className="container">
                <h2
                    ref={titleRef}
                    className={`edu__title ${titleVisible ? "in-view" : ""}`}
                >
                    {edu.title}
                </h2>
                {edu.entries.map((entry, index) => {
                    const leftSubjects = entry.subjects.filter((_, i) => i % 2 === 0);
                    const rightSubjects = entry.subjects.filter((_, i) => i % 2 !== 0);
                
                    return (
                        <Fragment key={index}>
                            <div key={index} className="edu__entry">
                                <div className="edu__top">
                                    <img
                                        src={entry.image.src}
                                        alt={entry.institution}
                                        className="edu__image"
                                    />
                                    <div className="edu__header">
                                        <h3 className="edu__degree">{entry.degree}</h3>
                                        <p className="edu__institution">{entry.institution}</p>
                                        {entry.gpa && (
                                            <p className="edu__gpa">
                                                <span className="edu__gpa-icon" aria-hidden="true">🎓</span>
                                                GPA: {entry.gpa}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {entry.period && (
                                    <span className="edu__period">
                                        <span className="edu__period__icon" aria-hidden="true">📅</span>
                                        {entry.period}
                                    </span>
                                )}
                            </div>
                            <div className="edu__subjects">
                                <ul className="edu__subjects-list">
                                    {leftSubjects.map((subject, i) => (
                                        <li key={i} className="edu__subject-item">
                                            {subject}
                                        </li>
                                    ))}
                                </ul>

                                <ul className="edu__subjects-list">
                                    {rightSubjects.map((subject, i) => (
                                        <li key={i} className="edu__subject-item">
                                            {subject}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </section>
    );
}

export default Edu;