import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/icons/contact.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Mensaje");

    emailjs
      .sendForm(
        "service_1bymzns",
        "template_i5toxnk",
        form.current,
        "xjzavFiZb_VNtFrku"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Pongase en Contacto</h2>
            <form ref={form} onSubmit={sendEmail} id="formCont">
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" name="user_name" placeholder="Nombre" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" name="last_name" placeholder="Apellido" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" name="user_email" placeholder="Correo" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="telefone"
                    name="phone"
                    placeholder="Nro. Telefono"
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    row="6"
                    name="message"
                    form="formCont"
                    id="textareamensaje"
                  ></textarea>
                  <button type="submit">
                    <span>{"Enviar"}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
