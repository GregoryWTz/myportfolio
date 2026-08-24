import "../styles/Footer.css";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  const footer = t.footer;

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">{footer.text}</p>
        <p className="footer__credit">— {footer.credit}</p>
      </div>
    </footer>
  );
}

export default Footer;