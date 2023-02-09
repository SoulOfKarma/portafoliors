import { Container, Row, Col } from "react-bootstrap";
import linkedinIcon from "../assets/icons/linkedin.png";
import githubIcon from "../assets/icons/github.png";
import uwuLogo from "../assets/icons/uwu.png";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="imglogof">
            <img src={uwuLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/soulofkarma/"
                target="_blank"
              >
                <img src={linkedinIcon} alt="Icon" />
              </a>
              <a href="https://github.com/SoulOfKarma" target="_blank">
                <img src={githubIcon} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
