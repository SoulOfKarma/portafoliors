import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html5Skill from "../assets/icons/html5.png";
import cssSkill from "../assets/icons/css.png";
import bootstrapSkill from "../assets/icons/bootstrap.png";
import javascriptSkill from "../assets/icons/javascript.png";
import laravelSkill from "../assets/icons/laravel.png";
import mysqlSkill from "../assets/icons/mysql.png";
import nodejsSkill from "../assets/icons/nodejs.png";
import phpSkill from "../assets/icons/php.png";
import reactSkill from "../assets/icons/react.png";
import vuejsSkill from "../assets/icons/vuejs.png";
import javaSkill from "../assets/icons/java.png";
import springSkill from "../assets/icons/spring.png";
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
                  <img src={html5Skill} alt="" />
                </div>
                <div className="item">
                  <img src={cssSkill} alt="" />
                </div>
                <div className="item">
                  <img src={bootstrapSkill} alt="" />
                </div>
                <div className="item">
                  <img src={javascriptSkill} alt="" />
                </div>
                <div className="item">
                  <img src={laravelSkill} alt="" />
                </div>
                <div className="item">
                  <img src={mysqlSkill} alt="" />
                </div>
                <div className="item">
                  <img src={nodejsSkill} alt="" />
                </div>
                <div className="item">
                  <img src={phpSkill} alt="" />
                </div>
                <div className="item">
                  <img src={reactSkill} alt="" />
                </div>
                <div className="item">
                  <img src={vuejsSkill} alt="" />
                </div>
                <div className="item">
                  <img src={javaSkill} alt="" />
                </div>
                <div className="item">
                  <img src={springSkill} alt="" />
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
