import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/icons/color-sharp2.png";
import vhgtrrff1 from "../assets/icons/vista1hgttrrff.png";
import vhgtrrff2 from "../assets/icons/vista2hgtrrff.png";
import vhgtrrff3 from "../assets/icons/vista3sgtrrff.png";
import vhslb1 from "../assets/icons/vista1hslb.png";
import vhslb2 from "../assets/icons/vista2hslb.png";
import vhslb3 from "../assets/icons/vista3hslb.png";
import gtm1 from "../assets/icons/grupotusmaquinas1.png";
import gtm2 from "../assets/icons/grupotusmaquinas2.png";
import gtm3 from "../assets/icons/grupotusmaquinas3.png";

function Projects() {
  const projects1 = [
    {
      title: "Desarrollo Plataforma Mantencion HSJD",
      description: "Panakeia",
      imgUrl: vhgtrrff1,
    },
    {
      title: "Desarrollo Plataforma Mantencion HSJD",
      description: "Panakeia",
      imgUrl: vhgtrrff2,
    },
    {
      title: "Desarrollo Plataforma Mantencion HSJD",
      description: "Panakeia",
      imgUrl: vhgtrrff3,
    },
  ];
  const projects3 = [
    {
      title: "Desarrollo Plataforma Abastecimiento HSLB",
      description: "Siab",
      imgUrl: vhslb1,
    },
    {
      title: "Desarrollo Plataforma Abastecimiento HSLB",
      description: "Siab",
      imgUrl: vhslb2,
    },
    {
      title: "Desarrollo Plataforma Abastecimiento HSLB",
      description: "Siab",
      imgUrl: vhslb3,
    },
  ];
  const projects4 = [
    {
      title: "Grupo Tus Maquinas - Portal",
      description: "Portal de Arriendo y Venta de Maquinarias",
      imgUrl: gtm1,
    },
    {
      title: "Grupo Tus Maquinas - Vitrina Autoservicio",
      description:
        "Portal de Autoatencion para publicacion de Maquinarias de Arriendo y Venta",
      imgUrl: gtm2,
    },
    {
      title: "Grupo Tus Maquinas - Bitacora",
      description:
        "Portal de gestion de documentacion y estado de Maquinarias en tiempo real",
      imgUrl: gtm3,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p></p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills no-wrap mb-5 align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Proyecto Mantencion HSJD</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    Proyecto Abastecimiento HSLB
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Grupo Tus Maquinas</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    {projects3.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects4.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

export default Projects;
