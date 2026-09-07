import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, imgUrls, technologies }) {
  const images = imgUrls && imgUrls.length > 0 ? imgUrls : imgUrl ? [imgUrl] : [];

  return (
    <Col sm={12} md={10} lg={8} className="mx-auto">
      <div className="proj-card">
        {images.length > 0 && (
          <div
            className={
              images.length > 1 ? "proj-gallery proj-gallery-multi" : "proj-gallery"
            }
          >
            {images.map((src, index) => (
              <img src={src} alt={`${title} ${index + 1}`} key={index} />
            ))}
          </div>
        )}
        <div className="proj-card-body">
          <h4>{title}</h4>
          <span>{description}</span>
          {technologies && technologies.length > 0 && (
            <div className="proj-tags">
              {technologies.map((tech, index) => (
                <span className="proj-tag" key={index}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
