import { FaCloud, FaGlobe, FaRocket, FaServer, FaUser } from "react-icons/fa6";
import "./takeaway.css";
import { FaCog } from "react-icons/fa";

const takeaways = [
  {
    icon: FaRocket,
    text: "Habilidades mejoradas - Aprenderá cómo mejorar sus habilidades de programación.",
  },
  {
    icon: FaGlobe,
    text: "Perspectiva global - Obtenga información sobre las tendencias y las mejores prácticas de la industria.",
  },
  {
    icon: FaCloud,
    text: "Tecnología en la nube - Explore las últimas tecnologías y herramientas en la nube.",
  },
  {
    icon: FaUser,
    text: "Redes - Conéctese con otros profesionales y amplíe su red de contactos.",
  },
  {
    icon: FaCog,
    text: "Resolución de problemas - Mejore sus habilidades de resolución de problemas y pensamiento crítico.",
  },
  {
    icon: FaServer,
    text: "Competencia técnica - Mejore su competencia técnica y manténgase al día en el panorama digital.",
  },
];

const Takeaway = () => {
  return (
    <section className="takeaways section" id="takeaways">
      <div className="container">
        <div className="section-header">
          <h2>Puntos Pricipales</h2>
          <div className="heading-border"></div>
          <p>
            Aquí hay algunos puntos clave que debe recordar de este tutorial. Si
            desea obtener más información, puede leer el tutorial completo.
          </p>
        </div>
        <div className="takeaways-cards">
          {takeaways.map((takeaway, index) => (
            <div className="card" key={index}>
              <takeaway.icon
                style={{ fontSize: "6rem" }}
                className="text-primary"
              />
              <p>
                <strong>{takeaway.text.split(" - ")[0]}</strong>{" "}
                {takeaway.text.split(" - ")[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Takeaway;
