function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-info">
        <h3>Sabores en Granos</h3>
        <p>Tienda de café en granos seleccionados.</p>

        <div className="footer-datos">
          <p>📍 Av.Libertador 1250 - C.A.B.A</p>
          <p>🕒 Lunes a Sábados de 9:00 a 19:00 hs</p>
          <p>📞 +54 11 4567-8900</p>
          <p>✉️ contacto@saboresengranos.com</p>
        </div>
      </div>

      <h4>Nuestro Equipo</h4>

      <div className="equipo-container">
        <div className="equipo-card">
          <img
            className="equipo-imagen"
            src="/img/belen.png"
            alt="Belén González"
          />
          <h5>Belén González</h5>
          <p>CEO</p>
          <p>belen@saboresengranos.com</p>
        </div>

        <div className="equipo-card">
          <img
            className="equipo-imagen"
            src="/img/Laura.png"
            alt="Laura García"
          />
          <h5>Laura García</h5>
          <p>Encargada en Logística</p>
          <p>laura@saboresengranos.com</p>
        </div>

        <div className="equipo-card">
          <img
            className="equipo-imagen"
            src="/img/martin.png"
            alt="Martín López"
          />
          <h5>Martín López</h5>
          <p>Especialista en Café - Q Grader</p>
          <p>martin@saboresengranos.com</p>
        </div>
      </div>

      <p className="footer-copy">© 2026 - Sabores en Granos</p>
    </footer>
  );
}

export default Footer;
