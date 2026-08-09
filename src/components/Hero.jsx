import { hero } from "../data/siteData";
import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">{hero.greeting}</p>

          <h1 className="hero__title">
            <span className="hero__title-line">
              <span className="hero__title-accent">{hero.titleLine1Accent}</span>
            </span>
            <span className="hero__title-line">{hero.titleLine2}</span>
          </h1>

          <p className="hero__description">{hero.description}</p>

          <div className="hero__actions">
            <a href={hero.primaryCta.href} className="btn btn--primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn--secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__photo-ring">
            <div className="hero__photo-frame">
              <img
                src={hero.photo.src}
                alt={hero.photo.alt}
                className="hero__photo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
