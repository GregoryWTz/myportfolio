import "../styles/Skills.css";
import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";
import {
  SiHtml5, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiPython, SiKotlin,
} from "react-icons/si";
import { FaCss } from "react-icons/fa6";

const iconMap = {
  html: SiHtml5,
  css: FaCss,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mysql: SiMysql,
  mongodb: SiMongodb,
  python: SiPython,
  kotlin: SiKotlin,
};

function SkillPill({ name, icon }) {
  const Icon = iconMap[icon];
  return (
    <span className="skills__pill">
      {Icon && <Icon className="skills__pill-icon" aria-hidden="true" />}
      {name}
    </span>
  );
}

function SkillCategory({ category }) {
  const [ref, visible] = useInView({ threshold: 0.1 });

  return (
    <div className="skills__category">
      <h3 className={`skills__category-title ${visible ? "in-view" : ""}`}>{category.name}</h3>
      {category.note && (
        <p className={`skills__category-note ${visible ? "in-view" : ""}`}>{category.note}</p>
      )}
      <div ref={ref} className={`skills__pills ${visible ? "in-view" : ""}`}>
        {category.items.map((item, i) => (
          <SkillPill key={i} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const { t } = useLanguage();
  const skills = t.skills;
  const [titleRef, titleVisible] = useInView();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2
          ref={titleRef}
          className={`skills__title ${titleVisible ? "in-view" : ""}`}
        >
          {skills.title}
        </h2>

        {/* Featured marquee row */}
        <div className="skills__marquee">
          <div className="skills__marquee-track">
            {[...skills.featured, ...skills.featured].map((icon, i) => {
              const Icon = iconMap[icon];
              return Icon ? (
                <Icon key={i} className="skills__marquee-icon" aria-hidden="true" />
              ) : null;
            })}
          </div>
        </div>

        {skills.categories.map((category, i) => (
          <SkillCategory key={i} category={category} />
        ))}
      </div>
    </section>
  );
}

export default Skills;