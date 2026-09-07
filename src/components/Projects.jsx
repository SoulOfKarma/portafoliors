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
      description:
        "Plataforma Panakeia para la gestion de tickets del area de Recursos Fisicos y sistema de bodega integrado para la administracion de materiales y solicitudes de reparacion, digitalizando procesos previamente gestionados mediante planillas Excel.",
      imgUrls: [vhgtrrff1, vhgtrrff2, vhgtrrff3],
      technologies: [
        "Vue.js 2",
        "Vuesax",
        "Laravel 7",
        "MySQL 8",
        "APIs REST",
        "JWT",
        "Eloquent ORM",
        "Linux CentOS 7",
      ],
    },
  ];
  const projects3 = [
    {
      title: "Desarrollo Plataforma Abastecimiento HSLB",
      description:
        "Modernizacion de los sistemas SIAB y Plan Anual de Compras, migrando aplicaciones desarrolladas en Visual Basic hacia una arquitectura web moderna e implementando firmas digitales para reducir el uso de documentacion fisica.",
      imgUrls: [vhslb1, vhslb2, vhslb3],
      technologies: [
        "Vue.js 2",
        "Vuesax 3",
        "Laravel 7",
        "MySQL 8",
        "JWT",
        "Axios",
        "Linux CentOS 7",
        "Eloquent ORM",
      ],
    },
  ];
  const projects4 = [
    {
      title: "Grupo Tus Maquinas - Portal",
      description:
        "Desarrollo, mantenimiento y evolucion continua del portal principal de Grupo Tus Maquinas: arriendo y venta de maquinaria, vitrina de autoatencion para publicacion de equipos y bitacora de gestion documental en tiempo real.",
      imgUrls: [gtm1, gtm2, gtm3],
      technologies: [
        "Vue.js 3",
        "Vite",
        "NestJS",
        "CakePHP 3",
        "PostgreSQL",
        "Bootstrap",
        "JWT",
        "Puppeteer",
        "Cheerio",
      ],
    },
  ];
  const projectsBackoffice = [
    {
      title: "BackOffice IA - Videovigilancia",
      description:
        "Plataforma para la recepcion, visualizacion y gestion de eventos generados por sistemas de videovigilancia con analisis de Inteligencia Artificial, permitiendo administrar incidentes, visualizar evidencias y clasificar eventos.",
      technologies: [
        "Vue.js 3",
        "Vite",
        "NestJS",
        "TypeScript",
        "MySQL",
        "PostgreSQL",
        "JWT",
        "API Keys",
      ],
    },
  ];
  const projectsMDSystem = [
    {
      title: "MDSystem - Control de Acceso",
      description:
        "Plataforma web y aplicacion movil nativa para Android orientadas a la gestion de control de acceso, administracion de visitas y rondas de personal de seguridad, con automatizacion de reportes mediante Cron Jobs.",
      technologies: [
        "Vue.js 3",
        "Vite",
        "NestJS",
        "TypeScript",
        "MySQL",
        "Android (Kotlin)",
        "JWT",
        "Cron Jobs",
      ],
    },
  ];
  const projectsPublicaExpress = [
    {
      title: "Publica Express",
      description:
        "Aplicacion desarrollada dentro de Grupo Tus Maquinas para la automatizacion e integracion de datos, complementando el portal principal mediante APIs REST reutilizables bajo una arquitectura de microservicios.",
      technologies: ["Vue.js 3", "NestJS", "CakePHP 3", "PostgreSQL", "Puppeteer", "Cheerio"],
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
                className="nav-pills mb-5 align-items-center"
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
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Publica Express</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">BackOffice IA</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">MDSystem</Nav.Link>
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
                <Tab.Pane eventKey="fifth">
                  <Row>
                    {projectsPublicaExpress.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <Row>
                    {projectsBackoffice.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <Row>
                    {projectsMDSystem.map((project, index) => {
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
