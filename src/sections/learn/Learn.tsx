import Image from "next/image";
import "./learn.css";

import desc1 from "@/../public/images/description-1.jpg";
import desc2 from "@/../public/images/description-2.jpg";
import desc3 from "@/../public/images/description-3.jpg";
import desc4 from "@/../public/images/description-4.jpg";
import desc5 from "@/../public/images/description-5.jpg";
import desc6 from "@/../public/images/description-6.jpg";
import desc7 from "@/../public/images/description-7.jpg";
import desc8 from "@/../public/images/description-8.jpg";

const topics = [
  {
    id: 1,
    title: "Domina JavaScript y TypeScript con ejemplos reales",
    img: desc1,
  },
  {
    id: 2,
    title: "Aprende backend con Node.js y Nest.js",
    img: desc2,
  },
  {
    id: 3,
    title: "Diseña RESTful APIs con FastAPI y SQLAlchemy",
    img: desc3,
  },
  {
    id: 4,
    title: "Desarrolla aplicaciones web con React y Next.js",
    img: desc4,
  },
  {
    id: 5,
    title: "Desarrolla aplicaciones móviles con React Native",
    img: desc5,
  },
  {
    id: 6,
    title: "Aprende a programar en Python desde cero",
    img: desc6,
  },
  {
    id: 7,
    title: "Aprende a programar en Java desde cero",
    img: desc7,
  },
  {
    id: 8,
    title: "Aprende a programar en C++ desde cero",
    img: desc8,
  },
];

const Learn = () => {
  return (
    <section className="learn">
      <div className="container">
        <div className="section-header">
          <h2>Qué vas a aprender ?</h2>
          <div className="heading-border"></div>
          <p>
            Con nuestras tutorías, aprenderás a programar desde cero, con
            ejercicios prácticos y ejemplos reales. Aprenderás a programar en
            lenguajes como JavaScript, Python, Java, C++, C#, Ruby, PHP, entre
            otros.
          </p>
        </div>
        <div className="topics">
          {topics.map((topic) => (
            <div key={topic.id} className="topic">
              <div className="topic-image">
                <Image src={topic.img} alt={topic.title} />
              </div>
              <div className="topic-text">
                <h3>{topic.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learn;
