import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter section" id="newsletter">
      <div className="container newsletter-flex">
        <h2>Suscríbete a nuestro boletín informativo</h2>
        <p>
          Recibe las últimas noticias y actualizaciones de tutorías directamente
          en tu bandeja de entrada.
        </p>
        <form>
          <input type="email" placeholder="Ingresa tu correo electrónico" />
          <button className="btn">Suscribirse</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
