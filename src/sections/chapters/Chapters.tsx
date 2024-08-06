import Image from "next/image";
import "./chapters.css";

import chaptersIcon1 from "@/../public/images/chapters-icon-1.svg";
import chaptersIcon2 from "@/../public/images/chapters-icon-2.svg";
import chaptersIcon3 from "@/../public/images/chapters-icon-3.svg";

const chapters = [
  {
    id: 1,
    icon: chaptersIcon1,
    title: "Capítulo 1: Introducción a las tutorías",
    description:
      "En este capítulo, los estudiantes aprenderán qué son las tutorías, por qué son importantes y cómo pueden beneficiar a los alumnos.",
  },
  {
    id: 2,
    icon: chaptersIcon2,
    title: "Capítulo 2: Cómo convertirse en un tutor eficaz",
    description:
      "En este capítulo, los estudiantes aprenderán las habilidades y cualidades necesarias para ser un tutor eficaz y exitoso.",
  },
  {
    id: 3,
    icon: chaptersIcon3,
    title: "Capítulo 3: Estrategias de tutoría efectivas",
    description:
      "En este capítulo, los estudiantes aprenderán diferentes estrategias y técnicas que pueden utilizar para ayudar a los alumnos a mejorar su aprendizaje.",
  },
];

const Chapters = () => {
  return (
    <section className="chapters section" id="chapters">
      <div className="container">
        <div className="section-header">
          <h2>Capítulos Principales</h2>
          <div className="heading-border"></div>
          <p>
            A continuación se presentan los capítulos principales de este curso
            de tutorías. Cada capítulo contiene una serie de lecciones que
            abordan diferentes temas. Al final de cada capítulo, se incluyen
            ejercicios para que los estudiantes practiquen lo aprendido.
          </p>
        </div>
        <div className="chapter-cards">
          {chapters.map((chapter) => (
            <div className="card" key={chapter.id}>
              <Image src={chapter.icon} alt={chapter.title} />
              <h3>{chapter.title}</h3>
              <p>{chapter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chapters;
