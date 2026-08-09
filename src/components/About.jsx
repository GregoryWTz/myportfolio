import { useEffect, useRef, useState } from "react";
import "../styles/About.css";
import { about } from "../data/siteData";
import { useInView } from "../hooks/useInView";

function About() {
    const [titleRef, titleVisible] = useInView();
    const [textRef, textVisible] = useInView({ threshold: 0.1 });

    return (
        <section id="about" className="about">
            <div className="container about__inner">
                <h2 ref={titleRef} className={`about__title ${titleVisible ? "in-view" : ""}`}>
                    {about.title}
                </h2>
                <p ref={textRef} className={`about__text_p1 ${textVisible ? "in-view" : ""}`}>
                    {about.text1}
                </p>
            </div>
        </section>
    );
}

export default About;