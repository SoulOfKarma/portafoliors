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
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Proyecto Mantencion HSJD</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Proyecto Abastecimiento HSLB
                  </Nav.Link>
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
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects3.map((project, index) => {
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
