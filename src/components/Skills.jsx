import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html5Skill from "../assets/icons/html5.png";
import cssSkill from "../assets/icons/css.png";
import javascriptSkill from "../assets/icons/javascript.png";
import typescriptSkill from "../assets/typescript-design-assets/ts-logo-round-512.svg";
import laravelSkill from "../assets/icons/lara.png";
import nestjsSkill from "../assets/nestjs-svgrepo-com.svg";
import mysqlSkill from "../assets/icons/mysql.png";
import postgresqlSkill from "../assets/postgresql.svg";
import nodejsSkill from "../assets/icons/nodejs.png";
import phpSkill from "../assets/icons/php.png";
import vuejsSkill from "../assets/icons/vuejs.png";
import quasarSkill from "../assets/Quasar.svg";
import colorSharp from "../assets/icons/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>Actualmente estas son las tecnologias que manejo</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider img-responsive center-block"
              >
                <div className="item">
                  <img src={html5Skill} alt="HTML5" />
                </div>
                <div className="item">
                  <img src={cssSkill} alt="CSS3" />
                </div>
                <div className="item">
                  <img src={javascriptSkill} alt="JavaScript" />
                </div>
                <div className="item">
                  <img src={typescriptSkill} alt="TypeScript" />
                </div>
                <div className="item">
                  <img src={vuejsSkill} alt="Vue.js" />
                </div>
                <div className="item">
                  <img src={quasarSkill} alt="Quasar Framework" />
                </div>
                <div className="item">
                  <img src={nestjsSkill} alt="NestJS" />
                </div>
                <div className="item">
                  <img src={laravelSkill} alt="Laravel" />
                </div>
                <div className="item">
                  <img src={nodejsSkill} alt="Node.js" />
                </div>
                <div className="item">
                  <img src={phpSkill} alt="PHP" />
                </div>
                <div className="item">
                  <img src={postgresqlSkill} alt="PostgreSQL" />
                </div>
                <div className="item">
                  <img src={mysqlSkill} alt="MySQL" />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
}

export default Skills;
