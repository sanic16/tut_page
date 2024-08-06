import Image from "next/image";
import "./details.css";

import detailsImg from "@/../public/images/details.png";
import authorImg from "@/../public/images/author.png";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

const Details = () => {
  return (
    <>
      <section className="details section" id="details">
        <div className="container details-flex">
          <Image src={detailsImg} alt="details" />
          <div className="details-content">
            <h2>Detalles de la tutoría</h2>
            <div className="heading-border"></div>
            <p>
              Las tutorías son una forma de enseñanza personalizada que se
              adapta a las necesidades de cada estudiante. En las tutorías, el
              estudiante recibe una atención individualizada que le permite
              avanzar a su propio ritmo y superar las dificultades que se le
              presentan en el aprendizaje.
            </p>
            <Link href={"#"} className="btn">
              Leer más
            </Link>
          </div>
        </div>
      </section>

      {/* Author Info */}
      <section className="details section" id="author">
        <div className="container details-flex">
          <Image src={authorImg} alt="details" />
          <div className="details-content">
            <h2>Información del Author</h2>
            <div className="heading-border"></div>
            <p>
              Las tutorías son una forma de enseñanza personalizada que se
              adapta a las necesidades de cada estudiante. En las tutorías, el
              estudiante recibe una atención individualizada que le permite
              avanzar a su propio ritmo y superar las dificultades que se le
              presentan en el aprendizaje.
            </p>

            <ul>
              <li>
                <FaChevronCircleRight className="text-primary" />{" "}
                <strong>Experiencia: </strong> 5 años
              </li>
              <li>
                <FaChevronCircleRight className="text-primary" />{" "}
                <strong>Habilidades: </strong> Matemáticas, Física, Química
              </li>
              <li>
                <FaChevronCircleRight className="text-primary" />{" "}
                <strong>Expertise: </strong> Nivel universitario
              </li>
            </ul>
            <Link href={"#"} className="btn">
              Leer más
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
