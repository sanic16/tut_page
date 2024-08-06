import { FaCheckCircle } from "react-icons/fa";
import "./information.css";

const Information = () => {
  return (
    <section className="info" id="info">
      <div className="info-container">
        <div className="info-left"></div>
        <div className="info-content">
          <h2>¿Qué es una tutoría?</h2>
          <p>
            Una tutoría es una actividad académica que se realiza de manera
            individual o grupal, en la que un estudiante recibe orientación y
            acompañamiento por parte de un tutor, con el objetivo de mejorar su
            rendimiento académico y su aprendizaje.
          </p>
          <ul>
            <li>
              <FaCheckCircle /> Mejora el rendimiento académico.
            </li>
            <li>
              <FaCheckCircle /> Facilita el aprendizaje.
            </li>
            <li>
              <FaCheckCircle /> Fomenta la autonomía y la responsabilidad.
            </li>
            <li>
              <FaCheckCircle /> Ayuda a superar dificultades.
            </li>
            <li>
              <FaCheckCircle /> Promueve la reflexión y el pensamiento crítico.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Information;
