import "./contact.css";

const Contact = () => {
  return (
    <>
      <header className="inner-header">
        <div className="container">
          <h1>Contáctanos</h1>
        </div>
      </header>
      <section className="contact-form section">
        <div className="container-sm">
          <p>
            Si tienes alguna pregunta, sugerencia o comentario, no dudes en
            contactarnos. Estamos aquí para ayudarte.
          </p>
          <form>
            <input name="name" type="text" placeholder="Nombre" />
            <input name="email" type="email" placeholder="Correo Electrónico" />
            <textarea name="message" placeholder="Mensaje"></textarea>
            <button className="btn">Enviar Mensaje</button>
          </form>
        </div>
      </section>

      <section className="location section">
        <div className="container-sm">
          <h2>Ubicación</h2>
          <p>
            Estamos ubicados en San Miguel Petapa, Guatemala. Si deseas
            visitarnos en persona, por favor contáctanos para coordinar una
            cita.
          </p>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61804.89431900907!2d-90.61088493575387!3d14.495829571333237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a64a5c8e1efd%3A0x5c9fb3e748909746!2sSan%20Miguel%20Petapa!5e0!3m2!1sen!2sgt!4v1722954609172!5m2!1sen!2sgt"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
