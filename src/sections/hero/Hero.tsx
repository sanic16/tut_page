import Image from "next/image";
import "./hero.css";
import headerCourse from "@/../public/images/header-course.png";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="hero">
      <div className="container hero-flex">
        <div className="hero-content">
          <h1>Crea tus tutorías con nosotros</h1>
          <p>
            Encuentra a los mejores tutores para tus clases de matemáticas,
            física, química y más.
          </p>
          <Link href="#" className="btn">
            Ver tutorías
          </Link>
        </div>
        <Image src={headerCourse} alt="hero" />
      </div>
    </header>
  );
};

export default Hero;
