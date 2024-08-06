import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./social.css";

const Social = () => {
  return (
    <section className="social section">
      <div className="container">
        <p>
          Síguenos en nuestras redes sociales para estar al tanto de las últimas
          novedades
        </p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Síguenos en Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            aria-label="Síguenos en Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Síguenos en Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            aria-label="Síguenos en LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            aria-label="Síguenos en YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            aria-label="Síguenos en Pinterest"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
