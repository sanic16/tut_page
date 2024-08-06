import Image from "next/image";
import "./stats.css";

import statsImg from "@/../public/images/stats.png";
import Link from "next/link";

const Stats = () => {
  return (
    <section className="stats section" id="stats">
      <div className="container stats-flex">
        <Image src={statsImg} alt="stats" />
        <div className="stats-content">
          <div className="stats-numbers">
            <div>
              <h3 aria-labelledby="stats-happy-users">600+</h3>
              <p id="stats-happy-users">Estudianets felices</p>
            </div>
            <div>
              <h3 aria-labelledby="stats-issues-solved">358</h3>
              <p id="stats-issues-solved">Tutorías completadas</p>
            </div>
            <div>
              <h3 aria-labelledby="stats-good-reviews">180</h3>
              <p id="stats-good-reviews">Buenas críticas</p>
            </div>
            <div>
              <h3 aria-labelledby="stats-case-studies">40</h3>
              <p id="stats-case-studies">Casos de estudio</p>
            </div>
          </div>
          <p className="stats-text">
            Nuestro objetivo es ayudar a los estudiantes a alcanzar su máximo
            potencial. Nuestro programa ha ayudado a más de 600 estudiantes a
            alcanzar sus objetivos académicos.
          </p>
          <Link href={"#"} className="btn">
            Más información
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;
