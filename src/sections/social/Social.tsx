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
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaPinterest />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
