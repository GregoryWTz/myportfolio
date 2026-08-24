import "../styles/Cv.css";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

function Cv() {
  const { t } = useLanguage();
  const cv = t.cv;
  const [titleRef, titleVisible] = useInView();
  // const [textRef, textVisible] = useInView({ threshold: 0.1 });
  // const [buttonRef, buttonVisible] = useInView({ threshold: 0.1 });
  const [rowRef, rowVisible] = useInView({ threshold: 0.1 });

 return (
    <section id="cv" className="cv">
      <div className="container">

        <div className="cv__content">
          <h2
            ref={titleRef}
            className={`cv__title ${titleVisible ? "in-view" : ""}`}
          >
            {cv.title}
          </h2>

          <div 
            ref={rowRef}
            className={`cv__row ${rowVisible ? "in-view" : ""}`}
          >
            <p
              className={"cv__description"}
            >
              {cv.description}
            </p>

            <a
                href={cv.file}
                download
                className="cv__button"
            >
              {cv.buttonLabel}

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

export default Cv;
