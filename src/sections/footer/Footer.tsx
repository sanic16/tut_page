import Link from "next/link";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <ul className="footer-links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Términos</a>
          </li>
          <li>
            <a href="#">Privacidad</a>
          </li>
          <li>
            <Link href="contacto">Contacto</Link>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} Tutorías. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
