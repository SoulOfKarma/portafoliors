import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import uwuLogo from "../assets/icons/uwu.png";
import yo from "../assets/icons/yo.png";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["FullStack Developer", "Backend Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido</span>
            <h1>
              {"Hola, Soy Ricardo"} <span className="wrap">{text}</span>{" "}
            </h1>
            <p>
              Tengo 8 años de experiencia en soporte de hardware y software y 2
              años como Desarrollador Full stack, Me gusta aprender nuevos
              desafíos, ya que puedo adquirir nuevos conocimientos y
              metodologias de otros lenguajes, me apasionan los videojuegos y
              esto me llevo que me gustara desarrollar aplicaciones.
            </p>
            <a href="#connect" onClick={() => onUpdateActiveLink("connect")}>
              <button onClick={() => console.log("Connect")}>
                Contactame<ArrowRightCircle size={25}></ArrowRightCircle>
              </button>
            </a>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <img
              src={yo}
              alt="Header Tag"
              className="rounded-circle img-thumbnail img-responsive"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
