import Container from "../ui/Container";

function Footer() {
  return (
    <footer className="footer">
      <Container size="lg">
        <div className="footer__content">
          
          {/* Branding */}
          <div className="footer__brand">
            <h3 className="footer__logo">KevinAndrés</h3>
            <p className="footer__tagline">
              Building digital solutions that create real value.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer__nav">
            <h4 className="footer__title">Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__title">Contact</h4>
            <ul>
              <li><a href="mailto:kevin.guerrero1223@gmail.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/guer98/" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/Guer1298" target="_blank">GitHub</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p>© 2026 TuNombre. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;